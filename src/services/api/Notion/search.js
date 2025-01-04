import axios from 'axios';


export async function notionSearch(searchTerm) {
    try {
        const response = await axios.post('http://localhost:8000/page/search', 
            { searchTerms: searchTerm }, 
            { withCredentials: true }
        );

        return response;
    } catch (error) {
        console.error('Error searching database:', error)
    }
}