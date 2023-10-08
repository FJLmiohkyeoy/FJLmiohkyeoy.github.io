import { styled } from "styled-components";
import { useBptContext } from "./PostTree";
import Title, { TitleButton, TitleLink } from "./Title";
import {
  mainCategoryFontSize,
  mainCategoryFontWeight,
  postTreeFontSize,
} from "./style";
import { BLOG_POSTS_DIR } from "./config";

const List = styled.ul`
  color: black;
  font-size: ${postTreeFontSize};
  font-weight: normal;
  list-style: none;
  overflow: hiddren;
  padding: 0;
`;
const MainCategory = ({ name, path, branches }) => {
  const handleClick = useBptContext();
  return (
    <div>
      {name !== "root" ? (
        <Title>
          <TitleLink href={`/blog${path.slice(BLOG_POSTS_DIR.length)}/index`}>
            <TitleButton
              onClick={handleClick}
              style={{
                fontSize: mainCategoryFontSize,
                fontWeight: mainCategoryFontWeight,
              }}
            >
              {name}
            </TitleButton>
          </TitleLink>
        </Title>
      ) : null}

      <List>{branches}</List>
    </div>
  );
};

export default MainCategory;
