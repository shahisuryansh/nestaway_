// App.js
import React from 'react';
import Profile from './Profile';

const user = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  purchasedProperties: ['Property A', 'Property B', 'Property C'],
};

function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  );
}

export default App;
