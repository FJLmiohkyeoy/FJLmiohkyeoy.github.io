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

const Container = styled.div`
  /* position: relative; */
  & > div {
    position: absolute;
    width: 15rem;
    top: 10rem;
    right: 3rem;
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

const BptContext = createContext();
export const useBptContext = () => useContext(BptContext);

const PostTree = ({ tree }) => {
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
      <Container>
        <div>
          <LinkTree tree={tree} />
        </div>
      </Container>
    </BptContext.Provider>
  );
};

export default PostTree;
