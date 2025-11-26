import { Children } from "react";
import Forbidden from "../Components/Forbidden";
import Loading from "../Components/Loading";
import useAuth from "../Hook/useAuth";
import useRole from "../Hook/useRole";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();

  const { role, isLoading: roleLoading } = useRole();
  if (loading || roleLoading) {
    return <Loading />;
  }
if(role!=="admin"){
    return <Forbidden/>
}

  return children
};

export default AdminRoute;
