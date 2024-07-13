import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Contacts from './features/contacts/Contacts';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Contact List</h1>
        <Contacts />
      </div>
    </Provider>
  );
};

export default App;
