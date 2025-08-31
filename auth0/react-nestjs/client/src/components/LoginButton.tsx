import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-white rounded-xl shadow-md px-12 py-8 flex flex-col items-center">
      <button
        onClick={() => loginWithRedirect()}
        className="px-8 py-3 rounded-lg bg-[#1e1e1e] text-white font-medium text-lg hover:bg-[#181818] transition"
      >
        Login | Signup
      </button>
    </div>
  );
};
