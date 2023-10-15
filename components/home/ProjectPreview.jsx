import { styled } from "styled-components";
import ProjectPostBox from "./ProjectPostBox";
import BlogPostCard from "./BlogPostCard";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 15rem;
  width: 70rem;
`;

const Title = styled.div`
  font-size: 4rem;
  margin: 1rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const ProjectPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectPreview = () => {
  return (
    <Container>
      <Title>Project</Title>
      <ProjectPostContainer>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </ProjectPostContainer>
    </Container>
  );
};

export default ProjectPreview;
