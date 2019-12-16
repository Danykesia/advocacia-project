<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.title {
  color:  #ddb16e;
  margin: 2rem 0 0 0;
  font-size: 2rem;
  text-align: center;
}

hr {
  border: 1px solid  #ddb16e;
  width: 150px;
  margin: 0 auto;
  padding-top: -2rem;
  margin-bottom: 2rem;
}

        @media (min-width: 768px) {
                  hr{
                    width: 210px;
                  }
                  .title {
                    font-size: 2.8rem;
                  }
                }
</style>
