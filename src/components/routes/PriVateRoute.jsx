import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PriVateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <div className="text-center my-52">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        </div>
    }

    if(user){
        
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PriVateRoute;