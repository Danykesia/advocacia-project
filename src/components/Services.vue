<template>
  <section class="services">
    <div class="container">
      <div class="services-card">
        <div class="icon-box">
          <span class="services-icon" ><font-awesome-icon icon="cube"/></span>
        </div>

        <h2>Service one</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius mauris eu purus
          bland it facilisis. Quisque semper elit tortor, eu facilisis dui pellentesque ac.
          Duis sem mauris, malesuada id tempor non, pretium in leo.
        </p>

        <router-link to="/services" class="btn-text">
          Learn more <font-awesome-icon icon="arrow-right"/>
        </router-link>
      </div>

      <div class="services-card">
        <div class="icon-box">
          <span class="services-icon" ><font-awesome-icon icon="briefcase"/></span>
        </div>

        <h2>Service two</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius mauris eu purus
          bland it facilisis. Quisque semper elit tortor, eu facilisis dui pellentesque ac.
          Duis sem mauris, malesuada id tempor non, pretium in leo.
        </p>

        <router-link to="/services" class="btn-text">
          Learn more <font-awesome-icon icon="arrow-right"/>
        </router-link>
      </div>

      <div class="services-card">
        <div class="icon-box">
          <span class="services-icon" ><font-awesome-icon icon="gavel"/></span>
        </div>

        <h2>Service three</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius mauris eu purus
          bland it facilisis. Quisque semper elit tortor, eu facilisis dui pellentesque ac.
          Duis sem mauris, malesuada id tempor non, pretium in leo.
        </p>

        <router-link to="/services" class="btn-text">
          Learn more <font-awesome-icon icon="arrow-right"/>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}
.services {
  background: #333131;
}
.services-icon {
  color:#ddb16e;
  font-size: 2.5rem;
}
.icon-box {
  border: 3px double #ddb16e;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.services {
  display: flex;
  flex-direction: column;

  &-card {
    background-color: #595959;
    border-radius: 8px;
    margin: 2rem;
    padding: 2rem 1rem;
    text-align: right;

    &:nth-child(2) {
      background-color: #333131;
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  & h2 {
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    margin-top: .7rem;
    font-size: 1.5rem;
  }

  & p {
    margin-top: .7rem;
    color: #ccc;
    text-align: center;
    font-size: 1rem;
  }
}

.btn-text {
    background-color: transparent;
    padding: 0.5rem;
    color:  #ddb16e;
    font-size: 1rem;
    margin-top: 2rem;
    display: inline-block;
    border-bottom: 1px solid #ddb16e;
    transition: all 0.2s;

    &:hover {
      background-color: #ddb16e;
      color:#ffffff;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
  }
}

.svg-inline--fa.fa-w-14 {
    width: 0.8rem;
    margin-left: 0.5rem;
    padding-top: 0.2rem;
}

        @media (min-width: 640px) and (max-width: 991px) {
          .services-icon {
            font-size: 4rem;
          }

          .icon-box {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }

          .services {
            & h2 {
              font-size: 1.8rem;
            }

            & p {
              font-size: 1rem;
            }
          }
        }
        @media (min-width: 991px) and (max-width: 1199px) {
          .container {
            display: flex;
          }
          .services {
            flex-direction: row;

            &-icon {
            font-size: 4rem;
            }

            &-card {

              &:nth-child(2) {
                margin: 2rem 0;
                padding: 2rem 1rem;
              }
            }

            & h2 {
              font-size: 1.8rem;
            }

            & p {
              font-size: 1.1rem;
            }
          }

          .icon-box {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        @media (min-width: 1200px) {
          .container {
            display: flex;
          }
          .services {
            display: flex;
            flex-direction: row;

            &-icon {
            font-size: 4rem;
            }

            &-card {
              box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

              &:hover {
                // box-shadow: 2px -0.5rem 1rem 10px rgba(0, 0, 0, 0.15);
                transform: translateY(-2px);
              }

              &:nth-child(2) {
                margin: 2rem 0;
                padding: 2rem 1rem;
              }
            }

            & h2 {
              font-size: 1.8rem;
            }

            & p {
              font-size: 1.1rem;
            }
          }

          .icon-box {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
</style>
