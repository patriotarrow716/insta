import Image from "next/image";
import { HomeIcon, SearchIcon } from "@heroicons/react/outline";
import { PlusCircleIcon } from "@heroicons/react/solid";

import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faPlusSquare,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
// import { Heart } from "react-hero-icon/outline";
import HeartTip from "./HeartTip";
import SearchTip from "./SearchTip";

const Header = () => {
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [crossVisibility, setCrossVisibility] = useState(false);
  const [showToolTip, setShowToolTip] = useState(false);
  const inputAreaRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef?.current?.contains(e.target)) {
        console.log("Outside input area");
        setCrossVisibility(false);
        setSearchVisibility(true);
        setShowToolTip(false);
      } else {
        setCrossVisibility(true);
        setSearchVisibility(false);
        setShowToolTip(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);
  return (
    <div className="shadow-sm-border-b fixed top-0 z-20 w-full bg-white">
      <daiv className="mx-5 flex max-w-4xl justify-between p-2 xl:mx-auto">
        <div className="flex w-full justify-between">
          <div className="relative h-8 w-24 lg:inline-grid">
            <Image
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div
            ref={inputAreaRef}
            className="boder-[1.2px] relative mt-1 hidden rounded-sm border-solid border-gray-300 bg-gray-50 p-1 pl-2 sm:text-sm md:flex"
          >
            {searchVisibility && (
              <SearchIcon className="h-5 w-5 text-gray-400" />
            )}
            <input
              type="text"
              placeholder="検索"
              className="headerinput block bg-gray-50 pl-1 focus:outline-none"
            ></input>
            {crossVisibility && (
              <PlusCircleIcon className="h-5 w-5 rotate-45 text-gray-400" />
            )}
            {showToolTip && <SearchTip />}
          </div>
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="h-6 cursor-pointer" />
            <div className="relative">
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faFacebookMessenger}
                size="lg"
              />

              <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs leading-none text-white">
                1
              </span>
            </div>

            <div className="relative">
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faHeart}
                size="lg"
              />
              <HeartTip />

              <div className="absolute left-1/2 block h-1 w-1 -translate-x-1/2 rounded-full bg-red-600"></div>
            </div>
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faPlusSquare}
              size="lg"
            />
            <FontAwesomeIcon
              className="cursor-pointer"
              icon={faCompass}
              size="lg"
            />
            <div className="avatar">
              <div className="h-8 w-8 rounded-full">
                <img src="https://images.unsplash.com/photo-1611243705491-71487c2ed137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9sZXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
              </div>
            </div>
          </div>
        </div>
      </daiv>
    </div>
  );
};

export default Header;
