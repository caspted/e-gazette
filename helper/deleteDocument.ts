import { fireStore } from "@/firebase/initializeFirebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function deleteDocument(
  collectionName: string,
  documentId: string
) {
  try {
    const documentRef = doc(fireStore, collectionName, documentId);
    await deleteDoc(documentRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
