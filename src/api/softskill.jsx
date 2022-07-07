import instance from "./instance";
import { getUserLocalStorage } from "../utils/localStorage";
const { token, user } = getUserLocalStorage();



export const getSoftSkill = () => {
    const url = "/softskill";
    return instance.get(url)
}

export const getSoftSkillById = (id) => {
    const url = `/softskill/${id}`;
    return instance.get(url)
}

export const postSoftSkill = (data) => {
    const url = `/softskill/${user.id}`;
    return instance.post(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}


export const removeSoftSkill = (id) => {
    const url = `/softskill/${id}/${user.id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}


export const putSoftSkill = (data) => {
    const url = `/softskill/${data._id}/${user.id}`;
    return instance.put(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}