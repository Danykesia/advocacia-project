<template>
  <section class="social-media">
    <a href="#">
      <font-awesome-icon :icon="['fab', 'instagram']" class="animation social-icon"/>
    </a>
    <a href="#">
      <font-awesome-icon :icon="['fab', 'whatsapp']" class="animation social-icon"/>
    </a>
    <a href="#">
      <font-awesome-icon :icon="['fab', 'facebook']" class="animation social-icon"/>
    </a>
  </section>
</template>

<style lang="scss" scoped>
.social-media {
  background:  #201919;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.social-icon {
  border: 1px solid #ddb16e;
  background-color: #ddb16e;
  color: #ffffff;
  font-size: 1rem;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  padding: .5rem;
  margin: 0 .4rem;
}

.animation:hover {
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}
</style>
