// import React from "react";
// import SingleProduct from "@/components/SingleProduct/SingleProduct";
// import { useRouter } from "next/router";
// import SEO from "@/components/seo";

// function Product({ data }) {
//   const router = useRouter();

//   console.log("DATA PRODUCT", data);

//   console.log(router.query.id);
//   return (
//     <>
//       <SEO
//         title={data.title}
//         description={data.description}
//         keywords={"iphone, ayfon, aypon, oyfon"}
//       />
//       <SingleProduct product={data} />
//     </>
//   );
// }

// export async function getServerSideProps(ctx) {
//   console.log("CONTEXT PARAMS --->", ctx.params);
//   const res = await fetch(`https://dummyjson.com/products/${ctx.params.id}`);
//   const data = await res.json();

//   return {
//     props: {
//       data: data,
//     },
//   };
// }

// export default Product;
