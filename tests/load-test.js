import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "10s", target: 50 },
    { duration: "30s", target: 50 },
    { duration: "10s", target: 0 }
  ],

  thresholds: {
    http_req_failed: ["rate<0.05"],
    http_req_duration: ["p(95)<1000"]
  }
};

export default function () {
  const response = http.get("http://localhost:3000/health");

  check(response, {
    "status is 200": (r) => r.status === 200,
    "response contains healthy": (r) =>
      r.body.includes("healthy")
  });

  sleep(1);
}