import getData from "@/db/getAllSongs";

const Home = async () => {
  const data = await getData();

  return (
    <div className="">
      <main className=""></main>
    </div>
  );
};

export default Home;
