import axios from "axios";

const albumsEndpoint = "https://qtify-backend-labs.crio.do/albums/top";
const newAlbumsEndpoint = "https://qtify-backend-labs.crio.do/albums/new";
const songsEndpoint = "https://qtify-backend-labs.crio.do/songs";

async function getData(type) {
  try {
    if (type === "album") {
      const response = await axios.get(albumsEndpoint);
      return response.data;
    } else if (type === "newAlbums") {
      const response = await axios.get(newAlbumsEndpoint);
      return response.data;
    } else if (type === "songs") {
      const response = await axios.get(songsEndpoint);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export default getData;
