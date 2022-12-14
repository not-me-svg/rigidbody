import React from 'react'
import styled from 'styled-components';
import { SectionTitleComponent } from './SectionTitleComponent';

// Contact
const Contact = styled('div')(() => ({
  paddingBottom: "30px",
  position: "relative",
  padding: "100px 5%",
  backgroundColor: "transparent",
  boxSizing: "border-box",

  '& .contact-paragraph': {
    marginTop: "80px"
  },

  '& .contact-paragraph p': {
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    width: "270px",
    marginLeft: "auto",
    marginBottom: "0px",
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: 400,
    textTransform: "uppercase"
  },

  '& .contact-links': {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
  },

  '& .contact-links-email': {
    position: "relative",
    zIndex: 2,
    display: "flex",
    marginLeft: "15px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    transition: "all 200ms ease",
    fontFamily: "Inter, sans-serif",
    color:"#c7c7c7",
    fontSize: "20px",
    fontWeight: 400,
    textDecoration: "none",
  },

  '& .contact-links-social-grid': {
    display: "grid",
    gridAutoColumns: "1fr",
    gridColumnGap: "30px",
    gridRowGap: "16px",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "auto",
  },

  '& .contact-links-social-grid a': {
    fontSize: "24px",
    marginRight: "auto",
    marginLeft: "auto",
    opacity: "0.7",
    color:"#c7c7c7",
  }
}));

const Container = styled('div')(() => ({
  position: "relative",
  zIndex: "1",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  flex: 1,
}));

export const ContactComponent = () => {
  return (
    <Contact id="contact">
      <Container>
        <SectionTitleComponent text="work toghether?" />

        <div className="contact-paragraph">
          <p>Feel free to reach me using which mode of communication works for you</p>
        </div>

        <div className="contact-links">
          <a  className="contact-links-email" href="mailto:hellofriend@rigidbody.xyz">Send me an email</a>

          <div className="contact-links-social-grid">
            <a href="https://www.instagram.com/rigidbody_/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://twitter.com/rigidbody_">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </Container>
    </Contact>
  )
}
