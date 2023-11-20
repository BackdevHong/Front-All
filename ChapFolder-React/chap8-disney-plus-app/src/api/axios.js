import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4d321d064854c024585de7ef9cb34c68",
    language: "ko-KR",
  },
});

export default instance;
