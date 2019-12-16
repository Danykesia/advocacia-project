<template>
  <div class="container">
    <HeadingTitle title="ABOUT US"/>
    <div class="text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tristique
        ullamcorper. Mauris eget urna id dui sollicitudin lobortis. Ut in felis justo.
        Curabitur id purus venenatis, aliquam dui sit amet, tincidunt magna.
        Etiam ut velit molestie, placerat justo sed, auctor nisl. Curabitur sollicitudin
        leo quis nisl aliquam, eu vulputate nisi porta. Fusce fermentum, est in tincidunt
        venenatis, velit nulla ornare turpis, non viverra augue eros nec turpis. Donec
        eu interdum leo. Sed id risus enim. Vivamus eleifend, justo at lobortis posuere,
        dui nulla luctus mauris, hendrerit placerat nulla nibh vel orci.
      </p>
      <p>
        Mauris at pretium erat. Ut viverra urna odio, non lacinia purus tincidunt non.
        Vivamus tortor dolor, aliquet et vehicula condimentum, ullamcorper quis lacus.
        Mauris tincidunt nibh nec sagittis scelerisque. Praesent non mi eget turpis
        cursus volutpat. Nam urna est, viverra a imperdiet ultrices, cursus quis augue.
        Sed eget dui scelerisque, varius orci ac, mollis leo. Nam efficitur gravida varius.
        Nam consectetur commodo velit, non faucibus lectus fringilla eu. Phasellus id feugiat
        mauris, nec lacinia quam. Vestibulum nec lacinia metus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra tristique
        ullamcorper. Mauris eget urna id dui sollicitudin lobortis. Ut in felis justo.
        Curabitur id purus venenatis, aliquam dui sit amet, tincidunt magna.
        Etiam ut velit molestie, placerat justo sed, auctor nisl. Curabitur sollicitudin
        leo quis nisl aliquam, eu vulputate nisi porta. Fusce fermentum, est in tincidunt
        venenatis, velit nulla ornare turpis, non viverra augue eros nec turpis. Donec
        eu interdum leo. Sed id risus enim. Vivamus eleifend, justo at lobortis posuere,
        dui nulla luctus mauris, hendrerit placerat nulla nibh vel orci.
      </p>
      <p>
        Mauris at pretium erat. Ut viverra urna odio, non lacinia purus tincidunt non.
        Vivamus tortor dolor, aliquet et vehicula condimentum, ullamcorper quis lacus.
        Mauris tincidunt nibh nec sagittis scelerisque. Praesent non mi eget turpis
        cursus volutpat. Nam urna est, viverra a imperdiet ultrices, cursus quis augue.
        Sed eget dui scelerisque, varius orci ac, mollis leo. Nam efficitur gravida varius.
        Nam consectetur commodo velit, non faucibus lectus fringilla eu. Phasellus id feugiat
        mauris, nec lacinia quam. Vestibulum nec lacinia metus.
      </p>
    </div>
  </div>
</template>

<script>
import HeadingTitle from '@/components/HeadingTitle.vue';

export default {
  components: {
    HeadingTitle,
  },
};
</script>

<style lang="scss" scoped>
.text p{
  margin-top: 1rem;
  line-height: 1.7rem;
  font-size: 1rem;
  color: #746666;

  &:nth-child(4) {
    margin-bottom: 2rem;
  }
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
