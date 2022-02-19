import profilestories from "./profilestories.json";
import ProfileStory from "./ProfileStory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const ProfileStories = () => {
  const storiesRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const onScroll = () => {
    if (storiesRef.current.scrollLeft > 0) {
      setShowLeft(true);
    } else {
      setShowLeft(false);
    }
    if (
      storiesRef.current.scrollLeft ==
      storiesRef.current.scrollWidth - storiesRef.current.clientWidth
    ) {
      setShowRight(false);
    } else {
      setShowRight(true);
    }
  };
  return (
    <div className="relative w-full">
      <div
        onScroll={onScroll}
        ref={storiesRef}
        className="scrollbar-hide flex
    w-full space-x-1  overflow-scroll scroll-smooth border-slate-400  bg-white p-1 "
      >
        {profilestories.map((story) => {
          return (
            <ProfileStory
              key={story.id}
              img={story.avater}
              username={story.fast_name + story.last_name}
            />
          );
        })}
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full items-center justify-between p-4">
        <button
          onClick={() => {
            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 300;
          }}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faChevronCircleLeft}
            color="white"
            className={`cursor-pointer opacity-60 drop-shadow-lg ${
              showLeft ? "visible" : "invisible"
            }`}
          />
        </button>
        <button
          onClick={() => {
            storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 300;
          }}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faChevronCircleRight}
            color="white"
            className={`cursor-pointer opacity-60 drop-shadow-lg ${
              showRight ? "visible" : "invisible"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileStories;
