import axios from "axios";

async function getData() {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getData;
