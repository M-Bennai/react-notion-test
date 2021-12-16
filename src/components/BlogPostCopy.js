import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion";

const BlogPostCopy = () => {
  const [blockMap, setBlockMap] = useState({});
  const params = useParams();

  async function blogNameToId(blogSlug) {
    const blogsDatabase = await fetch(
      "https://notion-api.splitbee.io/v1/table/322f531edcf44b20b359c06ddb40adbf"
    ).then((res) => res.json());
    console.log("blogsDatabase :>> ", blogsDatabase);

    try {
      const blog = blogsDatabase.filter((blog) => blog.slug === blogSlug).pop();
      console.log("blog.slug :>> ", blog.slug);

      return blog.id;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    // Create an scoped async function in the hook
    async function getBlockId() {
      const blogId = await blogNameToId(params.blogTitle);

      const blogData = await fetch(
        "https://notion-api.splitbee.io/v1/page/" + blogId
      ).then((res) => res.json());

      setBlockMap(blogData);
      console.log("blogdata :>> ", blogData);
      console.log("params.blogTitle :>> ", params.blogTitle);
      console.log("blogId :>> ", blogId);
      console.log("blockMap :>> ", blockMap);
      console.log("setBlockMap :>> ", setBlockMap);
    }
    getBlockId();
  }, []);

  return (
    <div>
      <span>back</span>
      <NotionRenderer className="notion-style" fullPage blockMap={blockMap} />
    </div>
  );
};

export default BlogPostCopy;
