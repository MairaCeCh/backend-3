// import mongoose from "mongoose";

// const petSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   specie: {
//     type: String,
//     required: true,
//   },
//   birthDate: Date,
//   adopted: {
//     type: Boolean,
//     default: false,
//   },
//   image: String,
//   owner: {
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: "users",
//   },
// });

// export const petModel = mongoose.model("pets", petSchema);

import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: { // Cambio de "specie" → "species"
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  adopted: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
  },
});

export const petModel = mongoose.model("pets", petSchema);