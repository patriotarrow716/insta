import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="bg-gray-100 pt-20 ">
      <Head>
        <title>Instagram Clone</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      {/* <Profile /> */}

      <Feed />
    </div>
  );
}
