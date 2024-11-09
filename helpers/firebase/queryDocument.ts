import { fireStore } from "@/firebase/initiazeFirebase";
import { collection, query, where, getDocs } from "firebase/firestore"

export default async function queryDocument(
  collectionName: string,
  fieldName: string,
  searchValue: string
) {
  const collectionRef = collection(fireStore, collectionName)

  const queryParameters = query(
    collectionRef, 
    where(fieldName, "==", searchValue)
  )

  const querySnapshot = await getDocs(queryParameters)

  try {
    const data = querySnapshot.docs.map((doc) => doc.data())
    return data
  } catch (error) {
    console.error("Error fetching data: ", error)
    return []
  }
}