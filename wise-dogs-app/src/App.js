import styles from'./App.module.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/pages/MainPage/MainPage';
import FavPage from './components/pages/FavPage/FavPage';

function App() {
  return (
    <>
    <Navbar />

    <div className={styles.appContainer}>
      <Routes>
          <Route path="/" element={<MainPage />} />  
          <Route path="/favorites" element={<FavPage />} />  
      </Routes>
    </div>
    </>

  );
}

export default App;
