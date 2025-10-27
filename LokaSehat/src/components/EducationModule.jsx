import React, { useState } from 'react';
import { RiVirusFill } from "react-icons/ri";
import { FaLungsVirus } from "react-icons/fa";
import { PiThermometerColdBold } from "react-icons/pi";
import { FaMosquito } from "react-icons/fa6";



const EducationModule = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  // Data edukasi kesehatan
  const educationContent = {
    'TBC': {
      title: 'Tuberculosis (TBC)',
      content: `
        <h3>Apa itu TBC?</h3>
        <p>Tuberculosis adalah penyakit menular yang disebabkan oleh bakteri Mycobacterium tuberculosis.</p>
        <h3>Cara Penularan:</h3>
        <ul>
          <li>Melalui udara saat penderita batuk/bersin</li>
          <li>Kontak erat dengan penderita</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Vaksin BCG</li>
          <li>Gunakan masker di tempat umum</li>
          <li>Ventilasi ruangan yang baik</li>
        </ul>
      `,
      correctAnswer: 'B' // Jawaban benar untuk kuis
    },
    'COVID-19': {
      title: 'COVID-19',
      content: `
        <h3>Apa itu COVID-19?</h3>
        <p>Penyakit menular yang disebabkan oleh virus SARS-CoV-2.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Demam, batuk, sesak napas</li>
          <li>Kehilangan indra penciuman/pengecap</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Vaksinasi lengkap + booster</li>
          <li>Pakai masker di keramaian</li>
          <li>Cuci tangan secara teratur</li>
        </ul>
      `,
      correctAnswer: 'B'
    },
    'Influenza': {
      title: 'Influenza (Flu)',
      content: `
        <h3>Apa itu Influenza?</h3>
        <p>Penyakit pernapasan menular yang disebabkan oleh virus influenza.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Demam tinggi, sakit kepala</li>
          <li>Batuk, sakit tenggorokan, hidung tersumbat/meler</li>
          <li>Nyeri otot dan kelelahan</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Vaksinasi flu tahunan</li>
          <li>Menutup mulut saat batuk/bersin</li>
          <li>Cuci tangan dengan sabun</li>
        </ul>
      `,
      correctAnswer: 'B'
    },
    'Pneumonia': {
      title: 'Pneumonia (Radang Paru-paru)',
      content: `
        <h3>Apa itu Pneumonia?</h3>
        <p>Infeksi yang menyebabkan peradangan kantung udara di salah satu atau kedua paru-paru, dapat disebabkan oleh bakteri, virus, atau jamur.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Batuk berdahak atau kering</li>
          <li>Nyeri dada saat bernapas/batuk</li>
          <li>Demam dan menggigil</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Vaksinasi (misalnya PCV, Hib)</li>
          <li>Tidak merokok</li>
          <li>Menjaga kebersihan diri</li>
        </ul>
      `,
      correctAnswer: 'B'
    },
    'Malaria': {
      title: 'Malaria',
      content: `
        <h3>Apa itu Malaria?</h3>
        <p>Penyakit menular yang disebabkan oleh parasit Plasmodium yang ditularkan melalui gigitan nyamuk Anopheles betina.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Demam berkala yang disertai menggigil</li>
          <li>Sakit kepala dan muntah</li>
          <li>Kelelahan</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Tidur menggunakan kelambu berinsektisida</li>
          <li>Menggunakan obat nyamuk/repellen</li>
          <li>Membersihkan tempat penampungan air (Pemberantasan Sarang Nyamuk)</li>
        </ul>
      `,
      correctAnswer: 'C'
    },
    'Diare': {
      title: 'Diare',
      content: `
        <h3>Apa itu Diare?</h3>
        <p>Buang air besar dengan konsistensi lebih cair dari biasanya dan frekuensi lebih sering (minimal 3 kali sehari), sering disebabkan oleh infeksi bakteri, virus, atau parasit.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Feses cair</li>
          <li>Perut kembung atau keram</li>
          <li>Mual dan muntah (terkadang)</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Cuci tangan sebelum makan dan setelah dari toilet</li>
          <li>Minum air yang sudah dimasak/bersih</li>
          <li>Mencuci buah dan sayur dengan benar</li>
        </ul>
      `,
      correctAnswer: 'A'
    },
    'Cacar Air': {
      title: 'Cacar Air (Varisela)',
      content: `
        <h3>Apa itu Cacar Air?</h3>
        <p>Penyakit menular yang disebabkan oleh virus <i>Varicella-zoster</i>. Umumnya menyerang anak-anak, namun bisa juga dialami orang dewasa.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Demam ringan</li>
          <li>Munculnya ruam kulit berisi cairan yang gatal, dimulai dari wajah dan badan, lalu menyebar</li>
          <li>Sakit kepala dan lemas</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Vaksinasi varisela</li>
          <li>Menghindari kontak dengan penderita saat mereka masih menular</li>
          <li>Istirahat yang cukup</li>
        </ul>
      `,
      correctAnswer: 'B'
    },
    'DBD': {
      title: 'Demam Berdarah Dengue (DBD)',
      content: `
        <h3>Apa itu DBD?</h3>
        <p>Penyakit yang disebabkan oleh virus Dengue dan ditularkan melalui gigitan nyamuk <i>Aedes aegypti</i> dan <i>Aedes albopictus</i>.</p>
        <h3>Gejala Utama:</h3>
        <ul>
          <li>Demam tinggi mendadak (3-7 hari)</li>
          <li>Nyeri sendi, otot, dan tulang</li>
          <li>Muncul bintik-bintik merah di kulit</li>
          <li>Pada kasus berat, bisa terjadi pendarahan dan syok</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Melakukan 3M Plus (Menguras, Menutup, Mendaur ulang)</li>
          <li>Menggunakan losion anti nyamuk</li>
          <li>Memasang kawat kasa pada jendela/ventilasi</li>
        </ul>
      `,
      correctAnswer: 'C'
    },
    'Hepatitis': {
      title: 'Hepatitis (Peradangan Hati)',
      content: `
        <h3>Apa itu Hepatitis?</h3>
        <p>Peradangan pada organ hati, umumnya disebabkan oleh infeksi virus (A, B, C, D, E), konsumsi alkohol berlebihan, atau penyakit autoimun.</p>
        <h3>Cara Penularan Virus:</h3>
        <ul>
          <li><b>Hepatitis A/E:</b> Makanan atau air yang terkontaminasi (fekal-oral)</li>
          <li><b>Hepatitis B/C/D:</b> Darah, cairan tubuh, atau hubungan seksual (jarum suntik bergantian, transfusi darah)</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li>Vaksinasi (terutama Hepatitis A dan B)</li>
          <li>Menjaga kebersihan makanan dan air</li>
          <li>Tidak berbagi jarum suntik</li>
        </ul>
      `,
      correctAnswer: 'A'
    },
    'HIV/AIDS': {
      title: 'HIV/AIDS',
      content: `
        <h3>Apa itu HIV/AIDS?</h3>
        <p><b>HIV</b> (Human Immunodeficiency Virus) adalah virus yang menyerang sistem kekebalan tubuh. <b>AIDS</b> (Acquired Immunodeficiency Syndrome) adalah stadium akhir infeksi HIV.</p>
        <h3>Cara Penularan:</h3>
        <ul>
          <li>Hubungan seksual tanpa kondom</li>
          <li>Penggunaan jarum suntik bergantian</li>
          <li>Dari ibu ke anak selama kehamilan, persalinan, atau menyusui</li>
        </ul>
        <h3>Pencegahan:</h3>
        <ul>
          <li><b>A</b>bstinence (Tidak berhubungan seks berisiko)</li>
          <li><b>B</b>e faithful (Setia pada pasangan)</li>
          <li><b>C</b>ondom (Gunakan kondom)</li>
          <li><b>D</b>on't use drugs (Tidak menggunakan narkoba suntik)</li>
          <li><b>E</b>ducation (Edukasi dan skrining)</li>
        </ul>
      `,
      correctAnswer: 'B'
    },
  };

  // Daftar topik
  const topics = {
    'TBC':{icon : <FaLungsVirus/>}, 'COVID-19':{icon : <RiVirusFill/>}
    ,'Influenza':{icon : <PiThermometerColdBold/>}, 'Pneumonia':{icon : <RiVirusFill/>},
    'Malaria':{icon : <FaMosquito/>},'Cacar Air':{icon : <RiVirusFill/>},
    'DBD':{icon : <FaMosquito/>}, 'Diare':{icon : <RiVirusFill/>},
    'Hepatitis':{icon : <RiVirusFill/>}, 'HIV/AIDS':{icon : <RiVirusFill/>}
  };

  // Fungsi untuk menangani pemilihan jawaban
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setCorrectAnswer(educationContent[selectedTopic].correctAnswer);
  };

  // Fungsi untuk mendapatkan kelas CSS berdasarkan status jawaban
  const getAnswerClass = (answer) => {
    if (selectedAnswer === answer) {
      return answer === correctAnswer 
        ? 'bg-green-100 border-green-500 text-green-700' 
        : 'bg-red-100 border-red-500 text-red-700';
    }
    return 'bg-white border-gray-300 hover:bg-gray-50';
  };

  // Fungsi untuk mereset kuis saat topik berubah
  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
    setSelectedAnswer(null);
    setCorrectAnswer(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-4">Edukasi Kesehatan Interaktif</h3>
      
      {/* Daftar Topik */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Pilih Topik Edukasi:</label>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.entries(topics).map(([topic, { icon }]) => (
            <button 
              key={topic} 
              onClick={() => handleTopicChange(topic)}
              className={`py-3 pl-2 rounded-xl m-2 text-sm flex items-center shadow-[1px_3px_5px_5px_rgba(142,197,255,0.5)] ${
                selectedTopic === topic 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <span className="text-2xl mr-[10px] md:m-[10px]">{icon}</span>
              <div className='flex  flex-col items-start'>
                <span className='font-bold text-[1rem]'>{topic}</span>
                <span className='font-light text-[0.75rem] text-start truncate w-full max-w-[140px] sm:max-w-none'>Pelajari penyakit ini</span>
              </div>
              <span className="text-lg font-bold mr-[10px] md:m-[10px] w-full justify-end hidden md:flex">&#8594;</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Konten Edukasi */}
      {selectedTopic && educationContent[selectedTopic] && (
        <div className="border rounded-lg p-4">
          <h4 className="text-lg font-bold mb-3">{educationContent[selectedTopic].title}</h4>
          <div 
            className="prose prose-sm max-w-none" 
            dangerouslySetInnerHTML={{ __html: educationContent[selectedTopic].content }} 
          />
          
          {/* Quiz Interaktif Sederhana */}
          <div className="mt-6 p-4 bg-blue-50 rounded">
            <h5 className="font-semibold mb-2">Kuis Singkat:</h5>
            <p className="mb-3">Apa cara utama penularan {selectedTopic}?</p>
            
            <div className="space-y-2">
              <button 
                onClick={() => handleAnswerSelect('A')}
                className={`w-full text-left p-2 rounded border transition-colors ${getAnswerClass('A')}`}
              >
                A. Melalui makanan
              </button>
              <button 
                onClick={() => handleAnswerSelect('B')}
                className={`w-full text-left p-2 rounded border transition-colors ${getAnswerClass('B')}`}
              >
                B. Melalui udara
              </button>
              <button 
                onClick={() => handleAnswerSelect('C')}
                className={`w-full text-left p-2 rounded border transition-colors ${getAnswerClass('C')}`}
              >
                C. Melalui sentuhan kulit
              </button>
            </div>
            
            {/* Feedback untuk jawaban yang dipilih */}
            {selectedAnswer && (
              <div className={`mt-3 p-2 rounded text-sm ${
                selectedAnswer === correctAnswer 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {selectedAnswer === correctAnswer 
                  ? '✅ Jawaban Anda benar!' 
                  : '❌ Jawaban Anda salah. Coba lagi!'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationModule;