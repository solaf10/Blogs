import Sign from "../components/Sign/Sign";

const SignUp = () => {
  const inputs = [
    {
      type: "text",
      placeholder: "Enter your username",
    },
    {
      type: "email",
      placeholder: "Enter your email",
    },
    {
      type: "password",
      placeholder: "Enter your Password",
    },
  ];
  return (
    <>
      <Sign
        title="Sign Up"
        desc="Enter your email and username , password to sign up!"
        inputs={inputs}
        text="Have an account?"
        link={{ path: "/signin", title: "Log in" }}
      />
    </>
  );
};

export default SignUp;
