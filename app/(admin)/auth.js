// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// export default getAuth({
//   providers: [
//     Providers.Credentials({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         try {
//           // Sign in with Firebase Authentication
//           const auth = getAuth(firebase);
//           const userCredential = await signInWithEmailAndPassword(
//             auth,
//             credentials.username,
//             credentials.password
//           );

//           // If authentication is successful, check if the email is allowed
//           const user = userCredential.user;
//           const allowedEmail = "aboy@gmail.com";

//           if (user.email === allowedEmail) {
//             // If the email is allowed, return the user data
//             return Promise.resolve({
//               id: user.uid,
//               name: user.displayName,
//               email: user.email,
//             });
//           } else {
//             // If the email is not allowed, return null
//             console.error("Unauthorized email address");
//             return Promise.resolve(null);
//           }
//         } catch (error) {
//           // If authentication fails, return null
//           console.error("Authentication error:", error.message);
//           return Promise.resolve(null);
//         }
//       },
//     }),
//     // Add other providers if needed
//   ],
//   // Add additional configuration as needed
// });
