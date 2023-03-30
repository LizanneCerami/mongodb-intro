import dotenv from "dotenv";

dotenv.config();
const MONGOURI = process.env.MONGOURI;

import { MongoClient } from "mongodb";

// create instance of Mongo
export const client = new MongoClient(MONGOURI); // use the URI path from above

// connect to db - or create if there is none
const database = client.db("products");

// connect to collection - or create if none
export const fruitsCollection = database.collection("fruits");
export const toysCollection = database.collection('toys');

