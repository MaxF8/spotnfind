import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../styles/globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./LoginPageStyle.js";

const LoginPage = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  // const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20playlist-read-private`;
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private`;

  return (
    <>
      <InfoSec lightBg={true}>
        <Container>
          <InfoRow imgStart={""}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={true}>{"Exclusive Access"}</TopLine>
                <Heading lightText={true}>{"Exclusive Access"}</Heading>
                <Subtitle lightTextDesc={true}>{"Exclusive Access"}</Subtitle>
                <Button big fontBig primary={true} onclick="location.href=''">

                  <a href= {AUTH_URL} >Login</a>
                   
                  </Button>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              {/* <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper> */}
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default LoginPage;
