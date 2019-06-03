import axios from 'axios';
import ls from 'local-storage';

console.log(ls.get('accessToken'));

export default axios.create({
    baseURL: 'http://192.168.33.50:3000/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': ls.get('accessToken') || ''
    }
});