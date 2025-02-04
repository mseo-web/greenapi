import React, { useState } from 'react';
import Login from '../components/Login';
import Chat from '../components/Chat';

const GreenApi = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (id, token) => {
    setIdInstance(id);
    setApiTokenInstance(token);
    setIsLoggedIn(true);
  };

  return (
    <div>
        {isLoggedIn ? (
            <Chat idInstance={idInstance} apiTokenInstance={apiTokenInstance} />
        ) : (
            <Login onLogin={handleLogin} />
        )}
    </div>
  );
};

export default GreenApi;
