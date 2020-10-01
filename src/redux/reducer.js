// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import {
//   alertToggle,
//   changeSol,
//   changeRover,
//   changeCamera,
//   loaderStatus,
//   modalStatus,
//   errorStatus,
//   addPrevForm,
//   addModalImg,
//   addTextStatus,
//   addMessageStatus,
//   addPhotos,
//   addPhotosPlus,
//   addPage,
//   changePage,
// } from './action';

// const form = createReducer(
//   { sol: '', rover: 'curiosity', camera: 'navcam' },
//   {
//     [changeSol]: (state, action) => ({ ...state, sol: action.payload }),
//     [changeRover]: (state, action) => ({ ...state, rover: action.payload }),
//     [changeCamera]: (state, action) => ({ ...state, camera: action.payload }),
//   },
// );

// const photos = createReducer([], {
//   [addPhotos]: (state, action) => [...action.payload],
//   [addPhotosPlus]: (state, action) => [...state, ...action.payload],
// });

// const alert = createReducer(false, {
//   [alertToggle]: (state, action) => !state,
// });
// const loader = createReducer(false, {
//   [loaderStatus]: (state, action) => (state = action.payload),
// });

// const showModal = createReducer(false, {
//   [modalStatus]: (state, action) => (state = action.payload),
// });
// const prevForm = createReducer(null, {
//   [addPrevForm]: (state, action) => action.payload,
// });

// const error = createReducer(null, {
//   [errorStatus]: (state, action) => action.payload,
// });
// const largeImage = createReducer(null, {
//   [addModalImg]: (state, action) => action.payload,
// });

// const text = createReducer('', {
//   [addTextStatus]: (state, action) => action.payload,
// });

// const message = createReducer(
//   'To view images, make a selection and click "Search photo"',
//   {
//     [addMessageStatus]: (state, action) => action.payload,
//   },
// );

// const page = createReducer(1, {
//   [changePage]: (state, action) => action.payload,
//   [addPage]: (state, action) => state + 1,
// });

// export default combineReducers({
//   alert,
//   form,
//   loader,
//   showModal,
//   error,
//   largeImage,
//   text,
//   photos,
//   message,
//   page,
//   prevForm,
// });

// //
// //
// //
// //
// // export const form = (
// //   state = { sol: '', rover: 'curiosity', camera: 'navcam' },
// //   action,
// // ) => {
// //   switch (action.type) {
// //     case SOL_INPUT:
// //       return { ...state, sol: action.payload };
// //     case ROVER_INPUT:
// //       return { ...state, rover: action.payload };
// //     case CAMERA_INPUT:
// //       return { ...state, camera: action.payload };
// //     //   case INPUTCLEAR:
// //     //     return '';

// //     default:
// //       return state;
// //   }
// // };

// // const form = createReducer(
// //   { sol: '', rover: 'curiosity', camera: 'navcam' },
// //   builder => {
// //     builder
// //       .addCase(changeSol, (state, action) => {
// //         state.sol = action.payload;
// //       })
// //       .addCase(changeRover, (state, action) => {
// //         state.rover = action.payload;
// //       })
// //       .addCase(changeCamera, (state, action) => {
// //         state.camera = action.payload;
// //       });
// //   },
// // );

// // export const photos = (state = [], action) => {
// //   switch (action.type) {
// //     case PHOTOS_DATA:
// //       return action.payload;
// //     case PHOTOS_DATA_PLUS:
// //       return [...state, ...action.payload];

// //     default:
// //       return state;
// //   }
// // };

// // const photos = createReducer([], builder => {
// //   builder
// //     .addCase(addPhotos, (state, action) => {
// //       return [...action.payload];
// //     })

// //     .addCase(addPhotosPlus, (state, action) => {
// //       return [...state, ...action.payload];
// //     });
// // });
