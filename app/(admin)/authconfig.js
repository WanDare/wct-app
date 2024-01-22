// // components/PrivateRoute.js
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { SessionProvider } from "next-auth/react";

// const PrivateRoute = ({ children }) => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   if (!session) {
//     router.replace("/authentication/login");
//     return null;
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;
