"use client";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { postTreeFontSize } from "./style";
import Title, {
  ArrowButton,
  TitleButton,
  TitleLink,
  TitleVerticalBar,
} from "./Title";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BLOG_POSTS_DIR } from "./config";
import { useBptContext } from "./PostTree";

const List = styled.ul`
  color: black;
  font-size: ${postTreeFontSize};
  font-weight: normal;
  list-style: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
`;

const SubCategory = ({ name, path, branches }) => {
  const ref = useRef(null);
  const [showList, setShowList] = useState(false);
  const handleSelect = useBptContext();
  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  useEffect(() => {
    const categoryList = ref.current;

    if (showList) {
      categoryList.style.maxHeight = categoryList.scrollHeight + "px";
      setTimeout(() => {
        categoryList.style.maxHeight = "fit-content";
      }, 500);
    } else {
      categoryList.style.maxHeight = categoryList.scrollHeight + "px";
      setTimeout(() => {
        categoryList.style.maxHeight = 0;
        categoryList.style.overflow = "hidden";
      }, 5);
    }
  }, [showList]);

  return (
    <div>
      <Title>
        <TitleLink href={`/blog${path.slice(BLOG_POSTS_DIR.length)}/index`}>
          <TitleButton
            onClick={(e) => {
              handleClick();
              handleSelect(e);
            }}
          >
            {Array.from({
              length: path.slice(BLOG_POSTS_DIR.length).split("/").length - 2,
            }).map((_, i) => (
              <TitleVerticalBar key={i} />
            ))}
            {name}
          </TitleButton>
        </TitleLink>
        <ArrowButton onClick={handleClick}>
          {showList ? (
            <IoIosArrowDown size={15} />
          ) : (
            <IoIosArrowForward size={15} />
          )}
        </ArrowButton>
      </Title>

      <List ref={ref}>{branches}</List>
    </div>
  );
};

export default SubCategory;
