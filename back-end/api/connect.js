// Javascript assíncrono
// await async
// fulfilled

import { MongoClient } from "mongodb";

const password = "6WdKJKoFGwvIGkUb";

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
