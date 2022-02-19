import { UserIcon } from "@heroicons/react/solid";

const HeartTip = () => {
  return (
    <div
      className="heart-tip animate-fade absolute top-[50px] left-1/2
        origin-top -translate-x-1/2 rounded-lg bg-red-500 p-3 opacity-0"
    >
      <div className="flex space-x-1">
        <UserIcon className="h-6 w-6 text-white" />
        <div className="font-semibold text-white">1</div>
      </div>
    </div>
  );
};

export default HeartTip;
