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

const actionSlice = createSlice({
  name: 'action',
  initialState: { showModal: false, loader: false, alert: false, error: null },
  reducers: {
    modalStatus: (state, action) => ({ ...state, showModal: action.payload }),
    loaderStatus: (state, action) => ({ ...state, loader: action.payload }),
    errorStatus: (state, action) => ({ ...state, error: action.payload }),
    alertToggle: (state, action) => ({ ...state, alert: !state.alert }),
  },
});

const variablesSlice = createSlice({
  name: 'variables',
  initialState: {
    prevForm: null,
    largeImage: null,
    text: '',
    message: 'To view images, make a selection and click "Search photo"',
    page: 1,
  },
  reducers: {
    addPrevForm: (state, action) => ({ ...state, prevForm: action.payload }),
    addModalImg: (state, action) => ({ ...state, largeImage: action.payload }),
    addTextStatus: (state, action) => ({ ...state, text: action.payload }),
    addMessageStatus: (state, action) => ({
      ...state,
      message: action.payload,
    }),
    changePage: (state, action) => ({ ...state, page: action.payload }),
    addPage: (state, action) => ({ ...state, page: state.page + 1 }),
  },
});

export const { changeSol, changeCamera, changeRover } = formSlice.actions;
export const {
  modalStatus,
  loaderStatus,
  alertToggle,
  errorStatus,
} = actionSlice.actions;
export const {
  addModalImg,
  addMessageStatus,
  addPrevForm,
  addTextStatus,
  addPage,
  changePage,
} = variablesSlice.actions;
export const { addPhotos, addPhotosPlus } = photosSlice.actions;

const variables = variablesSlice.reducer;
const form = formSlice.reducer;
const action = actionSlice.reducer;
const photos = photosSlice.reducer;

export default combineReducers({ photos, form, action, variables });
