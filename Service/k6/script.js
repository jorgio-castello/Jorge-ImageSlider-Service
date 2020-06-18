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
    { duration: '30s', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  const id = Math.floor(Math.random() * (10000000 - 9900000 + 1) + 9900000);
  http.get(`http://127.0.0.1:3004/properties/${id}/similarHomes`);
  sleep(1);
}
