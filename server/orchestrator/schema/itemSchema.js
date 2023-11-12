import redis from "../config/redis.js";
import { BASE_URL_APP, BASE_URL_USER } from "../config/URL.js";
import axios from "axios";

export const typeDefsItem = `#graphql
  type Item {
    id: ID
    name: String
    description: String
    price: Int
    imgUrl: String
    authorId: String
    categoryId: Int
    createdAt: String
    updatedAt: String
    Category: Category
    Ingredients: [Ingredients]
    User: User
  }

  type Category {
    id: ID
    name: String  
    createdAt: String
    updatedAt: String      
  }

  type Ingredients {
    id: ID
    name: String  
    itemId: Int
    createdAt: String
    updatedAt: String      
  }

  type User {
    _id: ID
    username: String  
    email: String
    role: String  
    phoneNumber: String
    address: String    
  }

  type RespondMessage {
    message: String
  }

  type Query {
    showItems: [Item]
    findItem(id: ID): Item
  }

  input InputBook {
    name: String
    description: String
    price: Int
    imgUrl: String
    authorId: String
    categoryId: Int
    ingredientName1: String
    ingredientName2: String
    ingredientName3: String
  }

  type Mutation {
    createItem(newBook: InputBook): RespondMessage
    deleteItem(id: ID): Item
    updateItem(id: ID): Item
  }
`;

export const resolversItem = {
  Query: {
    showItems: async () => {
      try {
        const itemsCache = await redis.get("items:all");
        if (itemsCache) {
          console.log("Load Cache...");
          const data = JSON.parse(itemsCache);
          // res.status(200).json(data);
          return data;
        } else {
          console.log("Fetching...");
          const { data } = await axios(`${BASE_URL_APP}/user/item`);
          await redis.set("items:all", JSON.stringify(data));
          console.log("Complete Fetching");
          // res.status(200).json(data);
          return data;
        }
      } catch (error) {
        // next(error);
        throw error;
      }
    },

    findItem: async (_, args) => {
      try {
        const { id } = args;
        const itemCache = await redis.get(`items:${id}`);
        if (itemCache) {
          console.log("Load Cache...");
          const data = JSON.parse(itemCache);
          return data;
        } else {
          console.log("Fetching...");
          const { data: item } = await axios.get(
            `${BASE_URL_APP}/user/item/${id}`
          );
          const { data: author } = await axios(
            `${BASE_URL_USER}/user/${item.authorId}`
          );
          item.User = author;
          await redis.set(`items:${id}`, JSON.stringify(item));
          console.log("Complete Fetching");
          return item;
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },

  Mutation: {
    createItem: async (_, args) => {
      try {
        const {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
          ingredientName1,
          ingredientName2,
          ingredientName3,
        } = args.newBook;
        const newUser = await axios.post(`${BASE_URL_APP}/user/item`, {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
          ingredientName1,
          ingredientName2,
          ingredientName3,
        });
        await redis.del("items:all");
        return { message: `Succed Fetch Create Item` };
      } catch (error) {
        throw error;
      }
    },

    deleteItem: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(`${BASE_URL_APP}/user/item/${id}`);
        await redis.del(`items:${id}`);
        return data;
      } catch (error) {
        throw error;
      }
    },

    updateItem: async (_, args) => {
      const { id } = args;
      try {
        const {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
          ingredientName1,
          ingredientName2,
          ingredientName3,
        } = req.body;

        const newUser = await axios.put(`${BASE_URL_APP}/user/item/${id}`, {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
          ingredientName1,
          ingredientName2,
          ingredientName3,
        });
        await redis.del(`items:${id}`);
        return newUser;
      } catch (error) {
        throw error;
      }
    },
  },
};
