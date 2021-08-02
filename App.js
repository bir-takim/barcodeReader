import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers/rootReducer';
import { persistStore, } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { View, Text } from 'react-native';
import Index from './src/Index'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    const persisStore = persistStore(store)
    return (
      <Provider store={store}>
          <Index />
      </Provider>
    );
  }
}