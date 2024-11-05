import { useRouter } from 'next/router';
import {syllable} from 'syllable'

export default function Result() {
  const router = useRouter();
  const { query, data } = router.query;

  //use this when I get data from api call
  let parsedData = null;
  try {
    parsedData = data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to parse JSON data:', error);
  }
  const testData = syllable(query); 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-xs md:max-w-md break-words">
      <h1 className="text-2xl font-bold text-black mb-4">#Haiku made from @tweets </h1>
      {query && <p className="text-black">Query: {query}{testData}</p>}
      </div>
    </div>
  );
}