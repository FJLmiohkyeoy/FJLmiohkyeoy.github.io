import PostIndexTable from "../mdxViewer/PostIndexTable/Index";

const style = {
  display: "flex",
  flexDirection: "column",
  right: 0,
  top: "3rem",
  width: "30%",
  minWidth: "20rem",
  paddingLeft: "2rem",
  height: "100%",
};

const RightSideBar = () => {
  return (
    <div style={style}>
      <PostIndexTable />
    </div>
  );
};

export default RightSideBar;
