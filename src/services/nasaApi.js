import axios from 'axios';

const api_key = `HQq7oLpUBpPIEeflu1sUegw9fMLvSr5ceBBEYoBI`;

export const fetchImagesWithMars = (sol, rover, page, camera) => {
  return axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=${page}&camera=${camera}&api_key=${api_key}&per_page=12`,
    )
    .then(response => response.data.photos);
};
