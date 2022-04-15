import React from 'react';
import './App.css';
import Form from './Form';
import GuestsList from './GuestsList';
import { useLocation } from "react-router-dom";
import flower2 from "./flower2.png";
import flower1 from "./flower1.png";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const name = useQuery().get('name');

  return (
    <div className="App">
      <img src={flower2} className="f2" />
      <img src={flower1} className="f1" />
      {name ? < Form name={name} /> : <GuestsList />}
    </div>
  );
}

export default App;
