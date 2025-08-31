import { useToken } from "./useToken";

export const useApi = () => {
  const { getToken } = useToken();

  const callApi = async (endpoint: string) => {
    const token = await getToken();
    if (!token) throw new Error("No token available");

    const res = await fetch(
      `${import.meta.env.VITE_AUTH0_API_AUDIENCE}/${endpoint}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) throw new Error("API error");
    return res.json();
  };

  return { callApi };
};
