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
          <h1 className="text-4xl font-semibold">Create an Event</h1>
        </div>
        <div className="py-4">
          <p className="pb-4">Event Name:</p>
          <input
            className="border-black"
            placeholder="University Week"
            value={ eventName }
            onChange={ (e) => setEventName(e.target.value) }
          />
        </div>
        <div className="py-4">
          <p className="pb-4">Description:</p>
          <textarea
            className="border-black"
            placeholder="Enter details here..."
            value={ details }
            onChange={ (e) => setDetails(e.target.value) }/>
        </div>
        <button className="bg-blue-400 h-10 w-24" type="submit">Submit</button>
      </form>
    </div>
  )
}