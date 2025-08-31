import { useAuth0 } from "@auth0/auth0-react";

export const useToken = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getToken = async () => {
    try {
      return await getAccessTokenSilently();
    } catch (err) {
      console.error("Failed to get token:", err);
      return null;
    }
  };

  return { getToken };
};
