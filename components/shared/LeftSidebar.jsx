import PostTree from "@/server/components/PostTree";

const containerStyle = {
  display: "flex",
  flexDirection: "cloumn",
  left: "0",
  top: "3rem",
  width: "30%",
  minWidth: "20rem",
  height: "100vh",
  alignItems: "flex-end",
  paddingRight: "1rem",
  position: "relative",
};

const LeftSidebar = ({ postsDir }) => {
  return (
    <div style={containerStyle}>
      <PostTree postsDir={postsDir} />
    </div>
  );
};

export default LeftSidebar;
