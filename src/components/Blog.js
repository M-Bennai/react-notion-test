import React from "react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

function Article(props) {
  return (
    <div className="article-props">
      <a href={props.link} style={{ textDecoration: "none", color: "black" }}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <p>{props.tags}</p>
      </a>
    </div>
  );
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  async componentDidMount() {
    const notionTableData = await fetch(
      "https://notion-api.splitbee.io/v1/table/322f531edcf44b20b359c06ddb40adbf"
    ).then((res) => res.json());

    this.setState({ tableData: notionTableData });
    console.log("notionTableData :>> ", notionTableData);
  }

  render() {
    return (
      <div className="container-article">
        <h1>News</h1>
        <div className="container-post">
          {this.state.tableData.map((blog, index) => {
            return (
              <Article
                title={blog.title}
                //description={blog.description}
                //tags={blog.tags}
                //date={blog.date}
                link={"/blog/" + blog.slug}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
