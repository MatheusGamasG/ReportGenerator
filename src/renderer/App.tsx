import { Router } from './Router';
import { FormProvider} from '../contexts/FormContext';
import './App.css';

export default function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}
