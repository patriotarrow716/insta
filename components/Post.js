import {
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const Post = () => {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center">
        <div className="avater mr-3">
          <div className="h-12 w-12 pt-1 pl-1">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1606963060045-1e3eaa0e6eac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt=""
            />
          </div>
        </div>

        <p className="flex-1 text-sm font-semibold">username</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer pr-5" />
      </div>
      <img
        className="w-full"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className="flex justify-between p-4">
        <div className="flex items-center space-x-4">
          <HeartIcon className="h-6 cursor-pointer" />
          <FontAwesomeIcon
            className="scale-x-[-1] cursor-pointer"
            icon={faComment}
            size="lg"
          />
          <PaperAirplaneIcon className="cunsor-pointer h-6 -translate-y-1 rotate-[60deg]" />
        </div>
        <BookmarkIcon className="h-6 cursor-pointer " />
      </div>
      <p className="truncate px-4">
        <p className="font-semiboid.mb-1 text-sm">23 いいね!</p>
        <span className="mr-1 text-sm font-semibold">ckmobil</span>Nice beach!!
      </p>
      <div className="mb-1 cursor-pointer px-4 text-sm text-gray-400">
        View all 14 comments
      </div>
      <div className="flex justify-between px-4">
        <div>
          <span className="mr-1 text-sm font-semibold">Alan</span>That s greet!!
        </div>
        <HeartIcon className="h-4 cursor-pointer" />
      </div>
      <div className="flex justify-between px-4">
        <div>
          <span className="mr-1 text-sm font-semibold">Alan</span>That s greet!!
        </div>
        <HeartIcon className="h-4 cursor-pointer" />
      </div>
      <div className="mt-2 mb-4 px-4 text-xs text-gray-400">2days ago</div>
      <hr />
      <form action="" className="flex items-center p-4">
        <EmojiHappyIcon className="mr-2 h-7 cursor-pointer" />
        <input
          type="text"
          className="boder-none flex-1 outline-none focus:ring-0"
          placeholder="コメントを追加...."
        />
        <button className="font-semibold text-blue-400 hover:text-blue-700">
          投稿する
        </button>
      </form>
    </div>
  );
};

export default Post;
