// Javascript assíncrono
// await async
// fulfilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://yuriblanke:6WdKJKoFGwvIGkUb@cluster0.x7rb8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("projetoSpotify");
