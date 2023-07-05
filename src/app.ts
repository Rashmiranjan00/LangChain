import { PineconeClient } from "@pinecone-database/pinecone";
import { PINECONE_API_KEY, PINECONE_ENVIRONMENT } from "./configuration.js";
import { DirectoryLoader, TextLoader } from "langchain/document_loaders";

// Setup DirectoryLoader to load documents from the ./documents directory
const loader = new DirectoryLoader("./documents", {
  ".txt": (path) => new TextLoader(path),
});
const docs = await loader.load();

// Setup variables for the filename, question and index settings
const question = "How to make dixie biscuit?";
const indexName = "langchain-pinecone-index";
const vectorDimension = 1536;

// // Initialize Pinecone client API key and environment
// const client = new PineconeClient();
// await client.init({
//   apiKey: PINECONE_API_KEY || "",
//   environment: PINECONE_ENVIRONMENT || "",
// })(
//   // Run the main async function
//   async () => {
//     // Check if Pinecone index exists and create if necessary
//     await createPineconeIndex(client, indexName, vectorDimension);
//     // Update Pinecone vector store with document embeddings
//     await updatePinecone(client, indexName, docs);
//     // Query Pinecone Vector store and GPT model for an answer
//     await queryPineconeVectorStoreAndQueryLLM(client, indexName, question);
//   }
// )();
