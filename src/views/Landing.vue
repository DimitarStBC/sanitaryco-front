<template>
  <div id="landing">
    <div class="left d-flex flex-column justify-content-center">
      <h1>Свежест 42</h1>
      <h2>За да се чувствате у дома или в офиса с влизането в общите части</h2>
      <router-link
        class="link"
        :to="{
          name: 'Prices',
        }"
      >
        <mdb-btn color="deep-purple" class="btnControl">
          Виж цените ни!
        </mdb-btn></router-link
      >
      <SocialMedia />
    </div>
    <div class="right position-relative player-container">
      <video
        plays-inline="playsinline"
        muted
        autoplay="autoplay"
        loop
        id="videoEdit"
      >
        <!-- <source src="../assets/svejest.mp4" type="video/mp4" /> -->
        <source src="../assets/svejest.webm" type="video/webm" />
      </video>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";
import SocialMedia from "../components/SocialMedia";

export default {
  name: "Landing",
  components: {
    mdbBtn,
    SocialMedia,
  },
};
</script>

<style scoped>
#videoEdit {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  bottom: -100px;
  right: -450px;
  z-index: -1;
}
h1 {
  font-size: 4em;
  color: rgb(238, 174, 247);
  text-align: center;
}
h2 {
  color: rgb(210, 166, 252);
  margin: 1em;
}
.btnControl {
  float: right;
  margin: 2em;
}
</style>
