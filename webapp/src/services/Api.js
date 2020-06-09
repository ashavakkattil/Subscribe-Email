import axios from 'axios'

//Connecting the front-end and the back-end

export default () => {
    return axios.create({
        baseURL: `http://localhost:3000`
    });
}