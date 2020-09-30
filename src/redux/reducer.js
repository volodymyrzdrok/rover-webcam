import { createReducer } from '@reduxjs/toolkit';

import {
  alertToggle,
  changeSol,
  changeRover,
  changeCamera,
  loaderStatus,
  modalStatus,
  errorStatus,
  addPrevForm,
  addModalImg,
  addTextStatus,
  addMessageStatus,
  addPhotos,
  addPhotosPlus,
  addPage,
  changePage,
} from './action';

export const alert = createReducer(false, {
  [alertToggle]: (state, action) => !state,
});

export const form = createReducer(
  { sol: '', rover: 'curiosity', camera: 'navcam' },
  builder => {
    builder
      .addCase(changeSol, (state, action) => {
        state.sol = action.payload;
      })
      .addCase(changeRover, (state, action) => {
        state.rover = action.payload;
      })
      .addCase(changeCamera, (state, action) => {
        state.camera = action.payload;
      });
  },
);

export const photos = createReducer([], builder => {
  builder
    .addCase(addPhotos, (state, action) => {
      return [...action.payload];
    })

    .addCase(addPhotosPlus, (state, action) => {
      return [...state, ...action.payload];
    });
});

export const prevForm = createReducer(null, {
  [addPrevForm]: (state, action) => action.payload,
});

export const loader = createReducer(false, {
  [loaderStatus]: (state, action) => (state = action.payload),
});

export const showModal = createReducer(false, {
  [modalStatus]: (state, action) => (state = action.payload),
});

export const error = createReducer(null, {
  [errorStatus]: (state, action) => action.payload,
});

export const largeImage = createReducer(null, {
  [addModalImg]: (state, action) => action.payload,
});

export const text = createReducer('', {
  [addTextStatus]: (state, action) => action.payload,
});

export const message = createReducer(
  'To view images, make a selection and click "Search photo"',
  {
    [addMessageStatus]: (state, action) => action.payload,
  },
);

export const page = createReducer(1, {
  [changePage]: (state, action) => action.payload,
  [addPage]: (state, action) => state + 1,
});

// export const alert = (state = false, action) => {
//   switch (action.type) {
//     case ALERT_STATUS:
//       return !state;

//     default:
//       return state;
//   }
// };

// export const form = (
//   state = { sol: '', rover: 'curiosity', camera: 'navcam' },
//   action,
// ) => {
//   switch (action.type) {
//     case SOL_INPUT:
//       return { ...state, sol: action.payload };
//     case ROVER_INPUT:
//       return { ...state, rover: action.payload };
//     case CAMERA_INPUT:
//       return { ...state, camera: action.payload };
//     //   case INPUTCLEAR:
//     //     return '';

//     default:
//       return state;
//   }
// };

// export const prevForm = (state = null, action) => {
//   switch (action.type) {
//     case PREV_FORM:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const loader = (state = false, action) => {
//   switch (action.type) {
//     case LOADER_STATUS:
//       return (state = action.payload);

//     default:
//       return state;
//   }
// };

// export const showModal = (state = false, action) => {
//   switch (action.type) {
//     case MODAL_STATUS:
//       return (state = action.payload);

//     default:
//       return state;
//   }
// };

// export const error = (state = null, action) => {
//   switch (action.type) {
//     case ERROR_STATUS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const largeImage = (state = null, action) => {
//   switch (action.type) {
//     case MODAL_IMG:
//       return action.payload;
//     default:
//       return state;
//   }
// };
// export const text = (state = '', action) => {
//   switch (action.type) {
//     case TEXT_STATUS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const photos = (state = [], action) => {
//   switch (action.type) {
//     case PHOTOS_DATA:
//       return action.payload;
//     case PHOTOS_DATA_PLUS:
//       return [...state, ...action.payload];

//     default:
//       return state;
//   }
// };

// export const message = (
//   state = 'To view images, make a selection and click "Search photo"',
//   action,
// ) => {
//   switch (action.type) {
//     case MESSAGE_STATUS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export const page = (state = 1, action) => {
//   switch (action.type) {
//     case PAGE_NUMBER:
//       return state + 1;

//     case PAGE_CHANGE:
//       return action.payload;
//     default:
//       return state;
//   }
// };
