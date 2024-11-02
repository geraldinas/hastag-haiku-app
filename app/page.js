import Image from "next/image";

export default function Home() {
  return (
    <main>
      
      <title>#Haiku</title>
      
      <body>
      <h1>俳句</h1>
      <div class="container">
      <input 
  type="text" 
  placeholder="Enter handle" 
  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
      </div>
      </body>
    </main>
  );
}
