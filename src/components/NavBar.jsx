/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Search from "./Search";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import MobileSearch from "./MobileSearch";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="w-full  ">
      <div className="flex bg-amazonclone text-white h-[60px]">
        <div className="flex items-center mr-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[50px] m-2 "
              src="../images/amazon.png"
              alt=""
            />
          </Link>
          <div className="pr-4 pl-4 hidden md:block">
            <div className="text-xs xl:text-sm">Delivered to</div>
            <div className="text-sm xl:text-base font-bold">Nigeria</div>
          </div>
        </div>
        <div className="flex grow relative items-center">
          <Search />
        </div>
        <div className="flex items-center ml-4 ">
          <div className="pr-4 pl-4 hidden md:block">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4 hidden md:block">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout "}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px] " />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400 ">
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold ">cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="sm:hidden">
        <MobileSearch />
      </div>
      <div className="hidden sm:flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Today's deal</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
