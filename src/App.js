import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Login from './component/login/Login';
import Profile from './component/profile/Profile';

function App() {
  return (
    <>
      <Header/>
      {window.localStorage.getItem('username') ? <Profile/>:<Login/>}
      <Footer/>
    </>
  );
}

export default App;
