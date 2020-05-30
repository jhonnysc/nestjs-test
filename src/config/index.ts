if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const config = {
  database: {
    url: process.env.MONGO_URL,
  },
  app: {
    port: process.env.APP_PORT,
  },
};

export default config;
