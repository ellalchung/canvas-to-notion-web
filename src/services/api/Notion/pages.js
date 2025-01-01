import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export async function createPage(assignment) {
    try {
      const response = await axios.post('http://localhost:8000/page/create-page', assignment, {
        withCredentials: true
      });

    } catch (error) {
      console.error('Error creating page:', error);
    }
  }


export async function createDatabase(pageId) {
    try {
        const response = await axios.post('http://localhost:8000/page/create-database', 
            { pageId: pageId }, 
            { withCredentials: true }
        );

        const databaseId = response.data.data.id;

        const authstore = useAuthStore();
        authstore.setDatabaseId(databaseId);

        return databaseId;
    } catch (error) {
        console.error('Error creating database:', error)
    }
}