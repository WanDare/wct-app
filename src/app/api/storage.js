"use client";
import { useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARSvcS2Bfkp7Gj9hEqSXaUj8QaZREOoQ8",
  authDomain: "next-firebase-10bc3.firebaseapp.com",
  projectId: "next-firebase-10bc3",
  storageBucket: "next-firebase-10bc3.appspot.com",
  messagingSenderId: "712292943588",
  appId: "1:712292943588:web:dd849cc6f163c410f40ef1",
  measurementId: "G-GVSVLLXDZ1",
};

const FileDownloadComponent = () => {
  const [filePublicURL, setFilePublicURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const file = window.location.pathname;

      if (file && typeof file === "string") {
        try {
          const app = initializeApp(firebaseConfig);
          const storage = getStorage(app);
          const fileRef = ref(storage, file);
          const url = await getDownloadURL(fileRef);

          setFilePublicURL(url);
        } catch (e) {
          const tmp = e.message || e.toString();
          console.error(tmp);
          setError(tmp);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : filePublicURL ? (
        <div>File URL: {filePublicURL}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FileDownloadComponent;
