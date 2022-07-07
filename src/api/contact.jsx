import instance from "./instance";

export const getAllContacts = () => {
    const url = "/contact";
    return instance.get(url)
}

export const postContact = (data) => {
    const url = "/contact";
    return instance.post(url, data)
}

export const getContact = (id) => {
    const url = `/contact/${id}`;
    return instance.get(url)
}