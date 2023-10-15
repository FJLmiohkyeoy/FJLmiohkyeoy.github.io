import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["upload.wikimedia.org", "www.minecraft.net", "t1.daumcdn.net", "t4.ftcdn.net"]},
    compiler:{
        styledComponents: true,
    },
    experimental: {
        mdxRs: true,
    },
    reactStrictMode: false,
    // output:"export",
};

const withMDX = createMDX({
    options: {
      extension: /\.mdx?$/,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      // If you use `MDXProvider`, uncomment the following line.
      providerImportSource: "@mdx-js/react",
    },
});

export default withMDX(nextConfig);
