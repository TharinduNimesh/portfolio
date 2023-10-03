<template>
  <div class="cursor-default duration-300" :class="{
    'bg-black': isDark,
    'bg-white': !isDark,
  }">
    <loading-screen :is-dark="isDark" :is-loading="isLoading" />
    <home-header :is-dark="isDark" :show-background="headerBackground" />
    <main class="bg-repeat-y lg:bg-contain duration-300" :style="`background-image: url(/img/bg-${theme}.png);`">
      <home-page :is-dark="isDark" />
    </main>

    <toggle-theme :is-dark="isDark" @changeTheme="setTheme" />
  </div>
</template>

<script setup>
useHead({
  title: 'Tharindu Nimesh | Web Developer',
  meta: [
    {
      name: 'keywords',
      content: 'Tharindu, Nimesh, Tharindu Nimesh, Web Developer, Software Engineer, Sri Lanka, Tharindu Nimesh Dewinda, Dewinda, Sri Dharmaloka'
    },
    {
      name: 'description',
      content: 'Tharindu Nimesh is a passionate software engineering student at the Java Institute For Advanced Technology (JIAT) based in Sri Lanka'
    }
  ]
});
</script>

<script>
const Images = [
  '/img/man.png',
  '/img/hero-dark.jpg',
  '/img/hero-light.jpg',
  '/img/logo.png',
  '/img/dark-theme.png',
  '/img/light-theme.png',
  '/img/T.png',
  '/img/bg-dark.png',
  '/img/bg-light.png',
];

export default {
  name: "App",
  data() {
    return {
      isDark: false,
      isLoading: true,
      headerBackground: false,
      images: Images,
    };
  },
  beforeMount() {
    const theme = localStorage.getItem("theme");
    this.isDark = theme === "dark" ? true : false;

    this.images.forEach(img => {
      const image = new Image();
      image.src = img;

      console.log(`${img} loaded`)
    });
  },
  mounted() {
    this.isLoading = false;
    window.addEventListener("scroll", this.setHeaderBackground);
  },
  methods: {
    setHeaderBackground(e) {
      this.headerBackground = window.scrollY > 100 ? true : false;
    },
    setTheme() {
      this.isDark = !this.isDark;
      localStorage.setItem("theme", this.isDark ? "dark" : "light");
    },
  },
  computed: {
    theme() {
      return this.isDark ? "dark" : "light";
    },
  },
};
</script>