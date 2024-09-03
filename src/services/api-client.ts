import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '94363d412d9b49518a997a03344c0b53',
    }
})