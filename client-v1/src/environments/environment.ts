// src/environments/environment.ts
export const environment = {
  appName: "version-one",
  production: false,
  HOST: "http://127.0.0.1:5001/", // Example local backend URL
  getUrl() {
    return `${this.HOST}`;
  },
};
