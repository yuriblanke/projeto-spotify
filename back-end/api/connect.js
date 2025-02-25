// Javascript assíncrono
// await async
// fulfilled

import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const password = process.env.PASSWORD;

const URI = `mongodb+srv://yuriblanke:${password}@cluster0.x7rb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Conectado ao MongoDB!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
  }
}

// Chama a conexão ao iniciar
connectDB();

export const db = client.db("projetoSpotify");
