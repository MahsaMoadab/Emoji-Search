import { getAxiosInstance } from "./HttpClient";

const access_key = "dbbb2a50ea543452ab7a3479b4a0b4a1d48e3e69";
const configParams = {
    access_key: access_key,
};

const getAllEmoji = () => getAxiosInstance.get("/emojis", { params: configParams });
const getAllCategories = () => getAxiosInstance.get("/categories", { params: configParams });
const getEmojiCategoryList = (option) => getAxiosInstance.get(`/categories/${option}`, { params: configParams });
const getEmojiSearchList = (query) =>  getAxiosInstance.get(`/emojis`, { params: { access_key: access_key, search: query}});

export {
    getAllEmoji,
    getAllCategories,
    getEmojiCategoryList,
    getEmojiSearchList
};