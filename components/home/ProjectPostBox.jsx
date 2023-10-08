import Image from "next/image";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
  background: white;
`;

const Thumbnail = styled(Image)`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
`;

const TextDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;

const Content = styled.div`
  font-size: 1rem;
`;

const TextData = ({ title, content }) => (
  <TextDataContainer>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </TextDataContainer>
);

const ProjectPostBox = () => {
  return (
    <Container>
      <Thumbnail
        src="https://t4.ftcdn.net/jpg/05/51/34/51/360_F_551345154_YiMKHXcKEOineXBmkmMMRktVRfyPba6T.jpg"
        alt="project post"
        width={360}
        height={360}
      />
      <TextData title="title" content="content" />
    </Container>
  );
};

export default ProjectPostBox;
