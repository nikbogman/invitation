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
      <header className="App-header">
        <Form name={query.get('name')} />
      </header>
    </div>
  );
}



export default App;
