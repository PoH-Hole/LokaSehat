import React, { useState, useEffect } from 'react';
import { LocalNotifications } from '@capacitor/local-notifications';

const ReminderSystem = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({
    title: '',
    time: '',
    repeat: 'once'
  });
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Toast notification
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  // Request permission untuk notifikasi
  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const result = await LocalNotifications.requestPermissions();
        console.log('Notification permission:', result);
        if (result.display === 'granted') {
          showToast('Notifikasi diaktifkan', 'success');
        }
      } catch (error) {
        console.log('Error requesting notification permission:', error);
      }
    };

    requestNotificationPermission();
  }, []);

  // Load reminders dari localStorage
  useEffect(() => {
    const savedReminders = localStorage.getItem('healthReminders');
    if (savedReminders) {
      try {
        const parsedReminders = JSON.parse(savedReminders);
        setReminders(parsedReminders);
        
        // Schedule ulang notifikasi yang ada
        scheduleExistingReminders(parsedReminders);
      } catch (error) {
        console.log('Error loading reminders:', error);
      }
    }
  }, []);

  // Schedule notifikasi untuk reminder yang ada - DIPERBAIKI
  const scheduleExistingReminders = async (remindersList) => {
    try {
      for (const reminder of remindersList) {
        if (!reminder.completed) {
          try {
            if (reminder.repeat === 'once') {
              await scheduleNotification(reminder);
            } else {
              await scheduleRepeatingNotification(reminder);
            }
          } catch (error) {
            console.log(`Error scheduling reminder ${reminder.id}:`, error);
          }
        }
      }
    } catch (error) {
      console.log('Error in scheduleExistingReminders:', error);
    }
  };

  // Generate ID yang aman untuk notifikasi - DIPERBAIKI
  const generateNotificationId = (reminderId) => {
    // Gunakan hash sederhana untuk menghindari ID besar
    return Math.abs(reminderId.toString().hashCode()) % 10000;
  };

  // Tambahkan hash function untuk string
  String.prototype.hashCode = function() {
    let hash = 0;
    for (let i = 0; i < this.length; i++) {
      const char = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  };

  // Function untuk schedule notifikasi - DIPERBAIKI
  const scheduleNotification = async (reminder) => {
    try {
      const notificationTime = new Date();
      const [hours, minutes] = reminder.time.split(':');
      
      notificationTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      // Jika waktu sudah lewat hari ini, schedule untuk besok
      if (notificationTime < new Date()) {
        notificationTime.setDate(notificationTime.getDate() + 1);
      }

      const notificationId = generateNotificationId(reminder.id);

      await LocalNotifications.schedule({
        notifications: [
          {
            id: notificationId,
            title: 'Pengingat Kesehatan 🏥',
            body: reminder.title,
            schedule: { at: notificationTime },
            extra: { reminderId: reminder.id }
          }
        ]
      });
      
      console.log(`Scheduled notification for reminder ${reminder.id}`);
    } catch (error) {
      console.log('Error scheduling notification:', error);
      throw error;
    }
  };

  // Schedule notifikasi berulang - DIPERBAIKI
  const scheduleRepeatingNotification = async (reminder) => {
    try {
      const [hours, minutes] = reminder.time.split(':');
      const notificationId = generateNotificationId(reminder.id);
      
      await LocalNotifications.schedule({
        notifications: [
          {
            id: notificationId,
            title: 'Pengingat Kesehatan 🏥',
            body: reminder.title,
            schedule: { 
              on: {
                hour: parseInt(hours),
                minute: parseInt(minutes)
              },
              every: reminder.repeat === 'daily' ? 'day' : 'week'
            },
            extra: { reminderId: reminder.id }
          }
        ]
      });
      
      console.log(`Scheduled repeating notification for reminder ${reminder.id}`);
    } catch (error) {
      console.log('Error scheduling repeating notification:', error);
      throw error;
    }
  };

  // Save reminders ke localStorage - DIPERBAIKI dengan error handling
  useEffect(() => {
    try {
      localStorage.setItem('healthReminders', JSON.stringify(reminders));
      console.log('Reminders saved to localStorage:', reminders.length);
    } catch (error) {
      console.log('Error saving reminders to localStorage:', error);
    }
  }, [reminders]);

  const addReminder = async () => {
    if (newReminder.title && newReminder.time) {
      try {
        const reminder = {
          id: Date.now(),
          ...newReminder,
          completed: false,
          createdAt: new Date().toISOString()
        };
        
        setReminders(prevReminders => [...prevReminders, reminder]);
        
        // Schedule notifikasi
        if (reminder.repeat === 'once') {
          await scheduleNotification(reminder);
        } else {
          await scheduleRepeatingNotification(reminder);
        }
        
        setNewReminder({ title: '', time: '', repeat: 'once' });
        showToast('Pengingat berhasil ditambahkan!', 'success');
        console.log('Reminder added successfully:', reminder.id);
      } catch (error) {
        console.log('Error adding reminder:', error);
        showToast('Gagal menambahkan pengingat', 'error');
      }
    } else {
      showToast('Harap isi deskripsi dan waktu pengingat!', 'error');
    }
  };

  const deleteReminder = async (id) => {
    try {
      // Cancel notifikasi yang terkait
      const notificationId = generateNotificationId(id);
      await LocalNotifications.cancel({
        notifications: [{ id: notificationId }]
      });
      
      setReminders(prevReminders => prevReminders.filter(reminder => reminder.id !== id));
      showToast('Pengingat berhasil dihapus', 'success');
      console.log('Reminder deleted:', id);
    } catch (error) {
      console.log('Error deleting reminder:', error);
      showToast('Gagal menghapus pengingat', 'error');
    }
  };

  const toggleReminder = async (id) => {
    try {
      const updatedReminders = reminders.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      );
      
      setReminders(updatedReminders);
      
      // Jika di-uncheck, schedule ulang notifikasi
      const reminder = updatedReminders.find(r => r.id === id);
      const notificationId = generateNotificationId(id);
      
      if (!reminder.completed) {
        if (reminder.repeat === 'once') {
          await scheduleNotification(reminder);
        } else {
          await scheduleRepeatingNotification(reminder);
        }
        showToast('Pengingat diaktifkan', 'success');
        console.log('Reminder re-enabled:', id);
      } else {
        // Jika di-check, cancel notifikasi
        await LocalNotifications.cancel({
          notifications: [{ id: notificationId }]
        });
        showToast('Pengingat dinonaktifkan', 'info');
        console.log('Reminder disabled:', id);
      }
    } catch (error) {
      console.log('Error toggling reminder:', error);
      showToast('Gagal mengubah status pengingat', 'error');
    }
  };

  const addPredefinedReminder = async (reminder) => {
    try {
      const newReminder = {
        id: Date.now(),
        ...reminder,
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      setReminders(prevReminders => [...prevReminders, newReminder]);
      
      // Schedule notifikasi untuk predefined reminder
      if (reminder.repeat === 'once') {
        await scheduleNotification(newReminder);
      } else {
        await scheduleRepeatingNotification(newReminder);
      }
      
      showToast('Pengingat standar ditambahkan', 'success');
      console.log('Predefined reminder added:', newReminder.id);
    } catch (error) {
      console.log('Error adding predefined reminder:', error);
      showToast('Gagal menambahkan pengingat standar', 'error');
    }
  };

  // Predefined reminders
  const predefinedReminders = [
    { title: 'Minum vitamin', time: '08:00', repeat: 'daily' },
    { title: 'Cuci tangan setelah sampai rumah', time: '19:00', repeat: 'daily' },
    { title: 'Cek suhu tubuh', time: '07:00', repeat: 'daily' },
    { title: 'Ganti masker', time: '12:00', repeat: 'daily' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
          toast.type === 'success' 
            ? 'bg-green-500 text-white' 
            : toast.type === 'error' 
            ? 'bg-red-500 text-white' 
            : 'bg-blue-500 text-white'
        }`}>
          <div className="flex items-center space-x-2">
            {toast.type === 'success' && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {toast.type === 'error' && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
            {toast.type === 'info' && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-4">Sistem Pengingat Kesehatan</h3>
      
      {/* UI yang sama seperti sebelumnya */}
      <div className="mb-6 p-4 border rounded-lg">
        <h4 className="font-semibold mb-3">Tambah Pengingat Baru</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <input
            type="text"
            placeholder="Deskripsi pengingat"
            value={newReminder.title}
            onChange={(e) => setNewReminder({...newReminder, title: e.target.value})}
            className="p-2 border rounded"
          />
          <input
            type="time"
            value={newReminder.time}
            onChange={(e) => setNewReminder({...newReminder, time: e.target.value})}
            className="p-2 border rounded"
          />
          <select
            value={newReminder.repeat}
            onChange={(e) => setNewReminder({...newReminder, repeat: e.target.value})}
            className="p-2 border rounded"
          >
            <option value="once">Sekali</option>
            <option value="daily">Setiap Hari</option>
            <option value="weekly">Setiap Minggu</option>
          </select>
        </div>
        <button
          onClick={addReminder}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tambah Pengingat
        </button>
      </div>

      {/* Pengingat Predefined */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Pengingat Standar Kesehatan:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {predefinedReminders.map((reminder, index) => (
            <button
              key={index}
              onClick={() => addPredefinedReminder(reminder)}
              className="p-3 bg-green-50 border border-green-200 rounded text-left hover:bg-green-100 transition-colors"
            >
              <div className="font-medium">{reminder.title}</div>
              <div className="text-sm text-gray-600">
                {reminder.time} • {reminder.repeat === 'daily' ? 'Setiap Hari' : 'Sekali'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Daftar Pengingat */}
      <div>
        <h4 className="font-semibold mb-3">
          Pengingat Aktif ({reminders.filter(r => !r.completed).length}/{reminders.length})
        </h4>
        {reminders.length === 0 ? (
          <p className="text-gray-500">Belum ada pengingat</p>
        ) : (
          <div className="space-y-2">
            {reminders.map(reminder => (
              <div key={reminder.id} className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={reminder.completed}
                    onChange={() => toggleReminder(reminder.id)}
                    className="mr-3 w-4 h-4"
                  />
                  <div>
                    <div className={`font-medium ${reminder.completed ? 'line-through text-gray-500' : ''}`}>
                      {reminder.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {reminder.time} • {reminder.repeat === 'daily' ? 'Setiap Hari' : 
                        reminder.repeat === 'weekly' ? 'Setiap Minggu' : 'Sekali'}
                      {reminder.completed && ' • Nonaktif'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => deleteReminder(reminder.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded transition-colors"
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReminderSystem;