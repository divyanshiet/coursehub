import { useEffect, useState } from "react";
import ApiContext from "./apiContext";

export default function ApiState(props) {
  const API = "http://localhost:5000/courses";
  const [data,setData]= useState(null);

  async function getData(API) {
    const response = await fetch(API);
    const finaldata = await response.json();
    setData(finaldata);
  }

  useEffect(() => {
    getData(API);
  }, []);
  return <ApiContext.Provider value={{data}}>{props.children}</ApiContext.Provider>;
}
