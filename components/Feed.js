import MIniProfile from "./MIniProfile";
import Posts from "./Posts";
import ProfileStories from "./ProfileStories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-4xl mx-auto'>
      <section className='col-span-2'>
        < ProfileStories />
        <Posts />
      </section>
      <section className=''>
        <div className="fixed">
          <MIniProfile />
          <Suggestions />
        </div>
      </section>

    </div>
  )
}

export default Feed
