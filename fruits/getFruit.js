import { client, fruitsCollection } from "../mongoConnect.js";

client.connect()

const getAllFruits = async () => {
  try {
    await client.connect();
    const allFruits = await fruitsCollection.find().toArray();
    console.log(allFruits);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

  // *** using  .then .catch
  // collection
  //   .find()
  //   .toArray()
  //   .then((items) => console.log(items))
  //   .catch((err) => confirm.length(err));
};

getAllFruits();