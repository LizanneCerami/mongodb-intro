import {client, fruitsCollection} from "../mongoConnect.js";

const deleteFruits = async () => {

  try {
  await client.connect()
  const itemDeleted = await fruitsCollection.deleteOne({ name: "Grape" });
  console.log(itemDeleted);
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }

};

deleteFruits();