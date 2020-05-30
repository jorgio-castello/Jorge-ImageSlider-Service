import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 300 }, // below normal load
    { duration: '1m', target: 500 },
    { duration: '1m', target: 700 }, // normal load
    { duration: '1m', target: 900 },
    { duration: '1m', target: 1100 }, // around the breaking point
    { duration: '1m', target: 1200 },
    { duration: '1m', target: 1300 }, // beyond the breaking point
    { duration: '1m', target: 1400 },
    { duration: '1m', target: 1000 }, // below normal load
    { duration: '1m', target: 800 }, // around the breaking point
    { duration: '1m', target: 400 },
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  const id = Math.ceil(Math.random() * 10000000);
  http.get(`http://localhost:3004?id=${id}`);
  sleep(.75);
}