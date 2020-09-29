import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  alert,
  form,
  loader,
  showModal,
  error,
  largeImage,
  text,
  photos,
  message,
  page,
  prevForm,
} from './reducer';

const middleWares = [thunk];
const rootMiddleWares = applyMiddleware(...middleWares);
const rootReducer = combineReducers({
  alert,
  form,
  loader,
  showModal,
  error,
  largeImage,
  text,
  photos,
  message,
  page,
  prevForm,
});
const persistConfig = {
  key: 'photos',
  storage,
  whitelist: ['photos', 'page', 'prevForm'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(rootMiddleWares),
);
export const persistor = persistStore(store);
export default store;
