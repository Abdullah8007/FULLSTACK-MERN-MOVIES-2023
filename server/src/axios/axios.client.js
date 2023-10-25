import axios from "axios"

const get = async (url) => {
    const response = await axios.get(url, {
        headers: {
            Accept: "application/json",
            "Accept-Encoding": "identify"
        }
    });
    return response.data;
};

export default { get };