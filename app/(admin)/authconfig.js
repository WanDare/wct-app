"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/auth";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const { user, loading } = useAuth(); // Implement this hook to get authentication status

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/authentication/login"); // Redirect to login if not authenticated
      }
    }, [loading, user, router]);

    if (loading) {
      // You can render a loading indicator here
      return (
        <span className="flex justify-center loading loading-spinner text-warning"></span>
      );
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    // If not authenticated, you can redirect to login page or show a message
    return (
      <span className="flex justify-center loading loading-spinner text-warning"></span>
    );
  };
};

export default withAuth;
