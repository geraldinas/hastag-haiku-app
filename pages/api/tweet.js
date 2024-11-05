// pages/api/tweet.js
import axios from 'axios';
require('dotenv').config();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    const bearerToken = process.env.BEARER_TOKEN;

    if (!bearerToken) {
      return res.status(500).json({ error: 'Bearer token is not set' });
    }

    try {
      console.log(`Fetching user: ${username}`); // Debugging log
      const response = await axios.get(`https://api.twitter.com/2/users/by/username/${username}`, {
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        }
      });

      console.log('User data fetched:', response.data); // Debugging log
      return res.status(200).json({ success: true, user: response.data });
    } catch (error) {
      console.error('Error fetching user:', error.response ? error.response.data : error.message);
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}