import React, { useState, useEffect } from 'react';
import { diseaseData } from '../data/dummyData';

const SearchBox = ({ onSelectLocation }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      const filtered = diseaseData.filter(
        loc => loc.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Show max 5 suggestions
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedSuggestionIndex(-1);
    
    if (value.length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      onSelectLocation(null); // Clear selection when query is empty
    }
  };

  const handleSuggestionClick = (location) => {
    setQuery(location.name);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    
    if (onSelectLocation) {
      onSelectLocation(location);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // Move selection down
      e.preventDefault();
      setSelectedSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      // Move selection up
      e.preventDefault();
      setSelectedSuggestionIndex(prev => 
        prev > 0 ? prev - 1 : -1
      );
    } else if (e.key === 'Enter') {
      // Select the current suggestion
      e.preventDefault();
      if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
        handleSuggestionClick(suggestions[selectedSuggestionIndex]);
      } else if (suggestions.length > 0) {
        // Select the first suggestion if none is selected
        handleSuggestionClick(suggestions[0]);
      }
    } else if (e.key === 'Escape') {
      // Hide suggestions
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow for clicking on them
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 200);
  };

  const handleInputFocus = () => {
    if (query.length > 0 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="mb-6 relative z-50"> {/* Increased z-index */}
      <input 
        type="text" 
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Cari Lokasi (contoh:Gambir, dll.)" 
        className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        aria-autocomplete="list"
        aria-haspopup="true"
        aria-expanded={showSuggestions}
      />
      <svg className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((location, index) => (
            <div 
              key={location.id}
              className={`p-3 cursor-pointer transition-colors ${
                index === selectedSuggestionIndex 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleSuggestionClick(location)}
              onMouseEnter={() => setSelectedSuggestionIndex(index)}
            >
              <div className="font-medium">{location.name}</div>
              <div className="text-sm text-gray-600 flex items-center mt-1">
                <span className="mr-2">Penyakit: {location.diseases.join(", ")}</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  location.level === 'high' 
                    ? 'bg-red-100 text-red-800' 
                    : location.level === 'medium' 
                      ? 'bg-orange-100 text-orange-800' 
                      : 'bg-green-100 text-green-800'
                }`}>
                  {location.level === 'high' 
                    ? 'Risiko Tinggi' 
                    : location.level === 'medium' 
                      ? 'Risiko Sedang' 
                      : 'Risiko Rendah'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {showSuggestions && suggestions.length === 0 && query.length > 0 && (
        <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg p-3">
          <div className="text-gray-500">Tidak ada lokasi yang ditemukan</div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;