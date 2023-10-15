import PostTree from "@/server/components/PostTree";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  left: "0",
  top: "3rem",
  width: "30%",
  minWidth: "20rem",
  height: "100%",
  alignItems: "flex-end",
  paddingRight: "1rem",
};

const LeftSidebar = ({ postsDir }) => {
  return (
    <div className="left-sidebar" style={containerStyle}>
      <PostTree postsDir={postsDir} />
    </div>
  );
};

export default LeftSidebar;
