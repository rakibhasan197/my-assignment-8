import dns from "node:dns";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (process.env.NODE_ENV !== "production") {
  dns.setServers([process.env.MONGODB_DNS_SERVER ?? "192.168.0.1"]);
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not configured");
}

const globalForMongo = globalThis;

const client =
  globalForMongo.mongoClient ?? new MongoClient(process.env.MONGODB_URI);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

const db = client.db("bookNest");
const authBaseURL = process.env.BETTER_AUTH_URL ?? "http://localhost:3000";
const authHost = new URL(authBaseURL).host;

export const auth = betterAuth({
  baseURL: {
    allowedHosts: [
      "localhost:3000",
      "127.0.0.1:3000",
      "*.vercel.app",
      authHost,
    ],
    fallback: authBaseURL,
  },
  database: mongodbAdapter(db, {

    client
  }),
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
       clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }
  } 
});
