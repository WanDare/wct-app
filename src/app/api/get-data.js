import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export async function fetchUserData() {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function fetchEventData() {
  const querySnapshot = await getDocs(collection(db, "feature_detail"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function fetchMostlikeData() {
  const querySnapshot = await getDocs(collection(db, "mostlike_detail"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function fetchRecentData() {
  const querySnapshot = await getDocs(collection(db, "recent_detail"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}