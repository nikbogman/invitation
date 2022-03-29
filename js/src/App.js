import React from 'react';
import './App.css';
import Form from './Form';
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
  let query = useQuery();
  return (
    <div className="App">
      <Form name={query.get('name')} />
    </div>
  );
}

export default App;
