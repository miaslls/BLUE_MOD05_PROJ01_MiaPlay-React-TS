import { genres } from "./genres";
import { games } from "./games";
import { genreGameLists } from "./genreGameLists";

export const endpoints = {
  baseUrl: "https://miaplay-api-01.onrender.com",
  ...genres,
  ...games,
  ...genreGameLists,
};
