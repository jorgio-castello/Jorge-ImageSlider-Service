import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 2200 },
    { duration: '2m', target: 2400 },
    { duration: '2m', target: 2700 },
    { duration: '2m', target: 3000 },
    { duration: '2m', target: 3500 },
    { duration: '2m', target: 4000 },
    { duration: '2m', target: 4500 },
    { duration: '2m', target: 3000 },
    { duration: '2m', target: 1900 },
    { duration: '2m', target: 1200 },
    { duration: '2m', target: 800 },
    { duration: '2m', target: 0 },
  ],
};

export default function() {
  const id = Math.ceil(Math.random() * 10000000);
  http.get(`http://localhost:3004?id=${id}`);
  sleep(.5);
}