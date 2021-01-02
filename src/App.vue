<template>
  <div id="app">
    <navigation-bar />

    <router-view> </router-view>
  </div>
</template>

<script>
import navigationBar from "./components/navigationBar.vue";
export default {
  components: { navigationBar },
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Comfortaa", cursive;
}
#app {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.left {
  background: linear-gradient(to right, #9807bd, #b125b1);
  width: 40%;
  height: 100vh;
  z-index: 5;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 1;
} */
</style>
