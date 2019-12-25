<template>
  <div class="container">
    <div class="services-contain">
      <div id="family" class="family">
        <img src="../assets/family.jpeg">
        <div class="text-box">
          <h2>Service one</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque odit aliquid quo
            laborum aperiam veniam facere ipsam nisi corporis praesentium totam, porro, illo
            numquam repellend us, dolorum quia? Minus, provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque odit aliquid quo
            laborum aperiam veniam facere ipsam nisi corporis praesentium totam, porro, illo
            numquam repellend us, dolorum quia? Minus, provident.
          </p>
          <button class="btn btn-text">Learn more</button>
        </div>
      </div>

      <div id="labor" class="labor">
        <img src="../assets/labor.jpg">
        <div class="text-box">
          <h2>Service two</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque odit aliquid quo
            laborum aperiam veniam facere ipsam nisi corporis praesentium totam, porro, illo
            numquam repellend us, dolorum quia? Minus, provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque odit aliquid quo
            laborum aperiam veniam facere ipsam nisi corporis praesentium totam, porro, illo
            numquam repellend us, dolorum quia? Minus, provident.
          </p>
          <button class="btn btn-text">Learn more</button>
        </div>
      </div>

      <div id="consumer" class="consumer">
        <img src="../assets/consumer.jpeg">
        <div class="text-box">
          <h2>Service three</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque odit aliquid quo
            laborum aperiam veniam facere ipsam nisi corporis praesentium totam, porro, illo
            numquam repellend us, dolorum quia? Minus, provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque odit aliquid quo
            laborum aperiam veniam facere ipsam nisi corporis praesentium totam, porro, illo
            numquam repellend us, dolorum quia? Minus, provident.
          </p>
          <button class="btn btn-text">Learn more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

img {
  width: 100%;
  margin: 0 auto;
  display: block;
  margin-top: 1.2rem;
}

h2 {
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: rgb(83, 83, 83);
  font-weight: bold;
  margin: .6rem 0 .5rem 0;
}

p {
  color: rgb(100, 98, 98);
  // line-height: 1rem;
  font-size: 1rem;

  &:not(first-child) {
    margin-bottom: 1rem;
  }
}

.services-contain {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  background: rgb(148, 148, 148);
  border-radius: 3px;
  width: 8rem;
  padding: 0.8rem;
  border: 1px solid transparent;
  margin: 0 auto;
  display: block;
  margin-bottom: 2rem;
  cursor: pointer;

  &:hover {
    border: 1px solid  #ddb16e;
    background: none;
    color: #ddb16e;
  }

  &-text {
    color: white;
    font-size: 1rem;
    font-weight: bold;
  }
}

        @media (min-width: 1024px) {
          img {
            height: 50%;
          }

          h2 {
            font-size: 2.3rem;
          }

          p {
            padding: 0 2rem;
            font-size: 1.2rem;
          }

          .btn {
            margin-top: 2.5rem;
          }

          .family {
            margin-top: 1rem;
            display: flex;

            & img {
              width: 50%;
            }
          }

          .labor {
            margin-top: 1rem;
            display: flex;
            flex-direction: row-reverse;

            & img {
              width: 50%;
            }
          }

          .consumer {
            margin-top: 1rem;
            display: flex;
            margin-bottom: 3rem;

            & img {
              width: 50%;
            }
          }

          .text-box {
            width: 50%;
            margin-top: 1rem;
          }
        }
</style>
