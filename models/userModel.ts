import { userType } from "../types/user";

const users: userType[] = [];
let currentId = 1;

export const User = {
  create: (userData: userType) => {
    try {
      const newUser: userType = {
        id: currentId++,
        username: userData.username,
        email: userData.email,
        password: userData.password,
      };

      users.push(newUser);

      return newUser;
    } catch (error) {
      return new Error('Error creating user');
    }
  },
  findById: (id: number) => {
    return users.find((u) => u.id === id);
  },
  findOne: (where: Partial<userType>) => {
    return users.find((user) => {
      return Object.keys(where).every((key) => user[key as keyof userType] === where[key as keyof userType]);
    });
  },
}
