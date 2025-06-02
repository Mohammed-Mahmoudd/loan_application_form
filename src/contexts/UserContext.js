import { createContext } from "react";

export let UserContext = createContext({
  name: "",
  email: "",
  phone: 0,
});
