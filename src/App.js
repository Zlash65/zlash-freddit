import logo from './logo.svg';
import './App.css';

import Login from './components/login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const client_id = "1039181549088-lf6dttv3hjv0jmj6pkonhu8oceic3731.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: client_id,
        scope: ""
      })
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
