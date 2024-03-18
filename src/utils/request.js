// import user from "../../mock/user";
import api from "../../utils/api";
export  const getUser = async () => {
    return api.get(`/api/users`);
}