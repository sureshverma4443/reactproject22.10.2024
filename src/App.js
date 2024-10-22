import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];



    
  return (
    <div className="App">   
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>        
    </div>
  );
}

export default App;
