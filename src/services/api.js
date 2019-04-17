import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/users/ElderGr'
});

// https://api.github.com/users/ElderGr