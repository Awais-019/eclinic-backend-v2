module.exports = {
  apps: [
    {
      name: "eclinic-backend",
      exec_mode: "cluster",
      port: 4000,
      instances: "1",
      script: "./dist/index.js",
    },
  ],
};
