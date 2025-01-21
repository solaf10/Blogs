import Sign from "../components/Sign/Sign";

const SignIn = () => {
  const inputs = [
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
        title="Sign In"
        desc="Enter your email and password to sign in !"
        inputs={inputs}
        text="Don't have an account?"
        link={{ path: "/signup", title: "Sign up" }}
      />
    </>
  );
};

export default SignIn;
