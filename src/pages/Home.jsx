import Blogs from "../components/Blogs/Blogs";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero
        title="Stories and interviews"
        desc="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
      />
      <Blogs />
    </>
  );
};

export default Home;
