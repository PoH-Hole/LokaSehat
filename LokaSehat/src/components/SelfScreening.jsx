import React, { useState } from 'react';
import { RiVirusFill } from "react-icons/ri";
import { FaLungsVirus } from "react-icons/fa";
import { PiThermometerColdBold } from "react-icons/pi";
import { FaMosquito } from "react-icons/fa6";


const SelfScreening = () => {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [symptoms, setSymptoms] = useState({});
  const [result, setResult] = useState(null);

  const diseaseQuestions = {
    'TBC': {
      icon: <FaLungsVirus />,
      info: [
        'Batuk lebih dari 2 minggu',
        'Demam ringan terutama sore hari',
        'Berkeringat di malam hari',
        'Penurunan berat badan',
        'Nafsu makan menurun'
      ]
    },
    'COVID-19': {
      icon: <RiVirusFill />,
      info: [
        'Demam ≥38°C',
        'Batuk kering',
        'Sesak napas',
        'Kehilangan indra penciuman/pengecap',
        'Nyeri tenggorokan'
      ]
    },
    'Influenza': {
      icon: <PiThermometerColdBold />,
      info: [
        'Demam mendadak',
        'Nyeri otot dan sendi',
        'Sakit kepala',
        'Kelelahan',
        'Hidung tersumbat'
      ]
    },
    'Pneumonia': {
      icon: <RiVirusFill />,
      info: [
        'Batuk berdahak',
        'Sesak napas',
        'Nyeri dada',
        'Demam tinggi',
        'Menggigil'
      ]
    },
    'Malaria': {
      icon: <FaMosquito />,
      info: [
        'Demam periodik (naik-turun)',
        'Menggigil',
        'Sakit kepala berat',
        'Mual dan muntah',
        'Berkeringat banyak'
      ]
    },
    'Cacar Air': {
      icon: <RiVirusFill />,
      info: [
        'Bintil merah berisi cairan',
        'Demam',
        'Nyeri kepala',
        'Nafsu makan menurun',
        'Rasa gatal pada kulit'
      ]
    }
  };

  const handleDiseaseSelect = (disease) => {
    setSelectedDisease(disease);
    setSymptoms({});
    setResult(null);
  };

  const handleSymptomChange = (symptom, value) => {
    setSymptoms(prev => ({
      ...prev,
      [symptom]: value
    }));
  };

  const calculateRisk = () => {
    const selectedSymptoms = Object.values(symptoms).filter(val => val).length;
    const totalSymptoms = diseaseQuestions[selectedDisease].length;
    const percentage = (selectedSymptoms / totalSymptoms) * 100;

    let riskLevel = 'Rendah';
    let recommendation = 'Tetap jaga kesehatan dan pantau gejala';

    if (percentage >= 60) {
      riskLevel = 'Tinggi';
      recommendation = 'Segera konsultasi ke fasilitas kesehatan terdekat';
    } else if (percentage >= 30) {
      riskLevel = 'Sedang';
      recommendation = 'Periksakan diri ke puskesmas dan lakukan isolasi mandiri';
    }

    setResult({
      riskLevel,
      recommendation,
      percentage: percentage.toFixed(0)
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Skrining Mandiri Gejala Penyakit</h3>
      
      {/* Pilih Penyakit */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Pilih Penyakit untuk Diskrining:</label>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.entries(diseaseQuestions).map(([disease, { icon }]) => (
            <button
              key={disease}
              onClick={() => handleDiseaseSelect(disease)}
              className={`p-3 rounded-xl border flex items-center m-2 shadow-[1px_3px_5px_5px_rgba(142,197,255,0.5)] ${
                selectedDisease === disease 
                  ? 'bg-blue-500 text-white border-none' 
                  : 'bg-gray-200 hover:bg-gray-300 border-none'
              }`}
            >
              <span className="text-2xl mr-[10px] md:m-[10px]">{icon}</span>
              <div className='flex  flex-col items-start'>
                <span className='font-bold text-[1rem]'>{disease}</span>
                <span className='font-light text-[0.75rem] text-start truncate w-full max-w-[120px] sm:max-w-none'>Cek diri anda mengenai penyakit ini</span>
              </div>
              <span className="text-lg font-bold mr-[10px] md:m-[10px] w-full justify-end hidden md:flex">&#8594;</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form Gejala */}
      {selectedDisease && (
        <div className="mb-6 flex flex-col items-center">
          <h4 className="font-semibold mb-3">Gejala {selectedDisease}</h4>
          <div className="space-y-3 w-full">
            {diseaseQuestions[selectedDisease].info.map((symptom, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span>{symptom}</span>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`symptom-${index}`}
                      checked={symptoms[symptom] === true}
                      onChange={() => handleSymptomChange(symptom, true)}
                      className="mr-2"
                    />
                    Ya
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name={`symptom-${index}`}
                      checked={symptoms[symptom] === false}
                      onChange={() => handleSymptomChange(symptom, false)}
                      className="mr-2"
                    />
                    Tidak
                  </label>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={calculateRisk}
            disabled={Object.keys(symptoms).length === 0}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Analisis Risiko
          </button>
        </div>
      )}

      {/* Hasil Skrining */}
      {result && (
        <div className={`p-4 rounded-lg ${
          result.riskLevel === 'Tinggi' ? 'bg-red-100 border border-red-300' :
          result.riskLevel === 'Sedang' ? 'bg-yellow-100 border border-yellow-300' :
          'bg-green-100 border border-green-300'
        }`}>
          <h4 className="font-bold mb-2">Hasil Skrining:</h4>
          <p><strong>Tingkat Risiko:</strong> {result.riskLevel} ({result.percentage}% gejala terpenuhi)</p>
          <p><strong>Rekomendasi:</strong> {result.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default SelfScreening;