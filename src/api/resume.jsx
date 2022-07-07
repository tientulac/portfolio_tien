import instance from "./instance";
import { getUserLocalStorage } from "../utils/localStorage";
const { token, user } = getUserLocalStorage();

export const getResume = () => {
    const url = "/resume";
    return instance.get(url)
}
export const getResumeById = (id) => {
    const url = `/resume/${id}`;
    return instance.get(url)
}

export const postResume = (data) => {
    const url = `/resume/${user.id}`;
    return instance.post(url, data,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const removeResume = (id) => {
    const url = `/resume/${id}/${user.id}`;
    return instance.delete(url,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const putResume = (data) => {
    const url = `/resume/${data._id}/${user.id}`;
    return instance.put(url, data,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}