/* eslint-disable react/jsx-filename-extension */
import { createContext, useMemo, useState } from "react";

type AuthUserType = {
  user: {
    email: string;
    firstname: string;
    lastname: string;
    role: string;
  };
  token: string;
};

type ContextType = {
  authUser: AuthUserType | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
};

const AuthContext = createContext({} as ContextType);

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
  const value = useMemo(
    () => ({ authUser, setAuthUser }),
    [authUser, setAuthUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
