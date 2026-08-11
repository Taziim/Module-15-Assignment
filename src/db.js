const dbPassword = process.env.DB_PASSWORD;
const apiKey = process.env.API_KEY;

if (!dbPassword || !apiKey) {
  console.error('Missing required environment variables');
  process.exit(1);
}

module.exports = { dbPassword, apiKey };