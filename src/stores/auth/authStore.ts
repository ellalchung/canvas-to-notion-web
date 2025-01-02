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
            courses: new Map(),
            assignments: new Array(),
            startDate: new Date()
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
        setCourses(courses: Map<number,string>) {
            this.courses = courses;
        },
        setAssignments(assignments: Array<string>) {
            this.assignments = assignments;
        },
        setStartDate(date: Date) {
            this.startDate = date;
        }
    },
    getters: {
        getPageId(): string {
            return this.pageId;
        },
        getDatabaseId(): string {
            return this.databaseId;
        },
        getWorkspaceName(): string {
            return this.workspaceName;
        },
        getCourses(): Map<number,string> {
            return this.courses;
        },
        getAssignments(): Array<string> {
            return this.assignments;
        },
        getStartDate(): Date {
            return this.startDate;
        },
        isAuthenticated(): boolean {
            return !!this.workspaceId;
        }
    }
})
