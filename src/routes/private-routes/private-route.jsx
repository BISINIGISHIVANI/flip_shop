import { useAuth } from "../../hooks";
import { Navigate,useLocation } from "react-router-dom";
export const PrivateRoute=({children})=>{
    const location=useLocation()
    const { authState :{token}} = useAuth();
	return token ? children : <Navigate to="/login" state={{from:location}} replace/>;
}