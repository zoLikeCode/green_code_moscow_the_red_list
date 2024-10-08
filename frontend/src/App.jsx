import { useState } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import MainPage from './pages/main/MainPage';
import Guide from './pages/guide/Guide';
import Monitoring from './pages/monitoring/Monitoring';
import Animals from './pages/animals/Animals';
import Maps from './pages/maps/Maps';
import Processing from './pages/processing/Processing';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="guide" element={<Guide />} />
          <Route path="animals" element={<Animals />} />
          <Route path="monitoring" element={<Monitoring />}>
            <Route index element={<Maps />} />
            <Route path="maps" element={<Maps />} />
            <Route path="processing" element={<Processing />} />
          </Route>
          <Route path="/*" element={<Navigate to="/" replace:true />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
