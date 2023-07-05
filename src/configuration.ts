import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
export const PINECONE_ENVIRONMENT = process.env.PINECONE_ENVIRONMENT;
