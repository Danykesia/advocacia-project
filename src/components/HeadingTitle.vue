<template>
  <div>
    <h1 class="title">{{title}}</h1>
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
  font-size: 2.5rem;
  text-align: center;
}

        @media (min-width: 768px) {
                  .title {
                    font-size: 2.8rem;
                    margin-bottom: 1rem;
                  }
                }
</style>
