import React from "react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

function Article(props) {
  return (
    <div className="article-props">
      <a href={props.link}>
        <h3>{props.title}</h3>

        <p>{props.date}</p>
        <p>{props.tags}</p>
      </a>
    </div>
  );
}

class SeoDB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
    };
  }

  async componentDidMount() {
    const notionTableData = await fetch(
      "https://notion-api.splitbee.io/v1/table/c4b908bdb4f0418e9ec7e8a55b56e267"
    ).then((res) => res.json());

    this.setState({ tableData: notionTableData });
    console.log("notionTableData :>> ", notionTableData);
  }

  render() {
    return (
      <div className="container-article">
        <h1>SEO</h1>
        <div className="container-post">
          {this.state.tableData.map((seo, index) => {
            return (
              <Article
                title={seo.title}
                //description={blog.description}
                //tags={blog.tags}
                //date={blog.date}
                link={"/seo/" + seo.slug}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SeoDB;
