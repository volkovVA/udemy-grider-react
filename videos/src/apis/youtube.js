import axios from 'axios';
const KEY = 'AIzaSyCncmSVnev_wXQOxuKxQUyFwgVtolHBf8A';

export default axios.create({
  params: {
    // q: term,
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
