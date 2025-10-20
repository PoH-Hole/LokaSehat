import React from 'react';
import { defaultWarning } from '../data/dummyData';

const WarningSection = ({ selectedLocation }) => {
  // Gunakan data lokasi jika ada, atau data default
  const warningData = selectedLocation?.warning || defaultWarning;

  // Jika tidak ada warning untuk lokasi tertentu dan menggunakan default, tampilkan sedikit berbeda
  const isDefaultWarning = !selectedLocation?.warning;

  return (
    <div className={`border-l-4 p-4 mb-6 rounded ${
      isDefaultWarning 
        ? 'bg-yellow-50 border-yellow-500' 
        : 'bg-red-50 border-red-500'
    }`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className={`h-5 w-5 ${
            isDefaultWarning ? 'text-yellow-400' : 'text-red-400'
          }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className={`font-semibold ${
            isDefaultWarning ? 'text-yellow-800' : 'text-red-800'
          }`}>
            {isDefaultWarning ? 'WARNING' : `WARNING - ${selectedLocation.name}`} {warningData.temperature}°C
          </h3>
          <div className={`mt-2 ${isDefaultWarning ? 'text-yellow-700' : 'text-red-700'}`}>
            <p>{warningData.message}</p>
            {selectedLocation && (
              <p className="text-sm mt-1">
                Status: {selectedLocation.safety} - Risiko: {selectedLocation.level === 'high' ? 'Tinggi' : selectedLocation.level === 'medium' ? 'Sedang' : 'Rendah'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningSection;