import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const ScrollTopBtn = styled('a')(({ showBtn }) => ({
  position: "fixed",
  left: "auto",
  top: "auto",
  right: "10px",
  bottom: "10px",
  zIndex: "10",
  display: "flex",
  width: "55px",
  height: "55px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
  backgroundColor: "#222",
  textDecoration: "none",
  color: "inherit",
  transition: "all 300ms ease",

  ...(showBtn && {
    transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d"
  }),
  ...(!showBtn && {
    transform: "translate3d(200%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d"
  }),
}));

export const ScrollTopComponent = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setShowBtn(true);
          } else {
            setShowBtn(false);
          }
      });
  }, []);
  

  return (
    <>
      <ScrollTopBtn href="#Top" showBtn={ showBtn }>
        <i className="fa-solid fa-chevron-up"></i>
      </ScrollTopBtn>
    </>
  )
}
