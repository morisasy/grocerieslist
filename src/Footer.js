import React from 'react'
const Footer = ({lenght})=>{
  const toDay = new Date();
  return(
    <footer>
        <p>{lenght} List Items {lenght === 1 ? "item": "items"}</p>
        <p> Copyrigt &copy; {toDay.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
