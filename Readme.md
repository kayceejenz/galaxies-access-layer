# GalaxiesAccessLayer

`GalaxiesAccessLayer` is a class designed to simplify interactions with Firebase Firestore. It provides methods for basic CRUD (Create, Read, Update, Delete) operations and advanced queries, making it easy to manage Firestore data.

## Installation

To use `GalaxiesAccessLayer`, you first need to install it via npm or yarn. If it's available on npm, you can install it using the following commands:

Using npm:

```bash
npm install galaxies-access-layer
```

Or using yarn:

```bash
yarn add galaxies-access-layer
```

## Usage

1. **Import and Initialize**

   Import the `GalaxiesAccessLayer` class and initialize it with your Firebase configuration.

   ```js
   import { GalaxiesAccessLayer } from "galaxies-access-layer";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID",
   };

   const accessLayer = new GalaxiesAccessLayer().setConfig(firebaseConfig);
   ```

2. **Add Data**

   Use the `add` method to add a new document to a collection.

   ```js
   const { id } = await accessLayer.add("user", {
     firstname: "john",
     lastname: "doe",
   });
   console.log("Added User ID:", id);
   ```

3. **Get Data**

   Retrieve a document by its ID using the `get` method.

   ```js
   const user = await accessLayer.get("user", id);
   console.log("User Data:", user);
   ```

4. **Update Data**

   Update an existing document with the `update` method.

   ```js
   const updatedUser = await accessLayer.update("user", id, {
     firstname: "mark",
   });
   console.log("Updated User:", updatedUser);
   ```

5. **Delete Data**

   Delete a document using the `delete` method.

   ```js
   const deletedUser = await accessLayer.delete("user", id);
   console.log("Deleted User ID:", deletedUser.id);
   ```

6. **Fetch Data**

   Fetch all documents from a collection with the `fetch` method.

   ```js
   await Promise.all([
     accessLayer.add("user", {
       firstname: "john",
       lastname: "doe",
     }),
     accessLayer.add("user", {
       firstname: "mark",
       lastname: "den",
     }),
   ]);

   const fetchedUsers = await accessLayer.fetch("user");
   console.log("Fetched Users:", fetchedUsers);
   ```

7. **Query Data**

   Perform a basic query using the `query` method.

   ```js
   const queryUser = await accessLayer.query("user", "firstname", "==", "john");
   console.log("Queried Users:", queryUser);
   ```

8. **Advanced Query**

   Execute more complex queries with the `advancedQuery` method.

   ```js
   const advanceQueryUser = await accessLayer.advancedQuery("user", [
     { field: "firstname", operator: "!=", value: "john" },
   ]);
   console.log("Advanced Queried Users:", advanceQueryUser);
   ```

## Configuration

When initializing `GalaxiesAccessLayer`, provide the following Firebase configuration options:

- `apiKey`: Your Firebase API key.
- `authDomain`: Firebase Auth domain.
- `projectId`: Firebase project ID.
- `storageBucket`: Firebase storage bucket.
- `messagingSenderId`: Firebase messaging sender ID.
- `appId`: Firebase app ID.
- `measurementId`: Firebase measurement ID (optional).
