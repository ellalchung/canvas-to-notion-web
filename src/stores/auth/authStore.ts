import { defineStore } from 'pinia'

export const useAuthStore = defineStore("authStore", {
    state: () => {
        return {
            pageId: '',
            workspaceId: '',
            workspaceName: '',
            userId: '',
            userName: ''
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
    },
    getters: {
        getPageId(): string {
            return this.pageId;
        },
        isAuthenticated(): boolean {
            return !!this.workspaceId;
        }
    }
})
