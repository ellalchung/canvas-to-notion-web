import { useAuthStore } from '@/stores/auth/authStore';
import axios from 'axios';


export async function parseAssignments(url) {
    try {
        const response = await axios.post('http://localhost:8000/cal/parse-assignments',
            { url: url }, 
            { withCredentials: true });

        const courses = response.data.courses;
        const assignments = response.data.assignments;

        const authStore = useAuthStore();
        authStore.setCourses(courses);
        authStore.setAssignments(assignments);
    }
    catch(error){
        console.error('Error parsing assignments', error);
    }
};