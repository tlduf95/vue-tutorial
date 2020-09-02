import axios from 'axios';

const config = {
    url: 'https://api.hnpwa.com/v0/'
};

function fetchNewsList() {
    return axios.get(`${url}news/1.json`);
}



function fetchJobsList() {
    return axios.get(`${url}jobs/1.json`)
}