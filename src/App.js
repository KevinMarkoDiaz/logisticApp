// import RegisterForm from "./components/auth/RegisterForm";
import './App.css'
import Header from './components/Header/Header';
import { PageP } from './components/Page/PageP';
import LoginForm from "./components/auth/LoginForm";

function App() {
  return (
    <div className="App">
       <LoginForm/>
       <RegisterForm/>
       <PageP/>
    </div>
  );
}

export default App;
