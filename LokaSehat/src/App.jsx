import React, { useState } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import MapContainer from './components/MapContainer';
import DiseaseInfo from './components/DiseaseInfo';
import WarningSection from './components/WarningSection';
import EmergencyContact from './components/EmergencyContact';
import LoginModal from './components/LoginModal';
// Import komponen baru
import SelfScreening from './components/SelfScreening';
import EducationModule from './components/EducationModule';
import ReminderSystem from './components/ReminderSystem';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('peta'); // Tambah state untuk tab

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <LoginModal isOpen={true} onClose={() => {}} onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <Header user={user} onLogoutClick={handleLogout} />
      
      {/* Tab Navigation */}
<div className="bg-white border-b">
  <div className="max-w-6xl mx-auto overflow-x-auto">
    <div className="flex space-x-1 min-w-max">
      {[
        { id: 'peta', label: 'Peta Sebaran' },
        { id: 'skrining', label: 'Skrining Mandiri' },
        { id: 'edukasi', label: 'Edukasi Kesehatan' },
        { id: 'pengingat', label: 'Pengingat' }
      ].map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-3 sm:px-4 py-2 sm:py-3 font-medium text-xs sm:text-sm border-b-2 transition-colors ${
            activeTab === tab.id
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
</div>

      <main className="flex-grow p-4">
        <div className="max-w-6xl mx-auto">
          {/* Konten berdasarkan tab aktif */}
          {activeTab === 'peta' && (
            <div className="bg-white rounded-lg shadow-md p-4 relative">
              <h2 className="text-2xl font-bold mb-4">Pemetaan Geospasial Penyakit Menular</h2>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Pilih Lokasi Tujuan</h3>
              <div className="relative z-50 mb-4">
                <SearchBox onSelectLocation={handleLocationSelect} />
              </div>
              <div className="relative z-10">
                <MapContainer onSelectLocation={handleLocationSelect} selectedLocation={selectedLocation} />
              </div>
              <DiseaseInfo selectedLocation={selectedLocation} />
              <WarningSection selectedLocation={selectedLocation} />
              <EmergencyContact selectedLocation={selectedLocation} />
            </div>
          )}

          {activeTab === 'skrining' && (
            <SelfScreening />
          )}

          {activeTab === 'edukasi' && (
            <EducationModule />
          )}

          {activeTab === 'pengingat' && (
            <ReminderSystem />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;