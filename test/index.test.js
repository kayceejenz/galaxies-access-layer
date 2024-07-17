import { GalaxiesAccessLayer } from "../src/index.js";

const firebaseConfig = {
  apiKey: "AIzaSyDi_B711ecdK6lVePPhQonzyw9bSzSGVco",
  authDomain: "mez-gpt.firebaseapp.com",
  projectId: "mez-gpt",
  storageBucket: "mez-gpt.appspot.com",
  messagingSenderId: "352440938792",
  appId: "1:352440938792:web:4146b681e52fc9e67ce01d",
  measurementId: "G-E4DFE1E57Y",
};
const accessLayer = new GalaxiesAccessLayer().setConfig(firebaseConfig);
const { id } = await accessLayer.add("user", {
  firstname: "kaycee",
  lastname: "jenz",
});
console.log(id);

const user = await accessLayer.get("user", id);
console.log(user);

const updatedUser = await accessLayer.update("user", id, {
  firstname: "precious",
});
console.log(updatedUser);

const deletedUser = await accessLayer.delete("user", id);
console.log(deletedUser);

await Promise.all([
  accessLayer.add("user", {
    firstname: "kaycee",
    lastname: "jenz",
  }),
  accessLayer.add("user", {
    firstname: "agba",
    lastname: "jenz",
  }),
]);

const fetchedUsers = await accessLayer.fetch("user");
console.log(fetchedUsers);

const queryUser = await accessLayer.query("user", "firstname", "==", "kaycee");
console.log(queryUser);

const advanceQueryUser = await accessLayer.advancedQuery("user", [
  { field: "firstname", operator: "!=", value: "kaycee" },
]);
console.log(advanceQueryUser);
