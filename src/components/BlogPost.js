import React from "react";
import { NotionRenderer } from "react-notion";
import { useParams } from "react-router-dom";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

class BlogPost extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      blockMap: {},
    };
  }

  async blogNameToId(blogSlug) {
    const blogsDatabase = await fetch(
      "https://notion-api.splitbee.io/v1/table/322f531edcf44b20b359c06ddb40adbf"
    ).then((res) => res.json());
    console.log("blogsDatabase :>> ", blogsDatabase);

    try {
      const blog = blogsDatabase.filter((blog) => blog.slug === blogSlug).pop();
      return blog.id;
    } catch {
      return null;
    }
  }

  async componentDidMount() {
    const blogId = await this.blogNameToId(this.props.match.params.blogTitle);
    const blogData = await fetch(
      "https://notion-api.splitbee.io/v1/page/" + blogId
    ).then((res) => res.json());

    this.setState({ blockMap: blogData });
  }
  render() {
    return (
      <div>
        <NotionRenderer fullPage blockMap={this.state.blockMap} />
      </div>
    );
  }
}

export default BlogPost;
