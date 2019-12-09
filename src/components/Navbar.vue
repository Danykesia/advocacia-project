<template>
  <header  container-grid >
    <nav class="container navbar">
      <img href="/" class="navbar_logo" src="../assets/balance.svg" alt="Logo">
      <ul class="navbar_links">
        <li><router-link to="/" active-class="active" exact>Home</router-link></li>
        <li><router-link to="/lawfirm" active-class="active" exact>Law Firm
          </router-link></li>
        <li><router-link to="/services" active-class="active" exact>Services
          </router-link></li>
        <li><router-link to="/blog" active-class="active" exact>Blog</router-link></li>
        <li><router-link to="/contact" active-class="active" exact>Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 14vh;
  width: 100%;
  // background-color: #3f3f3f;
  position: fixed;
  z-index: 1000;

  &_logo {
    // text-align: left;
    width: 70px;
    cursor: pointer;
    // color: green;
  }

  & ul {
    display: flex;
    color: white;
  }

  &_links li {
    padding-left: 1rem;
    padding-right: 1rem;

    &:last-child {
      padding-right: 0rem;
    }

    &:first-child {
      padding-left: 0rem;
    }

    & a{
      color: #ffffff;
      text-transform: uppercase;
      transition: all 0.3s ease 0s;
      letter-spacing: 0.1rem;
      font-family: 'Source Sans Pro', sans-serif;

      &:hover {
        color: #ddb16e;
      }
    }

    & a.active {
      color: #ddb16e;
    }
  }
}

.scroll-navbar {
  background-color: #3f3f3f;
}
</style>
