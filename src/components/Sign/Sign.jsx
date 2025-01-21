import { NavLink } from "react-router-dom";
import "./Sign.css";

const Sign = ({ title, desc, inputs, text, link }) => {
  return (
    <div className="sign">
      <div className="container">
        <h1>{title}</h1>
        <p>{desc}</p>
        <form>
          {inputs?.map((input, i) => (
            <input key={i} type={input.type} placeholder={input.placeholder} />
          ))}
          <input type="submit" value={title} />
        </form>
        <div className="additional">
          <p>{text}</p>
          <NavLink to={link?.path}>{link?.title}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sign;
