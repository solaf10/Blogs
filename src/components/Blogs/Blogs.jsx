import Blog from "./Blog";
import "./Blogs.css";

const Blogs = () => {
  const cards = [
    {
      image: "/assets/imgs/blog1.png",
      author: "Alec Whitten • 1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    },
    {
      image: "/assets/imgs/blog2.png",
      author: "Demi WIlkinson • 1 Jan 2023",
      title: "PM mental models",
      desc: "Mental models are simple expressions of complex processes or relationships.",
    },
    {
      image: "/assets/imgs/blog3.png",
      author: "Candice Wu • 1 Jan 2023",
      title: "What is Wireframing?",
      desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    },
    {
      image: "/assets/imgs/blog4.png",
      author: "Natali Craig • 1 Jan 2023",
      title: "How collaboration makes us better designers",
      desc: "Collaboration can make our teams stronger, and our individual designs better.",
    },
    {
      image: "/assets/imgs/blog5.png",
      author: "Drew Cano • 1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      desc: "JavaScript frameworks make development easy with extensive features and functionalities.",
    },
    {
      image: "/assets/imgs/blog6.png",
      author: "Orlando Diggs • 1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      desc: "Starting a community doesn’t need to be complicated, but how do you get started?",
    },
  ];
  return (
    <section className="blogs">
      <h2>All Blog Posts</h2>
      <div className="container">
        {cards?.map((card, i) => (
          <Blog
            key={i}
            image={card.image}
            author={card.author}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
