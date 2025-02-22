import React from "react";
import { Link } from "react-router-dom";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const products = [
  { id: 1, image: p1, name: 'Handmade Bowl "Ganbaru"', price: 32.0 },
  { id: 2, image: p2, name: 'Handmade Vase "Ikigai"', price: 62.0 },
  { id: 3, image: p3, name: 'Handmade Vase "Kaiyo"', price: 60.0 },
  { id: 4, image: p4, name: 'Handmade Vase "Shimai"', price: 58.0 },
  { id: 5, image: p5, name: 'Handmade Vase "Sora"', price: 51.0 },
  { id: 6, image: p6, name: 'Handmade Vase "Yuugen"', price: 52.0 },
];

const Shop = () => {
  return (
    <div className="w-full py-20 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-black mb-4">Our Shop</h2>
          <p className="text-lg text-gray-600">
            Discover our exclusive handmade collection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-red-500">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
