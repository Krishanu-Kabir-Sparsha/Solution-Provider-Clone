import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const products = [
  {
    id: 1,
    image: p1,
    name: 'Handmade Bowl "Ganbaru"',
    price: "$32.00",
    material: "Ceramic",
    color: "Green & Brown",
    description: "A beautifully crafted ceramic bowl that brings an earthy charm to your table. The rich green and brown hues add warmth, making it perfect for soups, salads, or as a decorative piece. Durable, microwave-safe, and designed to last."
  },
  {
    id: 2,
    image: p2,
    name: 'Handmade Vase "Ikigai"',
    price: "$62.00",
    material: "Ceramic",
    color: "Black & Gold",
    description: "This stunning black and gold vase embodies elegance and purpose. Perfect for showcasing fresh flowers or as a statement piece on its own. Its sleek design and luxurious finish make it an exquisite addition to any space."
  },
  {
    id: 3,
    image: p3,
    name: 'Handmade Vase "Kaiyo"',
    price: "$60.00",
    material: "Ceramic",
    color: "Turquoise & Black",
    description: "Inspired by the ocean, the Kaiyo vase features a vibrant turquoise glaze with bold black accents. A striking piece that brings a splash of color and artistic flair to your home decor. Ideal for tall blooms or dried arrangements."
  },
  {
    id: 4,
    image: p4,
    name: 'Handmade Vase "Shimai"',
    price: "$58.00",
    material: "Ceramic",
    color: "Red & Gold",
    description: "A graceful vase with a fiery red and gold finish, symbolizing friendship and warmth. Perfect for adding a touch of sophistication to your living room or gifting to a loved one. Each piece is uniquely handcrafted."
  },
  {
    id: 5,
    image: p5,
    name: 'Handmade Vase "Sora"',
    price: "$51.00",
    material: "Ceramic",
    color: "Blue",
    description: "The Sora vase, with its calming blue glaze, captures the serenity of the sky. Its minimalist design makes it versatile for any room, while the handcrafted details add a touch of uniqueness. Ideal for fresh or dried flowers."
  },
  {
    id: 6,
    image: p6,
    name: 'Handmade Vase "Yuugen"',
    price: "$52.00",
    material: "Ceramic",
    color: "Black & Grey",
    description: "The Yuugen vase exudes subtle beauty with its black and grey tones, representing mystery and depth. Perfect for modern interiors, this vase pairs well with monochrome or minimalist decor styles."
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-3">{product.name}</h2>
          <p className="text-xl text-red-500 font-bold mb-2">{product.price}</p>
          <p className="text-lg mb-4">Material: {product.material}</p>
          <p className="text-lg mb-4">Color: {product.color}</p>
          <p className="text-md mb-6">{product.description}</p>
          <div className="flex items-center mb-4">
            <button
              className="px-3 py-1 bg-gray-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="mx-3 text-lg">{quantity}</span>
            <button
              className="px-3 py-1 bg-gray-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            onClick={() => addToCart({ ...product, price: parseFloat(product.price.replace('$', '')) }, quantity)}
            className="bg-black text-white px-5 py-2 rounded-lg"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
