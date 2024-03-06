import axios from "axios";

const url: "https://youtube138.p.rapidapi.com/auto-complete/";

const options = {
  
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.React_Youtube_API,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
