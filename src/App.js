import React, {useState, lazy, Suspense} from 'react';
import './App.css';

const Popup = lazy(() => import(/* webpackPrefetch: true */'./components/Popup'));

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <div className="App">
      <button onClick={() => {setIsPopupOpen(true)}}>Сколько времени сейчас?</button>
      {isPopupOpen && 
      <Suspense fallback="...загрузка">
        <Popup closePopup={closePopup}/>
      </Suspense>
      }
    </div>
  );
}

export default App;
