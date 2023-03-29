import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/src/redux/store/store';
import HomeScreen from './app/src/view';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
    
  );
}

export default App;
