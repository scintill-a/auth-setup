import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => (
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_CLIENT_DOMAIN}
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_AUTH0_API_AUDIENCE || "<API_AUDIENCE>", // API audience
    }}
  >
    {children}
  </Auth0Provider>
);
