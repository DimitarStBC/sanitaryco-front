<template>
  <div class="d-flex">
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
    <div class="right wrapper">
      <!-- item -->
      <div class="item">
        <div class="heading">
          <h3>BASIC</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="features">
          <h4>
            <span class="feature">Full Support</span> :
            <span class="value">No</span>
          </h4>
          <h4>
            <span class="feature">Duration</span> :
            <span class="value">30 Days</span>
          </h4>
          <h4>
            <span class="feature">Storage</span> :
            <span class="value">10GB</span>
          </h4>
        </div>
        <div class="price">
          <h4>$25</h4>
        </div>
        <button class="btn btn-block btn-outline-primary" type="submit">
          BUY NOW
        </button>
      </div>
      <!-- end of item -->

      <!-- item -->
      <div class="item">
        <div class="ribbon">Препоръчано</div>
        <div class="heading">
          <h3>PRO</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="features">
          <h4>
            <span class="feature">Full Support</span> :
            <span class="value">Yes</span>
          </h4>
          <h4>
            <span class="feature">Duration</span> :
            <span class="value">60 Days</span>
          </h4>
          <h4>
            <span class="feature">Storage</span> :
            <span class="value">50GB</span>
          </h4>
        </div>
        <div class="price">
          <h4>$50</h4>
        </div>
        <button class="btn btn-block btn-primary" type="submit">BUY NOW</button>
      </div>
      <!-- end of item -->

      <!-- item -->
      <div class="item">
        <div class="heading">
          <h3>BASIC</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="features">
          <h4>
            <span class="feature">Full Support</span> :
            <span class="value">No</span>
          </h4>
          <h4>
            <span class="feature">Duration</span> :
            <span class="value">30 Days</span>
          </h4>
          <h4>
            <span class="feature">Storage</span> :
            <span class="value">10GB</span>
          </h4>
        </div>
        <div class="price">
          <h4>$25</h4>
        </div>
        <button class="btn btn-block btn-outline-primary" type="submit">
          BUY NOW
        </button>
      </div>
      <!-- end of item -->
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
.right {
  height: 100vh;
  width: 60%;
  overflow-y: auto;
  position: relative;
  margin: auto;
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

.item {
  width: 400px;
  margin: 80px auto;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
  border-top: 2px solid #5ea4f3;
  padding: 30px;
  overflow: hidden;
  position: relative;
}
.item button {
  font-weight: 600;
}
.ribbon {
  width: 160px;
  height: 32px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  box-shadow: 0px 2px 3px rgba(136, 136, 136, 0.25);
  background: #4dbe3b;
  transform: rotate(45deg);
  position: absolute;
  right: -42px;
  top: 20px;
  padding-top: 7px;
}
.features h4 {
  text-align: center;
  font-size: 18px;
  padding: 5px;
}
.item p {
  text-align: center;
  margin-top: 20px;
  opacity: 0.7;
}
.price h4 {
  margin: 15px 0;
  font-size: 45px;
  text-align: center;
  color: #2288f9;
}

.buy-now button {
  text-align: center;
  margin: auto;
  font-weight: 600;
  padding: 9px 0;
}
</style>