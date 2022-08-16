import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import './globals.css'
import { sitesReducer } from '../reducers/sitesReducer';
import AboutMe from '../components/aboutMe/AboutMe';


function MyApp({ Component, pageProps }) {

  const reducer = combineReducers({
    sitesStore: sitesReducer,
  })
  const store = configureStore({ reducer })
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <AboutMe/>
      </Provider>
    </>
  )
}

export default MyApp
