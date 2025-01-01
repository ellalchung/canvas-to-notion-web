import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export async function getUserName() {
    // unused right now
    try {
      const response = await axios.get('http://localhost:8000/user/name', {
        withCredentials: true
      });

      const authStore = useAuthStore();
      authStore.setUserName(response.data)
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  }