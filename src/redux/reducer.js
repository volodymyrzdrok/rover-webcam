import {
  SOL_INPUT,
  ALERT_STATUS,
  ROVER_INPUT,
  CAMERA_INPUT,
  LOADER_STATUS,
  MODAL_STATUS,
  TEXT_STATUS,
  ERROR_STATUS,
  MODAL_IMG,
  PHOTOS_DATA,
  MESSAGE_STATUS,
  PHOTOS_DATA_PLUS,
  PAGE_NUMBER,
  PREV_FORM,
  PAGE_CHANGE,
} from './constans';

export const alert = (state = false, action) => {
  switch (action.type) {
    case ALERT_STATUS:
      return !state;

    default:
      return state;
  }
};

export const form = (
  state = { sol: '', rover: 'curiosity', camera: 'navcam' },
  action,
) => {
  switch (action.type) {
    case SOL_INPUT:
      return { ...state, sol: action.payload };
    case ROVER_INPUT:
      return { ...state, rover: action.payload };
    case CAMERA_INPUT:
      return { ...state, camera: action.payload };
    //   case INPUTCLEAR:
    //     return '';

    default:
      return state;
  }
};

export const prevForm = (state = null, action) => {
  switch (action.type) {
    case PREV_FORM:
      return action.payload;
    default:
      return state;
  }
};

export const loader = (state = false, action) => {
  switch (action.type) {
    case LOADER_STATUS:
      return (state = action.payload);

    default:
      return state;
  }
};

export const showModal = (state = false, action) => {
  switch (action.type) {
    case MODAL_STATUS:
      return (state = action.payload);

    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case ERROR_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const largeImage = (state = null, action) => {
  switch (action.type) {
    case MODAL_IMG:
      return action.payload;
    default:
      return state;
  }
};
export const text = (state = '', action) => {
  switch (action.type) {
    case TEXT_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const photos = (state = [], action) => {
  switch (action.type) {
    case PHOTOS_DATA:
      return action.payload;
    case PHOTOS_DATA_PLUS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export const message = (
  state = 'To view images, make a selection and click "Search photo"',
  action,
) => {
  switch (action.type) {
    case MESSAGE_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export const page = (state = 1, action) => {
  switch (action.type) {
    case PAGE_NUMBER:
      return state + 1;

    case PAGE_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
