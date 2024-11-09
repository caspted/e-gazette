import { addDoc, collection } from "firebase/firestore";
import { fireStore } from "@/firebase/initializeFirebase";

export default async function uploadDocument(
  collectionName: string,
  data: object
): Promise<string> {
  
  const collectionRef = collection(fireStore, collectionName)

  return addDoc(collectionRef, data)
          .then((docRef) => {
          console.log("Document is written with ID: ", docRef.id)
          return docRef.id
          })
          .catch((error) => {
          console.error("Error adding document: ", error)
          throw error
          })
}
