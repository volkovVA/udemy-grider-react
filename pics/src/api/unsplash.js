import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID PRxmkRc5GcHwcEjV__C1BttcUZLmu8GBAJh_oZeST_E',
  },
});
