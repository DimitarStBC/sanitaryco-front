<template>
  <div id="bar" class="d-flex w-100 justify-content-end align-items-center">
    <div class="logo"></div>
    <div class="menu">
      <ul class="d-flex justify-content-around">
        <li>
          <router-link
            class="link"
            :to="{
              name: 'Home',
            }"
          >
            Начало
          </router-link>
        </li>

        <li>
          <router-link
            class="link"
            :to="{
              name: 'About',
            }"
          >
            За нас
          </router-link>
        </li>

        <li>
          <router-link
            class="link"
            :to="{
              name: 'Prices',
            }"
          >
            Цени
          </router-link>
        </li>

        <li>
          <router-link
            class="link"
            :to="{
              name: 'Contact',
            }"
          >
            Контакти
          </router-link>
        </li>

        <li>
          <router-link
            class="link"
            :to="{
              name: 'Blog',
            }"
          >
            Блог
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#bar {
  padding: 10px 0;
  position: fixed;
}
/* .logo {
  width: 250px;
  height: 60px;
  background-image: url("../assets/logo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
} */
.menu {
  width: 40%;
}
.menu ul li {
  list-style-type: none;
}
.menu ul li a {
  /* color: rgb(147, 37, 211); */
  color: rgb(41, 41, 41);
  font-weight: 500;
}
</style>