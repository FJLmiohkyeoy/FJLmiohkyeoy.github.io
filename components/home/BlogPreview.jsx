import { styled } from "styled-components";
import BlogPostCard from "./BlogPostCard";

const Container = styled.div`
  padding-top: 5rem;
  margin-bottom: 10rem;
  width: 70rem;
`;

const Title = styled.div`
  font-size: 4rem;
  margin: 1rem;
  margin-bottom: 10rem;
  text-align: center;
`;

const BlogPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BlogPreview = () => {
  return (
    <Container>
      <Title>Blog</Title>
      <BlogPostContainer>
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </BlogPostContainer>
    </Container>
  );
};

export default BlogPreview;
