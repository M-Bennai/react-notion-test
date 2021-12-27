import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotionRenderer } from "react-notion";

const SeoPost = () => {
  const [blockMap, setBlockMap] = useState({});
  const params = useParams();

  async function SeoNameToId(seoSlug) {
    const seosDatabase = await fetch(
      "https://notion-api.splitbee.io/v1/table/c4b908bdb4f0418e9ec7e8a55b56e267"
    ).then((res) => res.json());
    console.log("seosDatabase :>> ", seosDatabase);

    try {
      const seo = seosDatabase.filter((seo) => seo.slug === seoSlug).pop();
      console.log("seo.slug :>> ", seo.slug);

      return seo.id;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    // Create an scoped async function in the hook
    async function getBlockId() {
      const SeoId = await SeoNameToId(params.seoTitle);

      const seoData = await fetch(
        "https://notion-api.splitbee.io/v1/page/" + SeoId
      ).then((res) => res.json());

      setBlockMap(seoData);
      console.log("seodata :>> ", seoData);
      console.log("params.seoTitle :>> ", params.seoTitle);
      console.log("seoId :>> ", SeoId);
      console.log("blockMap :>> ", blockMap);
      console.log("setBlockMap :>> ", setBlockMap);
    }
    getBlockId();
  }, []);

  return (
    <div>
      <span>back</span>
      <NotionRenderer fullPage blockMap={blockMap} />
    </div>
  );
};

export default SeoPost;
