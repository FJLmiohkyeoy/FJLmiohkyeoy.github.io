export const metadata = {
    title: "My Blog",
    description: "my blog",
};
const postsContainerStyle = {
    display:"flex",
    width:"100%",
    minHeight:"100vh",
    justifyContent: "flex-start",
};
export default function PostsLayout({children}){
    return(
        <main style={postsContainerStyle}>
                {children}
        </main>
    )
}