export const setUserLocalStorage = (data, next) => {
    localStorage.setItem("user", JSON.stringify(data));
    next();
}
export const getUserLocalStorage = () => {
    // if (localStorage.getItem("user")) {
    //     return JSON.parse(localStorage.getItem("user"));
    // } else {
    //     localStorage.setItem("user", JSON.stringify({
    //         "token": "abc",
    //         "user": {
    //             "id": "acount",
    //             "email": "acount@gmail.com",
    //             "name": "acount",
    //             "role": 0
    //         }
    //     }))
    // }
    localStorage.setItem("user", JSON.stringify({
        "token": "abc",
        "user": {
            "id": "acount",
            "email": "acount@gmail.com",
            "name": "acount",
            "role": 0
        }
    }))
    return JSON.parse(localStorage.getItem("user"));
}
