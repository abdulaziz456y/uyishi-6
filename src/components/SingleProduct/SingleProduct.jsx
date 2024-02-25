// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const SingleProduct = ({ product }) => {
//   const router = useRouter();
//   return (
//     <div className="container mx-auto py-8">
//       <button
//         onClick={() => router.back()}
//         className="bg-green-500 mb-[20px] hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block mt-4"
//       >
//         Back button
//       </button>
//       <div className="flex flex-wrap justify-center items-center">
//         <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 rouded-lg border">
//           <Image
//             width={400}
//             height={400}
//             src={product.thumbnail}
//             alt={product.title}
//             className="rounded-lg shadow-lg border "
//           />
//         </div>
//         <div className="w-full md:w-1/2 lg:w-2/3 px-4">
//           <h1 className="text-3xl font-semibold text-gray-800">
//             {product.title}
//           </h1>
//           <p className="text-gray-600 my-2">{product.description}</p>
//           <p className="text-gray-700 font-semibold text-lg my-2">
//             ${product.price}
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-4">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
