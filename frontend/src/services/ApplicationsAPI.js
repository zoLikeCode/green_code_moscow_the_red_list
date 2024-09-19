import axios from 'axios';

export const LoadRequests = async () => {
  try {
    const response = await axios.get('http://go.itatmisis.ru:3000/get_applications/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const LoadOnlyTrueRequests = async () => {
  try {
    const response = await axios.get(
      'http://go.itatmisis.ru:3000/get_applications_with_true/?skip=0&limit=1000',
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const LoadAnimalsOnTerritory = async (page) => {
  try {
    const response = await axios.get(
      `http://go.itatmisis.ru:3000/get_applications_with_true/?skip=${page * 4}&limit=4`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const UpdateRequests = async (id, db) => {
  try {
    const response = await axios.patch(`http://localhost:3000/requests/${id}`, db);
  } catch (error) {
    console.error(error);
  }
};
