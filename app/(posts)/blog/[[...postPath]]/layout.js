import LeftSidebar from "@/components/shared/LeftSidebar";
import { BLOG_POSTS_DIR } from "@/components/posts/config";
import RightSideBar from "@/components/shared/RightSideBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const blogContainerStyle = {
  boxSizing:"border-box",
  width:"40%",
  minWidth:"50rem",
};

export default function BlogLayout({ children }) {
  return <>
    <LeftSidebar postsDir={BLOG_POSTS_DIR} />
    <div className="blog-main" style={blogContainerStyle}>{children}</div>
    <RightSideBar />
  </>
}