import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="bg-white rounded-xl shadow-md px-12 py-8 flex flex-col items-center">
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="px-8 py-3 rounded-lg bg-[#1e1e1e] text-white font-medium text-lg hover:bg-[#181818] transition"
      >
        Logout
      </button>
    </div>
  );
};
