import { createAction } from '@reduxjs/toolkit';

export const alertToggle = createAction('@alert/toggle');
export const changeSol = createAction('@form/sol');
export const changeRover = createAction('@form/rover');
export const changeCamera = createAction('@form/camera');
export const loaderStatus = createAction('@loader/status');
export const modalStatus = createAction('@modal/status');
export const errorStatus = createAction('@error/status');
export const addPrevForm = createAction('@form/prev');
export const addModalImg = createAction('@modal/img');
export const addTextStatus = createAction('@text/status');
export const addMessageStatus = createAction('@message/status');
export const addPhotos = createAction('@photos/data');
export const addPhotosPlus = createAction('@photos/dataPlus');
export const addPage = createAction('@page/number');
export const changePage = createAction('@page/change');
