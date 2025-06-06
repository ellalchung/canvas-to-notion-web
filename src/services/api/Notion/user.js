import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';

export async function getUserName() {
    // unused right now
    try {
      const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
      const response = await axios.get(`${serverUrl}/user/name`, {
        withCredentials: true
      });

      const authStore = useAuthStore();
      authStore.setUserName(response.data)
    } catch (error) {
      console.error('Error fetching user name:', error);
    }
  }