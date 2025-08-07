<template>
  <v-app>
    <v-main>
      <Header class="header"/>
      <div v-if="isMobile" class="bg mobile-warning">
        <p>This app is best viewed on a desktop. Please use a web browser.</p>
      </div>
      <router-view v-else/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Header from '@/components/Header.vue';

const isMobile = ref(false);

const MOBILE_BREAKPOINT = 500;

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.header {
  margin: 2vh 8vw;
  position: absolute;
  top: 40px;
  z-index: 2;
}

.mobile-warning {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
}

.bg {
    background-image: url('/gradient-background.png');
    background-size: cover;
}
</style>