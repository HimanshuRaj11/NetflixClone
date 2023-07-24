import styled from "styled-components";
const BackgroundImage = () => {
    const background = "https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
    return (
        <Container>
      <img src={background} alt="background" />
    </Container>
    );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  img {
    height: 100vh;
    width: 100%;
  }
`;

export default BackgroundImage;
