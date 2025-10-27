import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika autentikasi
    console.log('Login attempted with:', credentials);
    // Untuk demo, kita anggap login berhasil
    onLogin({
      name: 'Zyunique',
      email: credentials.email
    });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Validasi password
    if (registerData.password !== registerData.confirmPassword) {
      alert('Password dan konfirmasi password tidak cocok');
      return;
    }
    
    // Di sini Anda bisa menambahkan logika pendaftaran
    console.log('Registration attempted with:', registerData);
    // Untuk demo, kita anggap registrasi berhasil dan langsung login
    onLogin({
      name: registerData.name,
      email: registerData.email
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-300 to-indigo-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-2xl shadow-black">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>
        
        {isRegistering ? (
          // Form Registrasi
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Daftar Akun Baru</h2>
            
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="registerEmail">
                  Email
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors mb-4"
              >
                Daftar
              </button>
            </form>
            
            <div className="text-center">
              <p className="text-gray-600">
                Sudah punya akun?{' '}
                <button 
                  className="text-blue-600 hover:underline"
                  onClick={() => setIsRegistering(false)}
                >
                  Login di sini
                </button>
              </p>
            </div>
          </>
        ) : (
          // Form Login
          <>
            <h2 className="text-2xl font-bold text-grey-800 mb-6 text-center">Login</h2>
            
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleLoginChange}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleLoginChange}
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mb-4"
              >
                Login
              </button>
            </form>
            
            <div className="text-center">
              <p className="text-gray-600">
                Belum punya akun?{' '}
                <button 
                  className="text-blue-600 hover:underline"
                  onClick={() => setIsRegistering(true)}
                >
                  Daftar di sini
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;