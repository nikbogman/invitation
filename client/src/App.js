import React from 'react';
import './App.css';

import Form from './Form';
import GuestsList from './GuestsList';
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  const name = useQuery().get('name');

  return (
    <div className="App">
      {name ? < Form name={name} /> : <GuestsList />}
    </div >
  );
}

export default App;
