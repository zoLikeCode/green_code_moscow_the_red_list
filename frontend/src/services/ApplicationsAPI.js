import axios from 'axios';

export const LoadRequests = async () => {
  try {
    const response = await axios.get('http://go.itatmisis.ru:3000/get_applications/');
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
