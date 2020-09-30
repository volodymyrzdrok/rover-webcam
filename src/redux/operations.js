import { fetchImagesWithMars } from '../services/nasaApi';
import {
  loaderStatus,
  addTextStatus,
  errorStatus,
  addMessageStatus,
  addPhotos,
  addPhotosPlus,
  addPage,
  addPrevForm,
  changePage,
} from './action';

export const searchPhotosOperation = (sol, rover, camera) => async dispatch => {
  dispatch(changePage(1));
  try {
    dispatch(errorStatus(false));
    dispatch(loaderStatus(true));
    dispatch(addPrevForm({ sol, rover, camera }));
    const result = await fetchImagesWithMars(sol, rover, 1, camera);
    dispatch(addPhotos(result));
    dispatch(addMessageStatus(result.length === 0 ? 'No Images Found' : ''));
  } catch (error) {
    dispatch(errorStatus(true));
    dispatch(addTextStatus(error.message));
  } finally {
    dispatch(loaderStatus(false));
  }
};

export const loadMoreOperation = (
  sol,
  rover,
  page,
  camera,
) => async dispatch => {
  try {
    dispatch(errorStatus(false));
    dispatch(loaderStatus(true));
    const result = await fetchImagesWithMars(sol, rover, page + 1, camera);
    dispatch(addPage());
    await dispatch(addPhotosPlus(result));
  } catch (error) {
    dispatch(errorStatus(true));
    dispatch(addTextStatus(error.message));
  } finally {
    dispatch(loaderStatus(false));
  }
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};
