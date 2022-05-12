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
      <MainPage />
    </div>
    </>

  );
}

export default App;
