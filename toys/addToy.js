import { client, toysCollection } from "../mongoConnect.js";

client.connect()

const addToy = async () => {
  // get collection

  const myToy = {
    name: 'Optimus Prime',
    type: 'Transformer',
    cool: true,
    price: 40,
    description: 'Lead Autobot, awesome guy',
  }

  const addedToy = await toysCollection.insertOne(myToy)
  console.log(addedToy)
}

addToy()