import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export default async function handler(req, res) {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
