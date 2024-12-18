/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:JlSoFq5n4VNM@ep-frosty-glade-a5rjwibj.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
    };