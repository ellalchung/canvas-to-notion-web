<template>
    <div>
      <h1>Authenticating...</h1>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    async mounted() {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get('code'); // Get authorization code from URL
      console.log(code)
  
      if (code) {
        try {
          const tokenResponse = await axios.post('https://api.notion.com/v1/oauth/token', {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: 'http://localhost:3000/callback',
          }, {
            headers: {
              Authorization: `Basic ${btoa(import.meta.env.VITE_APP_CLIENT_ID_SECRET)}`,
              'Content-Type': 'application/json',
            },
          });
  
          const accessToken = tokenResponse.data.access_token;
          console.log('Access Token:', accessToken);
  
          // Save access token (localStorage, Vuex, Pinia, etc.)
          localStorage.setItem('notionAccessToken', accessToken);
  
          // Redirect to the main app or dashboard
          this.$router.push('/start');
        } catch (error) {
          console.error('Error during token exchange:', error);
        }
      }
    },
  };
  </script>
  