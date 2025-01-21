import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
  ];
  return (
    <>
      <NavBar
        links={links}
        logo="Solaf AlFares"
        btn={{ path: "/signin", title: "Sign In" }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
