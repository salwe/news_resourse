import { createStore } from "redux";

import { newsList  } from "./reducers/newsList";


export const store = createStore(newsList );