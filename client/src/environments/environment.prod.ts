// src/environments/environment.prod.ts
export const environment = {
  appName: "version-one",
  production: true,
  server: {
    self: {
      HOST: "https://example.com",
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
