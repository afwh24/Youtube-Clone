import axios from 'axios';

const baseURL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    url: baseURL,
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    //destructure the response and retrieve the ".data" portion
    const { data } = await axios.get(`${baseURL}/${url}`, options);

    return data;
}