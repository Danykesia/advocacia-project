<template>
  <main class="slideshow-container">
    <div class="myslides fade slide1">
      <div class="slide_text-box">
        <h1 class="main_text">Lorem ipsum dolor<br>sit amet consectetur.</h1>
        <hr>
        <router-link to="/lawfirm" class="btn btn-text">Learn more</router-link>
      </div>
    </div>

    <div class="myslides fade slide2">
      <div class="slide_text-box">
        <h1 class="main_text">Lorem ipsum dolor<br>sit amet ipsum.</h1>
        <hr>
        <router-link to="/lawfirm" class="btn btn-text">Learn more</router-link>
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
      const slides = document.getElementsByClassName('myslides');

      if (slides.length > 0) {
        for (let i = 0; i < slides.length; i += 1) {
          slides[i].style.display = 'none';
        }

        this.slideIndex += 1;

        if (this.slideIndex > slides.length) {
          this.slideIndex = 1;
        }

        slides[this.slideIndex - 1].style.display = 'flex';

        setTimeout(this.showSlides, 2000); // Change image every 2 seconds
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slideshow-container {
  background-color: gray;
  position: relative;
  width: 100%;
  height: 80vh;
}

.myslides {
  display: none;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 70px;
}

.slide1 {
  background-image: url('../assets/building-extra-small.jpeg');
}

.slide2 {
  background-image: url('../assets/man-extra-small.jpeg');
}

hr {
  width: 200px;
  border: 1px solid  #ddb16e;
  margin: 1rem auto;
}

.slide_text-box {
  width: 100%;
  text-align: center;
}

.main_text {
  color:#ffffff;
  font-size: 2.2rem;
  padding: 0 1rem;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
}

.btn {
  border: 1px solid  #ddb16e;
  background:  #ddb16e;
  width: 8rem;
  padding: 0.8rem;
  border-radius: 3px;
  display: block;
  margin: 4rem auto;

  &:hover {
    border: 1px solid  #ddb16e;
    background: none;
    color: #ddb16e;
  }

  &-text {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1rem;
    margin-top: 4rem;
  }
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

        @media (min-width: 576px) and (max-width: 767px) {
          .myslides {
            background-size: cover;
          }
        }
        @media (min-width: 768px) and (max-width: 1199px) {
          .slideshow-container {
            height: 80vh;
          }

          .myslides {
            padding-top: 80px;
          }

          .slide1 {
            background-image: url('../assets/building.jpeg');
          }

          .slide2 {
            background-image: url('../assets/man.jpeg');
          }

          .main_text {
            font-size: 3.5rem;
          }
        }
        @media (min-width: 1200px) {
          .slideshow-container {
            height: 100vh;
          }
          .myslides {
            background-attachment: fixed;
            padding-top: 80px;
          }

          .slide1 {
            background-image: url('../assets/building.png');
          }

          .slide2 {
            background-image: url('../assets/man.png');
          }

          .main_text {
            font-size: 3.5rem;
          }
        }
</style>
