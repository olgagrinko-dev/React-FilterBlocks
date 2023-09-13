import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import VacancyPage from './pages/VacancyPage/VacancyPage';

function App() {
  return <>
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/vacancy/:id'} element={<VacancyPage />} />
    </Routes>

  </>
}

export default App;
