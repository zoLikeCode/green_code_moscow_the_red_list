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
    const response = await axios.patch(`http://go.itatmisis.ru:3000/application/${id}`, db);
  } catch (error) {
    console.error(error);
  }
};

export const UpdateAnimals = async (animal) => {
  let data = new FormData();
  data.append('red_list_name', `${animal}`);

  let config = {
    method: 'patch',
    maxBodyLength: Infinity,
    url: 'http://go.itatmisis.ru:3000/application/1',
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
