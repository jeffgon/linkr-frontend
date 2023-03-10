import React, { useState } from "react";

export const AuthContext = React.createContext({});
export const AuthProvider = (props) => {
  const [user, setUser] = useState({user: "", token: ""});
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading, refresh, setRefresh }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);