const Suggestions = () => {
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-semibold text-gray-400">おすすめ</h3>
        <button className="font-semibold text-gray-600">すべて見る</button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="div avater">
          <div className="h-8 w-8 rounded-full">
            <img
              className="h-8 w-8 rounded-full"
              src="https://cancam.jp/uploads/2021/05/19/re210323_16789-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-sm font-semibold">alansmith</h2>
          <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-xs font-semibold text-blue-400">
          フォローする
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="div avater">
          <div className="h-8 w-8 rounded-full">
            <img
              className="h-8 w-8 rounded-full"
              src="https://cancam.jp/uploads/2021/05/19/re210323_16789-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-sm font-semibold">alansmith</h2>
          <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-xs font-semibold text-blue-400">
          フォローする
        </button>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="div avater">
          <div className="h-8 w-8 rounded-full">
            <img
              className="h-8 w-8 rounded-full"
              src="https://cancam.jp/uploads/2021/05/19/re210323_16789-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-sm font-semibold">alansmith</h2>
          <h3 className="text-xs text-gray-400">New to Instagram</h3>
        </div>
        <button className="text-xs font-semibold text-blue-400">
          フォローする
        </button>
      </div>
      <ul className="pt-5 text-xs font-thin text-gray-400">
        <li className="flex items-center justify-between pt-2">
          基本データ.ヘルププレス.API.求人.プライバシー.
        </li>
        <li className="flex items-center justify-between pt-2">
          利用規約.所在地.人気アカウント.ハッシュタグ.言語
        </li>
      </ul>
      <p className="flex items-center pt-6 text-xs font-thin text-gray-400">
        © 2022 INSTAGRAM Clone
      </p>
    </div>
  );
};

export default Suggestions;
