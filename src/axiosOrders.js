import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-builder-8d741.firebaseio.com/"
});

export default instance;