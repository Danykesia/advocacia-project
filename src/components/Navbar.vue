<template>
  <header>
    <nav class="container navbar">
      <img href="/" class="navbar_logo" src="../assets/balance.svg" alt="Logo">
      <ul class="navbar_links">
        <li>
          <router-link to="/" active-class="active" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/lawfirm" active-class="active" exact>Law Firm</router-link>
        </li>
        <li>
          <router-link to="/services" active-class="active" exact>Services</router-link>
        </li>
        <li>
          <router-link to="/blog" active-class="active" exact>Blog</router-link>
        </li>
        <li>
          <router-link to="/contact" active-class="active" exact>Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #333131;
  position: fixed;
  width: 100%;
  z-index: 1000;
  left: 0;
  right: 0;
}

.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding-top: .5rem;
  padding-bottom: .5rem;

  &_logo {
    max-height: 100%;
    cursor: pointer;
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

        @media (min-width: 768px) {
          .navbar {
            height: 80px;
          }
        }
</style>
