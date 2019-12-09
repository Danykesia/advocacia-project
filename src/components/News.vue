<template>
  <div class="news container">
    <h1>NEWS</h1>

    <div class="news-container">
      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/man.png">
        </div>
       <h3>Lorem ipsum</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus ullam voluptates deserunt obcaecati culpa
          assumenda dolore eos dolorem dolores, accusantium.
        </p>
        <a href="#">Read more</a>
      </div>

      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/building.png">
        </div>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus ullam voluptates deserunt obcaecati culpa
          assumenda dolore eos dolorem dolores, accusantium.
        </p>
        <a href="#">Read more</a>
      </div>

      <div class="news-card">
        <div class="news-picture">
          <img src="../assets/man.png">
        </div>
        <h3>Lorem ipsum</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed, unde
          provident vero officia distinctio minus ullam voluptates deserunt obcaecati culpa
          assumenda dolore eos dolorem dolores, accusantium.
        </p>
        <a href="#">Read more</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news {
  padding-top: 2rem;

  & h1 {
    color: white;
    text-align: center;
    letter-spacing: .1rem;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  &-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  &-card {
    width: 350px;
    height: 480px;
    background: rgb(236, 229, 229);
    border: 1px solid #ffffff;

    & h3 {
      text-transform: uppercase;
      padding: 1rem 1rem .2rem 1rem;
      color: #333131;
      font-size: 1.3rem;
    }

    & p {
      padding: 0 1rem 1rem 1rem;
      color: #616060;
      font-size: 1rem;
    }

    & a {
      margin-left: 1rem;
      color: #e09e3a;

      &:hover {
        color: gray;
        border-bottom: 1px solid gray;
      }
    }
  }

  &-picture img {
    height: 250px;
    width: 100%;
  }
}
</style>
