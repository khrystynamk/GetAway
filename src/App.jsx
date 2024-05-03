import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '/src/pages/Home';
import Login from '/src/pages/Login';
import CreateTrip from '/src/pages/CreateTrip';
import MainJourneys from '/src/pages/Journeys';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/journeys" element={<MainJourneys />} />
        </Routes>
    </BrowserRouter>
  );
}