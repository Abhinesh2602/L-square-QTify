import axios from "axios";

const getGenres = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/genres"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getGenres;
