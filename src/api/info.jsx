import { getUserLocalStorage } from "../utils/localStorage";
import instance from "./instance";

const { token, user } = getUserLocalStorage();


export const getInfo = () => {
    const url = "/info";
    return instance.get(url)
}
export const getInfoId = (id) => {
    const url = `/info/${id}`;
    return instance.get(url)
}

export const postInfo = (data) => {
    const url = "/info";
    return instance.post(url, data)
}

export const removeInfo = (id) => {
    const url = `/info/${id}`;
    return instance.delete(url)
}

export const putInfo = (data) => {
    const url = `/info/${data._id}/${user.id}`;
    return instance.put(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}