import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreateNewUserTrip from './pages/CreateNewUserTrip';
import MainJourneys from './pages/Journeys';
import TripDetails from './pages/TripDetails';
import Welcome from './pages/Welcome';
import CreateTripNewUser from './pages/CreateTripNewUser';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-new-user-trip" element={<CreateNewUserTrip />} />
          <Route path="/journeys" element={<MainJourneys />} />
          <Route path="/create-new-user-trip/trip-details" element={<TripDetails />} />
          <Route path="/userpage" element={<CreateTripNewUser />} />
        </Routes>
    </BrowserRouter>
  );
}