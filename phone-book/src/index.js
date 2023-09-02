import ReactDOM from "react-dom/client";
import './index.css';
import NavBar from "./NavBar";
import PhoneBook from './PhoneBook'

export default function App() {
  
  return (
    <div>
      <NavBar />
      <PhoneBook />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);