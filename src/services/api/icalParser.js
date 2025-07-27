import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';


export async function parseAssignments(url) {
    try {
        const serverUrl = import.meta.env.VITE_APP_SERVER_URL;
        const response = await axios.post(`${serverUrl}/cal/parse-assignments`,
            { url: url }, 
            { withCredentials: true });

        if(response.status !== 200) {
            throw new Error(`Failed to parse assignments: ${response.statusText}`);
        }
        const courses = response.data.courses;
        const assignments = response.data.assignments;

        const authStore = useAuthStore();
        authStore.setCourseMap(courses);
        authStore.setAssignments(assignments);
    }
    catch(error){
        console.error('Error parsing assignments', error);
        throw new Error(`Error parsing assignments: ${error.message}`);
    }
};