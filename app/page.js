"use client";
import Head from "next/head";
import { useState } from "react"

export default function Home() {
  const [inputValue, setInputValue] = useState();
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('pressed Enter in EVENT::::::::::', event);
    const formData = new FormData(event.target);
    const value = formData.get('query');
    setInputValue(value);
    console.log('VALUE', value);
    //TODO: make API CALL USING VALUE
  }


  return (
    <main className="flex items-center justify-center min-h-screen">
      <Head>
        <title>#Haiku</title>
      </Head>
      <div className="flex flex-col items-center justify-center text-center" suppressHydrationWarning>
        <h1 className="text-9xl font-sans text-black font-extrabold cursor-pointer">
          俳句/
        </h1>
        <div className="mt-4">
          <form 
            className="font-sans text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onSubmit={onSubmit}>
            <input 
              name="query" 
              defaultValue=""
              suppressHydrationWarning>
            </input>
            <button type="submit">Create Haiku</button>
          </form>
        </div>
      </div>
    </main>
  );
}