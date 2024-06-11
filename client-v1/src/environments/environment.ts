// src/environments/environment.ts
export const environment = {
  appName: "version-one",
  production: false,
  server: {
    self: {
      HOST: "http://localhost:5001", // Example local backend URL
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
