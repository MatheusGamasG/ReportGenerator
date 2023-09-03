import { Router } from './Router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
