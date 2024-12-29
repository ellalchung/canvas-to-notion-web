import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export async function createPage() {
    try {
      const response = await axios.post('http://localhost:8000/page/create-page', {
        withCredentials: true
      });

      console.log('Page created:', response.data)
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  }