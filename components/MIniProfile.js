

const MIniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-10 ml-10">
        <div className="div avater">
            <div className="rounded-full w-14 h-14">
                <img className="rounded-full w-14 h-14" src="https://cancam.jp/uploads/2021/05/19/re210323_16789-1.jpg" alt="avater" />
            </div>
        </div>
        <div className="flex-1 mx-4">
            <h2 className="font-bold">Cookie</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="text-blue-400 text-sm font-semibold">
            切り替える
        </button>
      
    </div>
  )
}

export default MIniProfile
