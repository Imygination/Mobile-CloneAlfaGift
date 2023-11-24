import redis from "../config/redis.js";
import { BASE_URL_USER } from "../config/URL.js";
import axios from "axios";

export const typeDefsUser = `#graphql

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
    showUsers: [User]
    findUser(id: ID): User
  }

  input InputUser {
    username: String  
    email: String
    password: String
    role: String  
    phoneNumber: String
    address: String    
  }

  type Mutation {
    createUser(newUser: InputUser): RespondMessage
    deleteUser(id: ID): RespondMessage
  }
`;

export const resolversUser = {
  Query: {
    showUsers: async () => {
      try {
        const usersCache = await redis.get("users:all");
        if (usersCache) {
          console.log("Load Cache...");
          const data = JSON.parse(usersCache);
          return data;
        } else {
          console.log("Fetching...");
          const { data } = await axios(`${BASE_URL_USER}/user`);
          await redis.set("users:all", JSON.stringify(data));
          console.log("Complete Fetching");
          return data;
        }
      } catch (error) {
        throw error;
      }
    },

    findUser: async (_, args) => {
      try {
        const { id } = args;
        const userCache = await redis.get(`users:${id}`);
        if (userCache) {
          console.log("Load Cache...");
          const data = JSON.parse(userCache);
          return data;
        } else {
          console.log("Fetching...");
          const { data } = await axios(`${BASE_URL_USER}/user/${id}`);
          await redis.set(`users:${id}`, JSON.stringify(data));
          console.log("Complete Fetching");
          return data;
        }
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      try {
        const { username, email, password, role, phoneNumber, address } =
          args.newUser;
        // console.log(username, email, password, role, phoneNumber, address);
        const newUser = await axios.post(`${BASE_URL_USER}/user/register`, {
          username,
          email,
          password,
          role,
          phoneNumber,
          address,
        });
        await redis.del("users:all");
        return { message: `Succed Fetch Register` };
      } catch (error) {
        throw error;
      }
    },

    deleteUser: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(`${BASE_URL_USER}/user/${id}`);
        await redis.del(`users:${id}`);
        await redis.del("users:all");
        console.log(data);
        return { message: `Succed Delete User` }
      } catch (error) {
        throw error;
      }
    },
  },
};
