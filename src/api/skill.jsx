import instance from "./instance";
import { getUserLocalStorage } from "../utils/localStorage";
const { token, user } = getUserLocalStorage();



export const getSkill = () => {
    const url = "/skill";
    return instance.get(url)
}

export const getSkillById = (id) => {
    const url = `/skill/${id}`;
    return instance.get(url)
}

export const postSkill = (data) => {
    const url = `/skill/${user.id}`;
    return instance.post(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}


export const removeSkill = (id) => {
    const url = `/skill/${id}/${user.id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}


export const putSkill = (data) => {
    const url = `/skill/${data._id}/${user.id}`;
    return instance.put(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}