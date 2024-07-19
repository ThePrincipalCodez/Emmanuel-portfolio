import { useEffect } from 'react';
import './App.css';
import Index from './Pages';



const App = () => {

  useEffect(() => {
    document.title = " Emmanuel Emmanuel Odefadehan";
  });

  return (
    < div>
      <Index />
    </div>
  );
}

export default App;
