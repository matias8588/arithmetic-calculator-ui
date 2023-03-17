import Header from "../../components/FormHeader";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header heading="Create an account" />
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
