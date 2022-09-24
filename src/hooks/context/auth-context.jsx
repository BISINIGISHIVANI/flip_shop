import { createContext, useContext, useEffect, useReducer} from "react";
import { AuthReducer } from "../reducer/auth-reducer";
const intialObj={
  user:"",
  token:"",
}
const AuthContext=createContext(null);
const AuthProvider = ({ children }) => {
    const [authState,authDispatch] = useReducer(AuthReducer, intialObj);
    useEffect(()=>{
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      authDispatch({ type: "CHECK_USER", payload: { user, token } });
    },[])

    return (
      <AuthContext.Provider value={{authState,authDispatch}}>
        {children}
      </AuthContext.Provider>
    );
  };
  const useAuth = () => useContext(AuthContext);
  
  export { AuthProvider, useAuth };
