import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//https://api.themoviedb.org/3 which is used for append to URL
//  https://api.themoviedb.org/3/foot/ ex foot is appedning here

export default instance;
