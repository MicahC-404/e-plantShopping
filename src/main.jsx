import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Task 6: Import Provider and the Store
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the App component with Provider and pass the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
