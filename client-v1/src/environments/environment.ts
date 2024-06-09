export const environment = {
  server: {
    HOST: "http://localhost:5001",
    getUrl() {
      return `${this.HOST}`;
    },
  },
};
