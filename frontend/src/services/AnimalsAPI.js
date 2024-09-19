import axios from 'axios';

export const LoadAnimals = async (page, limit) => {
  try {
    const response = await axios.get(
      `http://go.itatmisis.ru:3000/get_red_list/?skip=${page * limit}&limit=${limit}`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
