const ProfileStory = ({ img, username }) => {
  return (
    <div>
      <div className="h-12 w-12 rounded-full ring-2 ring-gray-200 ring-offset-2">
        <div className="rounded-full bg-white">
          <img className="h-12 w-12 rounded-full" src={img} alt="" />
        </div>
      </div>
      <p className="w-20 truncate text-justify text-xs text-gray-500">
        {username}
      </p>
    </div>
  );
};

export default ProfileStory;
