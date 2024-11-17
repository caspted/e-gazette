import { firestore } from "@/firebase/initializeFirebase";
import { collection, getDocs} from "firebase/firestore";

export default async function queryAllDocument(collectionName: string) {
  const collectionRef = collection(firestore, collectionName)

  try {
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    return []
  }
}