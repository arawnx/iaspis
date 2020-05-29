import React from 'react';
import './App.css';

log = () => {
	console.log("HIT");
}

function App() {
  return (
	  <input type="text" onKeyDown={log}>
  );
}

export default App;
