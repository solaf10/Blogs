import "./Hero.css";

const Hero = ({ title, desc }) => {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{desc}</p>
      <form>
        <input type="email" placeholder="Enter Your email" />
        <input type="submit" value="Subscribe" />
      </form>
    </section>
  );
};

export default Hero;
