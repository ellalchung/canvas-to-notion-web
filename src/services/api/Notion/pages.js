import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export async function createPage() {
    try {
      const response = await axios.post('http://localhost:8000/page/create-page', {}, {
        withCredentials: true
      });

      console.log('Page created:', response.data)
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

        console.log('Database created:', response.data)

        const databaseId = response.data.id;

        const authstore = useAuthStore();
        authstore.setDatabaseId(databaseId)

    } catch (error) {
        console.error('Error creating database:', error)
    }
}