// PostTree.jsx

"use client";
import styled from "styled-components";
import SubCategory from "./SubCategory";
import {
  ategoryFontSize,
  MainCategoryFontWeight,
  categoryFontWeight,
  postTreeBoxHeight,
  postTreeFontSize,
} from "./style";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Title, { TitleButton, TitleLink, TitleVerticalBar } from "./Title";
import { BLOG_POSTS_DIR } from "./config";
import MainCategory from "./MainCategory";
import Post from "./post";
// import { useRef } from "react";

const Container = styled.div`
  position: sticky;
  width: 18rem;
  top: 9rem;
  right: 0;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Category = ({ tree }) => {
  const makeBranches = (tree) =>
    tree?.children?.map((branch) => (
      <LinkTree key={branch.name} tree={branch} />
    ));
  console.log(tree);
  if (tree.type === "category") {
    return (
      <MainCategory
        name={tree.name}
        path={tree.path}
        branches={makeBranches(tree)}
      />
    );
  } else {
    return (
      <SubCategory
        name={tree.name}
        path={tree.path}
        branches={makeBranches(tree)}
      />
    );
  }
};

const LinkTree = ({ tree }) => {
  if (tree.type === "post") {
    return <Post tree={tree} />;
  } else {
    return <Category tree={tree} />;
  }
};

const Button = styled.button`
  width: 100%;
  background-color: white;
  border-top: 1 solid black;
  border: 0;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  margin-top: 2rem;
`;

const DropDownButton = ({ targetRef }) => {
  const handleClick = () => {
    console.log(targetRef);
    if (targetRef.current.style.display === "block") {
      targetRef.current.style.display = "none";
    } else {
      targetRef.current.style.display = "block";
    }
  };
  return <Button onClick={handleClick}>Menu</Button>;
};

const BptContext = createContext();
export const useBptContext = () => useContext(BptContext);

const PostTree = ({ tree }) => {
  const ref = useRef(null);
  const [selected, setSelected] = useState(null);
  const handleSelect = ({ target }) => {
    if (selected !== null && selected !== target) {
      selected.style.color = "black";
    }

    setSelected(target);
  };

  useEffect(() => {
    if (selected) {
      selected.style.color = "#6fadc2";
    }
  }, [selected]);
  return (
    <BptContext.Provider value={handleSelect}>
      <DropDownButton targetRef={ref} />
      <Container ref={ref}>
        <LinkTree tree={tree} />
      </Container>
    </BptContext.Provider>
  );
};

export default PostTree;
