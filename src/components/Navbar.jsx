import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { FiShoppingBag, FiMenu } from "react-icons/fi"; // Icons
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Import Cart Context
import logo from "../assets/logo.avif"; // Import your logo

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart(); // Get cart from context
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculate total cart items

  return (
    <Navbar shouldHideOnScroll className="px-4 sm:px-10 lg:px-16 border-b shadow-sm bg-white">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <NavbarBrand className="flex items-center space-x-2 mr-auto">
          <img src={logo} alt="Logo" className="h-10 w-32 sm:w-40 md:w-56 object-contain" />
        </NavbarBrand>

        {/* Desktop Menu */}
        <NavbarContent className="hidden sm:flex justify-center gap-6 text-black font-medium">
          <NavbarItem><Link href="/" className="hover:underline text-black">Home</Link></NavbarItem>
          <NavbarItem><Link href="/shop" className="hover:underline text-black">Shop</Link></NavbarItem>
          <NavbarItem><Link href="/contact" className="hover:underline text-black">Contact</Link></NavbarItem>
          <NavbarItem><Link href="/privacy-policy" className="hover:underline text-black">Privacy Policy</Link></NavbarItem>
          <NavbarItem><Link href="/projects" className="hover:underline text-black">Projects</Link></NavbarItem>
        </NavbarContent>

        {/* Right Side: Shopping Bag & Menu */}
        <NavbarContent justify="end" className="flex items-center space-x-4">
          {/* Shopping Bag */}
          <NavbarItem>
            <Link href="/cart" className="relative flex items-center space-x-1 text-black">
              <FiShoppingBag className="text-2xl" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </NavbarItem>

          {/* Mobile Menu Button */}
          <NavbarItem className="sm:hidden">
            <Button isIconOnly color="primary" variant="flat" onClick={() => setIsOpen(!isOpen)}>
              <FiMenu className="text-2xl text-black" />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`sm:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="bg-white shadow-md absolute w-full top-full left-0 py-4 space-y-2">
          <NavbarItem><Link href="/" className="block text-center hover:bg-gray-100 py-2 text-black">Home</Link></NavbarItem>
          <NavbarItem><Link href="/shop" className="block text-center hover:bg-gray-100 py-2 text-black">Shop</Link></NavbarItem>
          <NavbarItem><Link href="/contact" className="block text-center hover:bg-gray-100 py-2 text-black">Contact</Link></NavbarItem>
          <NavbarItem><Link href="/privacy-policy" className="block text-center hover:bg-gray-100 py-2 text-black">Privacy Policy</Link></NavbarItem>
          <NavbarItem><Link href="/projects" className="block text-center hover:bg-gray-100 py-2 text-black">Projects</Link></NavbarItem>
          <NavbarItem>
            <Link href="/cart" className="block text-center hover:bg-gray-100 py-2 text-black">
              Cart 
              {cartItemCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </NavbarItem>
        </div>
      </div>
    </Navbar>
  );
}
