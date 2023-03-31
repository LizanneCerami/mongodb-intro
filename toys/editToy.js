import { client, toysCollection } from "../mongoConnect.js";

const editToy = async () => {
  try {
    await client.connect();
    const updatedToy = await toysCollection.findOneAndUpdate(
      { name: "Jenga" },
      {
        $set: {
          name: "Skip It",
          type: "Skipping game",
          description: "put it on your ankle and practice your skipping skills",
        },
      }
    );

    console.log(updatedToy);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

editToy();
