import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const formSlice = createSlice({
  name: 'form',
  initialState: { sol: '', rover: 'curiosity', camera: 'navcam' },
  reducers: {
    changeSol: (state, action) => ({ ...state, sol: action.payload }),
    changeRover: (state, action) => ({ ...state, rover: action.payload }),
    changeCamera: (state, action) => ({ ...state, camera: action.payload }),
  },
});
const photosSlice = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    addPhotos: (state, action) => [...action.payload],
    addPhotosPlus: (state, action) => [...state, ...action.payload],
  },
});

const alertSlice = createSlice({
  name: 'alert',
  initialState: false,
  reducers: {
    alertToggle: (state, action) => !state,
  },
});
const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    loaderStatus: (state, action) => (state = action.payload),
  },
});
const showModalSlice = createSlice({
  name: 'showModal',
  initialState: false,
  reducers: {
    modalStatus: (state, action) => (state = action.payload),
  },
});

const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    errorStatus: (state, action) => action.payload,
  },
});
const prevFormSlice = createSlice({
  name: 'prevForm',
  initialState: null,
  reducers: {
    addPrevForm: (state, action) => action.payload,
  },
});
const largeImageSlice = createSlice({
  name: 'largeImage',
  initialState: null,
  reducers: {
    addModalImg: (state, action) => action.payload,
  },
});
const textSlice = createSlice({
  name: 'text',
  initialState: '',
  reducers: {
    addTextStatus: (state, action) => action.payload,
  },
});
const messageSlice = createSlice({
  name: 'message',
  initialState: 'To view images, make a selection and click "Search photo"',
  reducers: {
    addMessageStatus: (state, action) => action.payload,
  },
});
const pageSlice = createSlice({
  name: 'page',
  initialState: 1,
  reducers: {
    changePage: (state, action) => action.payload,
    addPage: (state, action) => state + 1,
  },
});

export const { alertToggle } = alertSlice.actions;
export const { changeSol, changeCamera, changeRover } = formSlice.actions;
export const { loaderStatus } = loaderSlice.actions;
export const { modalStatus } = showModalSlice.actions;
export const { errorStatus } = errorSlice.actions;
export const { addModalImg } = largeImageSlice.actions;
export const { addTextStatus } = textSlice.actions;
export const { addPhotos, addPhotosPlus } = photosSlice.actions;
export const { addMessageStatus } = messageSlice.actions;
export const { addPage, changePage } = pageSlice.actions;
export const { addPrevForm } = prevFormSlice.actions;

const alert = alertSlice.reducer;
const form = formSlice.reducer;
const loader = loaderSlice.reducer;
const showModal = showModalSlice.reducer;
const error = errorSlice.reducer;
const largeImage = largeImageSlice.reducer;
const text = textSlice.reducer;
const photos = photosSlice.reducer;
const message = messageSlice.reducer;
const page = pageSlice.reducer;
const prevForm = prevFormSlice.reducer;

export default combineReducers({
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
