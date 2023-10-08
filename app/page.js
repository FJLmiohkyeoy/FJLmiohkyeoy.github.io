"use client"
import BlogPreview from "@/components/home/BlogPreview";
import ProjectPreview from "@/components/home/ProjectPreview";
import Intro from "@/components/home/intro";
import { styled } from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Intro />
      <BlogPreview />
      <ProjectPreview />
      {/* <ScrollButton />   */}
    </Container>
  )
}
