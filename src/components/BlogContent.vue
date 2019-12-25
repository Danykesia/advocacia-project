<template>
  <div class="container">
    <div class="news news-container">
      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/consumer.jpeg"/>
        </div>
        <h3>
          <a href="#">Lorem ipsum</a>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus...
        </p>
        <router-link to="/blog">Read more</router-link>
      </div>

      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/labor.jpg" />
        </div>
        <h3>
          <a href="#">Lorem ipsum</a>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus...
        </p>
        <router-link to="/blog">Read more</router-link>
      </div>

      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/family.jpeg" />
        </div>
        <h3>
          <a href="#">Lorem ipsum</a>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus...
        </p>
        <router-link to="/blog">Read more</router-link>
      </div>

      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/consumer.jpeg"/>
        </div>
        <h3>
          <a href="#">Lorem ipsum</a>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus...
        </p>
        <router-link to="/blog">Read more</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.news {
  &-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  &-card {
    width: 300px;
    height: 380px;
    background:#eee;
    border: 1px solid #dad4d4;
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
      text-decoration: underline;
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
    height: auto;
    width: 100%;
    display: block;
  }
}

        @media (min-width: 768px) and (max-width: 991px) {
          .container {
            padding-right: 0;
          }

          .news {
            &-container {
              flex-direction: row;
              flex-wrap: wrap;
              margin-top: 1rem;
            }

            &-card {
              width: 24rem;
              height: 28rem;
            }
          }
        }
        @media (min-width: 992px) and (max-width: 1119px) {
          .container {
            padding-right: 0;
          }

          .news {
            &-container {
              flex-direction: row;
              flex-wrap: wrap;
              // margin-top: 1rem;
              justify-content: flex-start;
            }

            &-card {
              width: 18rem;
              height: 24rem;
              margin-right: 1rem;
            }
          }
        }
        @media (min-width: 1200px) {
          .container {
            padding-right: 0;
          }

          .news {
            &-container {
              flex-direction: row;
              flex-wrap: wrap;
              // margin-top: 1rem;
              justify-content: flex-start;
            }

            &-card {
              width: 17rem;
              height: 23rem;
              margin-right: 1rem;
            }
          }
        }
</style>
