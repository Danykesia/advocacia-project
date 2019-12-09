<template>
  <main class="slideshow-container">
    <div class="myslides fade slide1">
      <!-- <img src="../assets/building.png"/> -->

      <div class="slide_text-box">
        <h1 class="main_text">Nosso foco é a defesa<br>dos seus interesses</h1>
        <hr>
        <a href="#" class="btn btn-text">Saiba mais</a>
      </div>
    </div>

    <div class="myslides fade slide2">
      <!-- <img src="../assets/man.png"/> -->

      <div class="slide_text-box">
        <h1 class="main_text">Advocacia com ética<br>e transparência</h1>
        <hr>
        <a href="#" class="btn btn-text">Saiba mais</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 0,
    };
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    showSlides() {
      let i;
      const slides = document.getElementsByClassName('myslides');
      // let dots = document.getElementsByClassName('dot');
      for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = 'none';
      }
      this.slideIndex += 1;
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1;
      }
      // for (i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace('active', '');
      // }
      slides[this.slideIndex - 1].style.display = 'block';
      // dots[slideIndex - 1].className += 'active';
      setTimeout(this.showSlides, 2000); // Change image every 2 seconds
    },
  },
};
</script>

<style lang="scss" scoped>
.slide1 {
  background-image: url('../assets/building.png');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.slide2 {
  background-image: url('../assets/man.png');
  background-size: cover;
  width: 100%;
  height: 100%;
}

img {
  vertical-align: middle;
  height: 100vh;
  width: 100%;
  background-attachment: fixed;
}

hr {
  width: 250px;
  border: 1px solid  #ddb16e;
  margin: 1rem auto;
}

.slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;
  height: 100%;
}

.myslides {
  display: none;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.slide_text-box {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.main_text {
  letter-spacing: 0.1rem;
  color:#ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
}

.btn {
  border: 1px solid  #ddb16e;
  background:  #ddb16e;
  width: 9rem;
  padding: 0.8rem;
  border-radius: 3px;
  display: block;
  margin: 0 auto;

  &:hover {
    border: 1px solid  #ddb16e;
    background: none;
  }

  &-text {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 4rem;
  }
}
</style>
