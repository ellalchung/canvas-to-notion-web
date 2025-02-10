import axios from 'axios';


export async function notionSearch(searchTerm) {
    try {
        const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
        const response = await axios.post(`${serverUrl}/page/search`, 
            { searchTerms: searchTerm }, 
            { withCredentials: true }
        );

        return response;
    } catch (error) {
        console.error('Error searching database:', error)
    }
}