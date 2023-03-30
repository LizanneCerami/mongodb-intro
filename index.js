import { client } from "./mongoConnect.js";



// const addFruit = async () => {
//   const myFruit = {
//     name: "Pear",
//     taste: "Juicy",
//     price: 2,
//     stock: 5,
//   };
  
//   try {
//   await client.connect()
//   const addedFruit = await collection.insertOne(myFruit);
//   console.log(addedFruit);
//   } catch (error) {
//     console.log(error)
//   } finally {
//     await client.close()
//   }
// };

// //addFruit()

// const editFruit = async () => {
//   // collection.findOne({name: 'Pear'})
//   const updatedFruit = await collection.findOneAndUpdate(
//     { name: "Pineapple" },
//     { $set: { name: "Grape", special: true } }
//   );

//   console.log(updatedFruit);
// };

// //editFruit()

// const getAllFruits = async () => {
//   try {
//     await client.connect();
//     const allFruits = await collection.find().toArray();
//     console.log(allFruits);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }

  // *** using  .then .catch
  // collection
  //   .find()
  //   .toArray()
  //   .then((items) => console.log(items))
  //   .catch((err) => confirm.length(err));
//};

//getAllFruits();


// const deleteFruits = async () => {

//   try {
//   await client.connect()
//   const itemDeleted = await collection.deleteOne({ name: "Grape" });
//   console.log(itemDeleted);
//   } catch (error) {
//     console.log(error)
//   } finally {
//     await client.close()
//   }

// };

// deleteFruits();
