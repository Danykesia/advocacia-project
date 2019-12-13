<template>
  <section class="welcome">
    <div class="container">
      <h1>Welcome to our law firm</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odio deserunt, quaerat repellendus magni commodi et, voluptatem
        veniam quia aliquid nesciunt totam harum eius deleniti sapiente
        labore quod necessitatibus voluptatum unde.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
  padding-top: 2rem;
  padding-bottom: 1rem;
  background: #201919;

  & h1 {
    text-align: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #ddb16e;
  }

  & p {
    padding-bottom: 1rem;
    margin-top: 1rem;
    color: #ccc;
    font-size: 1.1rem;
    text-align: center;
  }
}

        @media (min-width: 640px) and (max-width: 1199px) {
          .welcome {
            & h1 {
              font-size: 2.2rem;
            }

            & p {
              font-size: 1rem;
            }
          }
        }
        @media (min-width: 1200px) {
          .welcome {
            & h1 {
              font-size: 3rem;
            }

            & p {
              font-size: 1.2rem;
            }
          }
        }
</style>
