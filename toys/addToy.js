import { client, toysCollection } from "../mongoConnect.js";

client.connect()

const addToy = async () => {
  // get collection

  const myToy = {
    name: 'Phase 10',
    type: 'Card game',
    cool: true,
    price: 10,
    description: "a strategic card game, similar to rummyg"
  }

  const addedToy = await toysCollection.insertOne(myToy)
  console.log(addedToy)
}

addToy()