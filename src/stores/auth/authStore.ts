import { defineStore } from 'pinia'

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            pageId: '',
            workspaceId: '',
            workspaceName: '',
            userId: '',
            userName: '',
            databaseId: '',
            courses: Array(),
            assignments: Array()
        }
    },
    actions: {
        setPageId(id: string) {
            this.pageId=id;
        },
        setWorkspaceId(id: string) {
            this.workspaceId=id;
        },
        setWorkspaceName(id: string) {
            this.workspaceName=id;
        },
        setUserId(id: string) {
            this.userId=id;
        },
        setUserName(name: string) {
            this.userName=name;
        },
        setDatabaseId(id: string) {
            this.databaseId=id;
        },
        setCourses(courses: Array<string>) {
            this.courses = courses;
        },
        setAssignments(assignments: Array<string>) {
            this.assignments = assignments;
        },
    },
    getters: {
        getPageId(): string {
            return this.pageId;
        },
        getDatabaseId(): string {
            return this.databaseId
        },
        getCourses(): Array<string> {
            return this.courses
        },
        getAssignments(): Array<string> {
            return this.assignments
        },
        isAuthenticated(): boolean {
            return !!this.workspaceId;
        }
    }
})
