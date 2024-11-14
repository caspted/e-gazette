'use client'
import {useState} from 'react';
import uploadDocument from "@/helper/uploadDocument";

export default function InputEvents() {
  const [eventName, setEventName] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const handleSubmit = async () => {
    try {
      await uploadDocument("Events", {
        event: eventName,
        details: details
      })
      console.log("Successfully uploaded")
    } catch (error) {
      console.error("Failed to upload", error)
    }
  }

  return (
    <div className="py-10 px-5">
      <form onSubmit={ handleSubmit }>
        <div className="py-4">
          <h1 className="text-2xl font-semibold">Create an Event</h1>
        </div>
        <div className="py-2">
          <p className="pb-4 font-medium">Event Name:</p>
          <input
            className="border border-gray-400 h-10 px-2 rounded-md w-full"
            placeholder="University Week"
            value={ eventName }
            onChange={ (e) => setEventName(e.target.value) }
          />
        </div>
        <div className="py-2">
          <p className="pb-4 font-medium">Description:</p>
          <textarea
            className="border border-gray-400 h-36 px-2 py-2 rounded-md w-full"
            placeholder="Enter details here..."
            value={ details }
            onChange={ (e) => setDetails(e.target.value) }/>
        </div>
        <button className="bg-blue-400 h-10 w-24 rounded text-white hover:bg-blue-300 hover:text-black" type="submit">Submit</button>
      </form>
    </div>
  )
}