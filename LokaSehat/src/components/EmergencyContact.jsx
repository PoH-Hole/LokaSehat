import React from 'react';
import { defaultEmergencyContacts } from '../data/dummyData';

const EmergencyContact = ({ selectedLocation }) => {
  // Gunakan data lokasi jika ada, atau data default
  const contacts = selectedLocation?.emergencyContacts || defaultEmergencyContacts;

  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">
        {selectedLocation ? `EMERGENCY CONTACT - ${selectedLocation.name}` : 'EMERGENCY CONTACT'}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contacts.map(contact => (
          <div key={contact.id} className="bg-white p-3 rounded shadow">
            <p className="font-semibold">{contact.name}</p>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
        ))}
      </div>
      {selectedLocation && (
        <p className="text-sm text-gray-600 mt-3">
          * Kontak darurat untuk wilayah {selectedLocation.name}
        </p>
      )}
    </div>
  );
};

export default EmergencyContact;