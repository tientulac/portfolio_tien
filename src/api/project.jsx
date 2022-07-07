import instance from "./instance";
import { getUserLocalStorage } from "../utils/localStorage";
const { token, user } = getUserLocalStorage();

export const getAllProjects = () => {
    const url = "/project";
    return instance.get(url)
}

export const getProjectById = (id) => {
    const url = `/project/${id}`;
    return instance.get(url)
}

export const postProject = (data) => {
    const url = `/project/${user.id}`;
    return instance.post(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}


export const removeProject = (id) => {
    const url = `/project/${id}/${user.id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}


export const putProject = (data) => {
    const url = `/project/${data._id}/${user.id}`;
    return instance.put(url, data, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })

}
