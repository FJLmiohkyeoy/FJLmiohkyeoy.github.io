import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    padding-top: 10rem;
    width:70rem;
    margin-bottom: 15rem;
`;

const Phrases = styled.div`
    font-size:4rem;
    text-align:center;
    margin-bottom:3rem;
`
const ImageContainer = styled.div`
    height:45rem;
    display:flex;
    justify-content: center;
`;

const StyledImage = styled(Image)`
    width: 30rem;
    height: 45rem;
    margin: 1rem;
    border-radius: 2rem;
    background-color: #dcdcdc;
    object-fit: cover;
    border: 1px solid black;
`;
const Intro = () => {
    return (
        <Container>
            <Phrases>
                {"abc"}
                <br />
                {"가나다"}
            </Phrases>
            <ImageContainer>
                <StyledImage src="https://upload.wikimedia.org/wikipedia/en/e/e7/Steve_%28Minecraft%29.png" alt="Minecraft" width={300} height={450}/>
                <StyledImage src="https://www.minecraft.net/content/dam/games/badger/key-art/TheArrival_1170x500.png" alt="Leg-Minecraft" width={300} height={450}/>
            </ImageContainer>
        </Container>
    )
}
export default Intro;