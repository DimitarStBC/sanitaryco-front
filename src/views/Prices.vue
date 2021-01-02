<template>
  <div>
    <div class="left d-flex flex-column justify-content-center">
      <h1>Цени</h1>
      <h2>Направете допълнително запитване</h2>
      <router-link
        class="link"
        :to="{
          name: 'Contact',
        }"
      >
        <mdb-btn color="deep-purple" class="btnControl">
          Контакти
        </mdb-btn></router-link
      >
      <SocialMedia />
    </div>
  </div>
</template>

<script>
import SocialMedia from "../components/SocialMedia";
import { mdbBtn } from "mdbvue";

export default {
  name: "Prices",
  components: {
    SocialMedia,
    mdbBtn,
  },
};
</script>

<style scoped>
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