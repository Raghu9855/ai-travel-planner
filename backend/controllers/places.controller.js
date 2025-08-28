import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://places-api.foursquare.com/places/search';

export const getAllPlaces = async (req, res) => {
    try {
        const { lat, lon, query, limit = 10 } = req.query;

        if (!lat || !lon || !query) {
            return res.status(400).json({ error: 'lat, lon, and query parameters are required' });
        }

        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${process.env.FSQ_API_KEY}`,
                'X-Places-Api-Version': '2025-06-17',
                'Accept': 'application/json'
            },
            params: {
                ll: `${lat},${lon}`,
                query: query.trim(),
                limit: parseInt(limit),
            },
        });

        // Return only the results array for cleaner output
        res.status(200).json(response.data.results);
    } catch (error) {
        console.error('Error fetching places:', error.response?.data || error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
