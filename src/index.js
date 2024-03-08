import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { default as configStore } from './redux/store/store'
import { Provider } from 'react-redux'

const { store, persistor } = configStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);


