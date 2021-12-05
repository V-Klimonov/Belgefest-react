import React from "react";
import { useEffect } from "react";

const Barbershop = () => {
  useEffect(() => {
    document.title =
      'Парикмахерская-студия "Валенсия" г.Пружаны ТЦ "Белгефест" 2 этаж';
  }, []);
  return <div></div>;
};

export default Barbershop;
