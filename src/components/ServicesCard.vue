<template>
  <div class="services services_box">
    <font-awesome-icon class="services_icon animation" :icon="icon"/>
    <h2 class="services_title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
        @media (min-width: 1024px) {
          .services {
            &_box {
              width: 380px;
              height: 30vh;
              text-align: center;
              background: white;
              border: 1px solid rgb(238, 151, 93);
              box-shadow: 0px 0px 12px 0px rgba(58,39,48,0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;

              &:hover {
                box-shadow: 0px 0px 55px 0px rgba(0,0,0,0.19);
                transition: all 0.3s ease 0s;
              }
            }

            &_icon {
              color: rgb(189, 109, 57);
              font-size: 3.5rem;
              transition: all .5s ease-in-out;

              &:hover {
              color:#ddb16e;
              transform: scale(1.1);
              }
            }

            &_title {
              color: rgb(87, 80, 80);
              margin-top: 1.2rem;
            }
          }
        }
</style>
