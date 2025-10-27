import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { RiVirusFill } from "react-icons/ri";
import { FaHeadSideMask } from "react-icons/fa";

const DiseaseInfo = ({ selectedLocation }) => {
  // Jika tidak ada lokasi yang dipilih, tampilkan data default
  if (!selectedLocation) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Tingkat Keamanan */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className='flex items-center w-full translate-x-[-5px] mb-2'>
            <MdOutlineSecurity className='mr-2 text-3xl'/>
            <h3 className="text-sm font-semibold ">Tingkat Keamanan Wilayah</h3>
          </div>
          <div className="flex items-center"> 
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
            <span className="text-gray-700">Pilih lokasi untuk melihat info</span>
          </div>
        </div>
        
        {/* Penyakit Menyebar */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className='flex items-center w-full translate-x-[-5px] mb-2'>
            <RiVirusFill className='mr-2 text-3xl'/>
            <h3 className="text-sm font-semibold ">Penyakit Rawan</h3>
          </div>
          <p className="text-gray-700">Pilih lokasi untuk melihat penyakit rawan</p>
        </div>
        
        {/* Upaya Pencegahan */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className='flex items-center w-full translate-x-[-5px] mb-2'>
            <FaHeadSideMask className='mr-2 text-3xl'/>
            <h3 className="text-sm font-semibold ">Upaya Pencegahan Umum</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700">
            <li>Gunakan masker</li>
            <li>Jaga Kebersihan</li>
            <li>Hindari keramaian</li>
            <li>Vaksinasi</li>
            <li>Konsumsi Vitamin</li>
          </ul>
        </div>
      </div>
    );
  }

  // Tentukan warna berdasarkan level risiko
  const getSafetyColor = (level) => {
    switch(level) {
      case 'high': return 'red';
      case 'medium': return 'yellow';
      default: return 'green';
    }
  };

  // Tentukan teks untuk level risiko
  const getSafetyText = (level) => {
    switch(level) {
      case 'high': return 'Waspada';
      case 'medium': return 'Aman';
      default: return 'Sangat Aman';
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {/* Tingkat Keamanan */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className='flex items-center w-full translate-x-[-5px] mb-2'>
          <MdOutlineSecurity className='mr-2 text-3xl'/>
          <h3 className="text-sm font-semibold">Tingkat Keamanan {selectedLocation.name}</h3>
        </div>
        <div className="flex items-center mb-2">
          <div className={`w-4 h-4 bg-${getSafetyColor(selectedLocation.level)}-500 rounded-full mr-2`}></div>
          <span className="text-gray-700">{getSafetyText(selectedLocation.level)}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Status: {selectedLocation.safety}
        </p>
      </div>
      
      {/* Penyakit Menyebar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className='flex items-center w-full translate-x-[-5px] mb-2'>
          <RiVirusFill className='mr-2 text-3xl'/>
          <h3 className="text-sm font-semibold ">Penyakit di {selectedLocation.name}</h3>
        </div>
        {selectedLocation.diseases && selectedLocation.diseases.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700">
            {selectedLocation.diseases.map((disease, index) => (
              <li key={index}>{disease}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">Tidak ada penyakit yang dilaporkan</p>
        )}
      </div>
      
      {/* Upaya Pencegahan */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className='flex items-center w-full translate-x-[-5px] mb-2'>
          <FaHeadSideMask className='mr-2 text-3xl'/>
          <h3 className="text-sm font-semibold">Upaya Pencegahan</h3>
        </div>
        {selectedLocation.precautions && selectedLocation.precautions.length > 0 ? (
          <ul className="list-disc list-inside text-gray-700">
            {selectedLocation.precautions.map((precaution, index) => (
              <li key={index}>{precaution}</li>
            ))}
          </ul>
        ) : (
          <ul className="list-disc list-inside text-gray-700">
            <li>Gunakan masker</li>
            <li>Cuci tangan secara teratur</li>
            <li>Hindari keramaian</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DiseaseInfo;