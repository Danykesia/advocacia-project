<template>
  <div class="lowfirm">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'lowfirm',
  components: {
    HelloWorld,
  },
};
</script>