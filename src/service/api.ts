import axios from "axios";

const api = axios.create({
    baseURL: "http://20.206.203.136:3022/api",
});

export const getGuildas = async (guildSize: number) => {
    const response = await api.post("/guildas", {
        guild_size: guildSize,
    });
    return response.data
}



export default api;