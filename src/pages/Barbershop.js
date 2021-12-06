import React from "react";
import { useEffect } from "react";

const Barbershop = ({data}) => {
  const pageData = [...data].filter(el => el.page === "Barbershop") 
  console.log(pageData[0].title);
  useEffect(() => {document.title = pageData[0].title;
  }, []);
  return <div></div>;
};

export default Barbershop;
