// import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";



// export const petDocSchema = {
//   type: "object",
//   properties: {
//     id: generateSchemaProperties("string", "", "67ca35d1e8b1391ada8c86ea"),
//     name: generateSchemaProperties("string", "Nombre", "pepe"),
//     specie: generateSchemaProperties("string", "especie", "gato"),
//     birthDate: generateSchemaProperties("string", "cumpleaño", "01-02-2012"),
//     adopted: generateSchemaProperties("string", "adopcion", "false"),
   
//   },
// };

import { generateSchemaProperties } from "../utils/generatePropertiesSchems.js";

export const petDocSchema = {
  type: "object",
  properties: {
    id: generateSchemaProperties("string", "ID único", "67ca35d1e8b1391ada8c86ea"),
    name: generateSchemaProperties("string", "Nombre", "Pepe"),
    species: generateSchemaProperties("string", "Especie", "Gato"), // Corregido "specie" → "species"
    birthDate: generateSchemaProperties("date", "Fecha de nacimiento", "2012-02-01"), // Cambio a formato adecuado
    adopted: generateSchemaProperties("boolean", "¿Ha sido adoptado?", false), // Cambio de tipo a booleano
  },
};
