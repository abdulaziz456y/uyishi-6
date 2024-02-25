import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Catalog from '@/components/Catalog'
import HomePage from "@/components/HomePage/HomePage";


function products(props) {
  console.log("PROPS -->", props);
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setItems(res.data.products);
    });
  }, []);

  const keywords =
    props.data && props.data?.products.map((el) => el.title).join(",");

  return (
    <>
    
      {/* <SEO keywords={keywords} />
      <Products products={props.data?.products} /> */}
<Catalog />
{/* <HomePage /> */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  console.log("DATA ===>", data);
  return {
    props: {
      something: "something",
      data: data,
    },
  };
}

export default products;



