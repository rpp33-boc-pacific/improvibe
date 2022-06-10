import axios from 'axios';

export default function Fetcher (url: string){
  return axios.get(url).then(res => res.data);
}