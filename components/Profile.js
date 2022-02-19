/* eslint-disable react/jsx-key */
import { CogIcon, HeartIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faComment } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { PlayIcon, BookmarkIcon } from "@heroicons/react/outline";
// import { HeartIcon } from "@heroicons/react/solid";
import ProfileStories from "./ProfileStories";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

const Profile = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(
        `https://api.unsplash.com/search/photos?per_page=30&query=wedding decoration&client_id=${process.env.NEXT_PUBLIC_client_id}`
      );

      const edited_result = results.map((item) => item.links.download);
      setImages(edited_result);
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5 max-w-6xl p-10 xl:mx-auto">
      <div className="grid grid-cols-4 gap-4 md:flex">
        <div className="avater justify-center">
          <div className="h-36 w-36 rounded-full ">
            <img
              className="outline-3 w-28 rounded-full h-28 outline-double md:h-36 md:w-36"
              src="https://images.unsplash.com/photo-1611243705491-71487c2ed137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9sZXh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
        <div className="col-span-2">
          <span className="mr-4 text-2xl text-gray-700">コックピット</span>
          <div className="corsor-pointer mr-4 inline rounded border border-gray-200 p-1 px-2 text-sm font-semibold text-gray-700">
            プロフィールを編集
          </div>
          <CogIcon className="inline h-6 cursor-pointer" />
          <div className="mt-4 flex">
            <div>
              <span className="font-semibold">30</span>投稿
            </div>
            <div className="ml-4">
              <span className="font-semibold">152</span>フォロワー
            </div>
            <div className="ml-4">
              <span className="font-semibold">198</span>フォロー中
            </div>
          </div>

          <div>
            <div className="pt-3">
              <span className="text-lg font-semibold text-gray-700">
                ckmobil javascript
              </span>
            </div>
            <p className="text-base text-blue-700">
              #engineer #artist #designer
            </p>
            <p className="text-base font-medium text-blue-700">
              https://www.youtube.com/channel/UCBobmJyzsJ6Ll7UbfhI4iwQ
            </p>
          </div>
        </div>
      </div>
      <ProfileStories />
      <hr className="mt-6 border-gray-500" />
      <div className="-mt-[0.5px] flex justify-center gap-10">
        <button className="flex gap-2 border-gray-800 py-8 text-sm font-semibold text-gray-400 focus:border-t focus:text-gray-600">
          <FontAwesomeIcon icon={faGripVertical} size="lg" />
          POST
        </button>
        <button className="flex gap-2 border-gray-800 py-8 text-sm font-semibold text-gray-400 focus:border-t focus:text-gray-600">
          <PlayIcon className="h-6" />
          VIDEOS
        </button>
        <button className="flex gap-2 border-gray-800 py-8 text-sm font-semibold text-gray-400 focus:border-t focus:text-gray-600">
          <BookmarkIcon className="h-6" />
          SAVED
        </button>
        <button className="flex gap-2 border-gray-800 py-8 text-sm font-semibold text-gray-400 focus:border-t focus:text-gray-600">
          <FontAwesomeIcon icon={faAddressCard} size="lg" />
          TAGGE
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 ">
        {images.map((image) => (
          <div className="h-64 overflow-hidden">
            <div className="group relative cursor-pointer">
              <div className="relative h-64 ">
                <Image layout="fill" cbjectFit="cover" src={image} alt="" />
              </div>

              <div
                className="bg-black-rgba absolute top-0 
              left-1/2 flex h-full w-full -translate-x-1/2 items-center justify-center 
              space-x-3 text-white opacity-0 group-hover:opacity-100"
              >
                <div className="space-x1">
                  <HeartIcon className="inline h-6" />
                  <span>3</span>
                </div>
                <div className="space-x1">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="scale-x-[-1]"
                    size="lg"
                  />
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
