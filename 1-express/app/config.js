/**
 * Application configuration
 * 
 * @author verbovsky
 */

const MONGODB_HOST = process.env.DEMO_APP_MONGODB_HOST || 'localhost';
const MONGODB_PORT = parseInt(process.env.DEMO_APP_MONGODB_PORT, 10) || 27017;
const MONGODB_DB_NAME = process.env.DEMO_APP_MONGODB_DB_NAME || 'demo-app';
const MONGODB_URL = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB_NAME}`;
const PORT = parseInt(process.env.DEMO_APP_PORT, 10) || 8080;

module.exports = {
    PORT: PORT,
    MONGODB_URL: MONGODB_URL
};

