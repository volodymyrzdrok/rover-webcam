import { createAction } from '@reduxjs/toolkit';
import {
  SOL_INPUT,
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

export const alertToggle = createAction('@alert/toggle');

export const changeSol = sol => ({
  type: SOL_INPUT,
  payload: sol,
});

export const changeRover = rover => ({
  type: ROVER_INPUT,
  payload: rover,
});

export const changeCamera = camera => ({
  type: CAMERA_INPUT,
  payload: camera,
});

export const loaderStatus = boolean => ({
  type: LOADER_STATUS,
  payload: boolean,
});

export const modalStatus = boolean => ({
  type: MODAL_STATUS,
  payload: boolean,
});

export const errorStatus = text => ({
  type: ERROR_STATUS,
  payload: text,
});
export const addPrevForm = obj => ({
  type: PREV_FORM,
  payload: obj,
});

export const addModalImg = largeImage => ({
  type: MODAL_IMG,
  payload: largeImage,
});
export const addTextStatus = text => ({
  type: TEXT_STATUS,
  payload: text,
});

export const addMessageStatus = text => ({
  type: MESSAGE_STATUS,
  payload: text,
});

export const addPhotos = data => ({
  type: PHOTOS_DATA,
  payload: data,
});

export const addPhotosPlus = dataPlus => ({
  type: PHOTOS_DATA_PLUS,
  payload: dataPlus,
});

export const addPage = createAction(PAGE_NUMBER);

export const changePage = number => ({
  type: PAGE_CHANGE,
  payload: number,
});
