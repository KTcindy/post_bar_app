
// import user from "../../mock/user";
import api from "./api";
export const getUser = async () => {
    return api.get(`/api/users`);
}