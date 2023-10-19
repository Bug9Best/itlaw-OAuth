// import { signAccessToken } from "../utils/jwt.js";
// const prisma = new PrismaClient();
// import { PrismaClient, Prisma } from "@prisma/client";
// import createHttpError from "http-errors";


// export const createUser = async (username, password, email, fullname, generation, degree, role) => {
//   console.log(username, password, email, fullname, generation, degree, role);
//   const findUsername = await prisma.user.findUnique({
//     where: { username: username },
//   });

//   if (findUsername) {
//     const token = signAccessToken(findUsername);
//     return { user: { ...findUsername }, token: token };
//   }

//   const newUser = await prisma.user.create({
//     data: {
//       username: username,
//       password: password,
//       email: email,
//       fullname: fullname,
//       generation: generation,
//       degree: degree,
//       role: role,
//     }
//   })
//   const token = signAccessToken(findUsername);
//   return { user: { ...newUser }, token: token };
// };

// export const loginWithCredentials = async (username, password) => {
//   // find username
//   const findUsername = await prisma.user.findUnique({
//     where: { username: username },
//   });

//   if (!findUsername) {
//     throw createHttpError.Unauthorized("this username not found");
//   }

//   findUsername.password = undefined;
//   // convert to jwt
//   const token = signAccessToken(findUsername);
//   return { user: { ...findUsername }, token: token };
// };