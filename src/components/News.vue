<template>
  <section class="news">
    <div class="container">
      <h1>NEWS</h1>

      <div class="news-container">
        <div class="news-card">
          <div class="news-picture">
            <img src="../assets/man.png">
          </div>
        <h3><a href="#">Lorem ipsum</a></h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
            provident vero officia distinctio minus...
          </p>
          <router-link to="/blog">Read more</router-link>
        </div>

        <div class="news-card">
          <div class="news-picture">
            <img src="../assets/building.png">
          </div>
          <h3><a href="#">Lorem ipsum</a></h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
            provident vero officia distinctio minus...
          </p>
          <router-link to="/blog">Read more</router-link>
        </div>

        <div class="news-card">
          <div class="news-picture">
            <img src="../assets/man.png">
          </div>
          <h3><a href="#">Lorem ipsum</a></h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
            provident vero officia distinctio minus...
          </p>
          <router-link to="/blog">Read more</router-link>
        </div>
      </div>
      <div>
          <router-link to="/blog"><button class="btn btn-text">Learn more</button></router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.news {
  padding-top: 1rem;
  background: #333131;
  padding-bottom: 2rem;

  & h1 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 2rem;
  }

  &-card {
    width: 300px;
    height: 380px;
    background: rgb(236, 229, 229);
    border: 1px solid #ffffff;
    position: relative;
    margin-bottom: 1rem;

    & h3 > a {
      text-transform: uppercase;
      padding: 1rem 0 .2rem 1rem;
      display: inline-block;
      color: #333131;
      font-size: 1.3rem;

      &:hover {
        color: gray;
      }
    }

    & p {
      padding: 0 1rem 1rem 1rem;
      color: #616060;
      font-size: 1rem;
    }

    & > a {
      margin-left: 1rem;
      color: #e09e3a;

      &:hover {
        color: gray;
        border-bottom: 1px solid gray;
      }
    }
  }

  &-picture img {
    height: 200px;
    width: 100%;
    display: block;
  }
}

.btn {
  background: none;
  border: 1px solid #ddb16e;
  border-radius: 3px;
  width: 8rem;
  padding: 0.8rem;
  margin: 0 auto;
  display: block;
  cursor: pointer;

  &:hover {
    border: 1px solid  #ddb16e;
    background:  #ddb16e;
    color:white;
  }

  &:active {
    border: 1px solid  #ddb16e;
    background: none;
    color: #ddb16e;
  }

  &-text {
    color: #ddb16e;
    font-size: 1rem;
    font-weight: bold;
  }
}

        @media (min-width: 736px) and (max-width: 811px) {
          .news-container {
            flex-direction: row;
          }
          .news-card {
            width: 230px;
            height: 400px;
          }
        }
        @media (min-width: 812px) and (max-width: 1023px) {
          .news-container {
            flex-direction: row;
          }
          .news-card {
            width: 240px;
            height: 390px;
          }
        }
        @media (min-width: 1024px) and (max-width: 1199px) {
          .news-container {
            flex-direction: row;
          }
        }
        @media (min-width: 1200px) {
           .news-container {
            flex-direction: row;
          }
          .news-card {
            width: 350px;
            height: 410px;
          }
          .news-picture img {
            height: 250px;
            width: 100%;
            display: block;
          }
        }
</style>
