import React from 'react'
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
      document.title = 'О Нас | ТЦ "Белгефест';
    }, []);

    return (
        
            <h1> About</h1>
        
    )
}

export default About
