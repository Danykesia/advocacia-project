<template>
  <header>
    <nav id="navbar" class="navbar">
      <div class="toggle_mobile">
        <img href="/" class="navbar_logo" src="../assets/balance.svg" alt="Logo">
        <button id="toggle" class="navbar_btn" @click="showMenu = !showMenu">
          <font-awesome-icon icon="bars"/>
        </button>
      </div>

      <ul class="navbar_links" :class="{'showMenu': showMenu}">
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

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
  mounted() {
    window.onscroll = function scrollFunction() {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 80) {
        document.getElementById('navbar').style.background = ' #33313148';
      } else {
        document.getElementById('navbar').style.background = 'transparent';
      }
    };
    // document.getElementById('toggle').addEventListener('click', () => {
    //   const menuLinks = document.querySelector('.navbar_links');
    //   const { display } = menuLinks.style;
    //   if (display === 'block') {
    //     menuLinks.style.display = 'none';
    //   } else {
    //     menuLinks.style.display = 'block';
    //   }
    // });
  },
};
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  width: 100%;
  z-index: 1000;
  left: 0;
  right: 0;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  // height: 70px;
  width: 100%;
  padding-top: .5rem;
  // padding-bottom: .5rem;

  &_btn {
    margin-right: 2rem;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: rgb(247, 247, 247);
    background: rgba(107, 107, 107, 0.137);
    border-radius: 3px;
    padding: .3rem .6rem;
    display: flex;

    &:focus {
      outline: none;
      border: none;
    }
  }

  &_logo {
    margin-left: 2rem;
    max-height: 50px;
    cursor: pointer;
    padding: .1rem;
  }

  & ul {
    display: none;
    color: white;

    & li a:focus {
      border: none;
      outline: none;
    }

    & li a {
      margin: 0;
    }
  }

  & ul.showMenu {
    display: block;
    width: 100%;
    background: #4e4e4e;
    padding: 0;
  }

    & li a {
      color: #ffffff;
      text-transform: uppercase;
      transition: all 0.3s ease 0s;
      letter-spacing: 0.1rem;
      font-family: 'Source Sans Pro', sans-serif;
      white-space: nowrap;
      border-top: 1px solid rgba(56, 56, 56, 0.226);
      justify-content: center;
      padding: .5rem;
      display: flex;

      &:hover {
        color: #eca944;
      }
    }

    & a.active {
      color: #eca944;
    }
  }


.toggle_mobile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

@media (min-width: 991px) {
  header {
    position: fixed;
  }

  .navbar {
    height: 80px;
    flex-direction: row;
    padding-top: 0;

    &_logo {
      margin-left: 4rem;
    }

    & ul {
      margin-right: 4rem;
    }

    &_links li {

      & a {
        border: none;
        margin-right: 4rem;
      }
    }

    & ul, ul.showMenu {
      display: flex;
      background: none;
    }

    &_btn {
      display: none;
    }
  }
}
</style>
