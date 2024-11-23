import styled from "styled-components";

interface SignInProps {
  signinIn: boolean;
}

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: url("https://wallpapercave.com/wp/wp3703406.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    background-position: center center; /* Adjust background position on smaller screens */
  }
`;

export const Container = styled.div`
  background-color: #0f0f0f;
  opacity: 0.88;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 700px;
  max-width: 100%;
  min-height: 450px;
  @media (max-width: 768px) {
    width: 90%; /* Take 90% of screen width on smaller devices */
    min-height: 400px;
  }
`;

export const SignUpContainer = styled.div<SignInProps>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `transform: translateX(100%); opacity: 1; z-index: 5;`
      : null}
  @media (max-width: 768px) {
    width: 100%; /* Stack full width on small screens */
    transform: translateX(0);
    opacity: 1;
    z-index: 5;
  }
`;

export const SignInContainer = styled.div<SignInProps>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
  @media (max-width: 768px) {
    width: 100%; /* Stack full width on small screens */
    transform: translateX(0);
  }
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 20px; /* Less padding on smaller screens */
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on smaller screens */
  }
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding on small screens */
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    padding: 12px 30px; /* Adjust button padding on smaller screens */
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font size on smaller screens */
  }
`;

export const OverlayContainer = styled.div<SignInProps>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
  @media (max-width: 768px) {
    left: 0;
    width: 100%; /* Make the overlay take up full width on smaller screens */
    transform: translateX(0);
  }
`;

export const Overlay = styled.div<SignInProps>`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
  @media (max-width: 768px) {
    left: 0;
    width: 100%; /* Make the overlay take up full width on smaller screens */
    transform: translateX(0);
  }
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  @media (max-width: 768px) {
    width: 100%; /* Make panel take up full width on small screens */
    padding: 0 20px; /* Less padding */
  }
`;

export const LeftOverlayPanel = styled(OverlayPanel)<SignInProps>`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
  @media (max-width: 768px) {
    transform: translateX(0); /* Reset for small screens */
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)<SignInProps>`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
  @media (max-width: 768px) {
    transform: translateX(0); /* Reset for small screens */
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  @media (max-width: 768px) {
    font-size: 12px; /* Smaller font size */
  }
`;

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 12px;
  margin: 5px 0;
`;

