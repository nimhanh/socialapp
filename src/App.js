import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;