<template>
  <div class="services">
    <div class="services-card">
      <div class="icon-box">
        <span class="services-icon" ><font-awesome-icon icon="cube"/></span>
      </div>

      <h2>Service one</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius mauris eu purus bland
        it facilisis. Quisque semper elit tortor, eu facilisis dui pellentesque ac. Duis sem mauri
        s, malesuada id tempor non, pretium in leo.
      </p>

      <a href="#" class="btn-text">Learn more <font-awesome-icon icon="arrow-right"/></a>
    </div>

    <div class="services-card">
      <div class="icon-box">
        <span class="services-icon" ><font-awesome-icon icon="briefcase"/></span>
      </div>

      <h2>Service one</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius mauris eu purus bland
        it facilisis. Quisque semper elit tortor, eu facilisis dui pellentesque ac. Duis sem mauri
        s, malesuada id tempor non, pretium in leo.
      </p>

      <a href="#" class="btn-text">Learn more <font-awesome-icon icon="arrow-right"/></a>
    </div>

    <div class="services-card">
      <div class="icon-box">
        <span class="services-icon" ><font-awesome-icon icon="gavel"/></span>
      </div>

      <h2>Service one</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius mauris eu purus bland
        it facilisis. Quisque semper elit tortor, eu facilisis dui pellentesque ac. Duis sem mauri
        s, malesuada id tempor non, pretium in leo.
      </p>

      <a href="#" class="btn-text">Learn more <font-awesome-icon icon="arrow-right"/></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services-icon {
  color:#ddb16e;
  font-size: 3.5rem;
}
.icon-box {
  border: 3px double #ddb16e;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.services {
  display: flex;

  &-card {
    background-color: #595959;
    border-radius: 8px;
    margin: 2rem;
    padding: 2rem 1rem;
    text-align: right;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

    &:hover {
      box-shadow: 2px -0.5rem 1rem 10px rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }

    &:nth-child(2) {
      background-color: #333131;
      margin: 2rem 0;
    }
  }

  & h2 {
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.1rem;
    margin-top: 1rem;
  }

  & p {
    margin-top: 1rem;
    color: #ccc;
    text-align: center;
  }
}

.btn-text {
    background-color: transparent;
    padding: 0.5rem;
    color:  #ddb16e;
    font-size: 1rem;
    margin-top: 4rem;
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
</style>
