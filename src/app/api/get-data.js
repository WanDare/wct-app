import { db } from "../firebaseConfig";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";

export async function fetchUserData() {
  const querySnapshot = await getDocs(collection(db, "users"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

// export async function fetchEventData() {
//   const querySnapshot = await getDocs(collection(db, "feature_detail"));

//   const data = [];
//   querySnapshot.forEach((doc) => {
//     data.push({ id: doc.id, ...doc.data() });
//   });
//   return data;
// }

export const fetchEventData = async () => {
  try {
    const event1DocRef = doc(db, "feature_detail", "event1");
    const event1DocSnapshot = await getDoc(event1DocRef);

    const event1Data = {
      id: event1DocSnapshot.id,
      ...event1DocSnapshot.data(),
    };

    return event1Data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

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
