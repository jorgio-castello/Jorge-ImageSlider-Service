import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 100 }, // below normal load
    { duration: '30s', target: 300 },
    { duration: '30s', target: 400 }, // normal load
    { duration: '30s', target: 500 },
    { duration: '30s', target: 800 }, // around the breaking point
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 1100 }, // beyond the breaking point
    { duration: '30s', target: 900 },
    { duration: '30s', target: 700 }, // below normal load
    { duration: '30s', target: 500 }, // around the breaking point
    { duration: '30s', target: 300 },
    { duration: '30s' target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  const id = Math.ceil(Math.random() * 10000000);
  http.get(`http://34.209.213.182:3004?id=${id}`);
  sleep(1);
}
