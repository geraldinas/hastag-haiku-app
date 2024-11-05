// app/pages/api/test-env.js
// g0g1g0g1
export default function handler(req, res) {
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;
  
    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: 'Environment variables are not set' });
    }
  
    console.log('API_KEY:', apiKey);
    console.log('API_SECRET:', apiSecret);
  
    res.status(200).json({ apiKey, apiSecret });
  }