import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import './globals.css'
import { sitesReducer } from '../reducers/sitesReducer';


function MyApp({ Component, pageProps }) {

  const reducer = combineReducers({
    sitesStore: sitesReducer,
  })
  const store = configureStore({ reducer })
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
