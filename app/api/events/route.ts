import { NextResponse } from "next/server";
import { fireStore } from "@/firebase/initializeFirebase";
import { collection, getDocs } from "firebase/firestore"

export default async function GET() {
  try {
    const query = await getDocs(collection(fireStore, "Events"))
    const events = query.docs.map((doc) => doc.data())

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error"
    return NextResponse.json(errorMessage, { status: 500 })
  }
}
