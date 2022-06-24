import axios from "axios";

export const tryCatch = (t, e = (err) => console.error(err)) => {
    return function (...args) {
        try {
            return t(args);
        } catch (err) {
            e(err);
        }
    }
}

export const tryAxiosGet = (url, onSuccess, onFailure = (err) => console.error(err)) => {
    tryCatch(async () => {
        onSuccess((await axios.get(url)).data);
    }, onFailure)();
}