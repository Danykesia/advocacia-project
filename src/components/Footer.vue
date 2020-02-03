<template>
  <footer>
    <div class="primary">
      <div class="container">
        <div>
          <h3 class="title-features">MENU</h3>
          <ul class="primary-menu">
            <router-link to="/">
              <li>Home</li>
            </router-link>
            <router-link to="/lawfirm">
              <li>Law Firm</li>
            </router-link>
            <router-link to="/services">
              <li>Services</li>
            </router-link>
            <router-link to="/blog">
              <li>Blog</li>
            </router-link>
            <router-link to="/contact">
              <li>Contact</li>
            </router-link>
          </ul>
        </div>

        <div>
          <h3 class="title-features">CONTACT</h3>
          <ul class="primary-contact">
            <li>
              <span>Address:</span>
              <br />Street name, BR, xxxx-xx
            </li>
            <li>
              <span>Phone:</span>
              <br />xx xxxx-xxxx/ xx xxxx-xxxx
            </li>
            <li>
              <span>Email:</span>
              <br />contact@support.com
            </li>
          </ul>
        </div>

        <div>
          <h3 class="title-features">SOCIAL MEDIA</h3>
          <a class="primary-social" href="#">
            <font-awesome-icon :icon="['fab', 'instagram']" class="animation social-icon" />
          </a>
          <a class="primary-social" href="#">
            <font-awesome-icon :icon="['fab', 'facebook']" class="animation social-icon" />
          </a>
        </div>
      </div>
    </div>

    <div class="copyright">
      <p>Copyright 2019 - Law Firm - Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.title-features {
  border-left: 3px solid #ddb16e;
  padding-left: 0.5rem;
  color: #ffffff;
  font-weight: 300;
  font-size: 1rem;
  margin-bottom: 1.2rem;
  margin-top: 1rem;
}

.primary .container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.primary {
  background-color: rgb(34, 33, 33);

  &-menu {
    margin-bottom: 1rem;

    & li,
    a:not(last-child) {
      margin-bottom: 0.5rem;
    }

    & li,
    a {
      color: rgb(223, 155, 72);

      &:hover {
        color: rgb(209, 209, 209);
        transition: 0.3s ease;
      }

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  &-contact {
    margin-bottom: 1rem;

    & li:not(last-child) {
      margin-bottom: 0.8rem;
    }

    & li {
      color: rgb(223, 155, 72);
    }
    & span {
      font-weight: bold;
    }
  }

  &-social {
    font-size: 1.2rem;
    margin-right: 0.7rem;
    color: rgb(223, 155, 72);

    &:hover {
      color: #fff;
      transition: 0.3s ease;
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
}

.copyright {
  background-color: black;
  color: gray;
  font-size: 1rem;
  text-align: center;
  padding: 0.8rem;
}

        @media (min-width: 576px) {
          .primary .container {
            flex-direction: row;
          }
        }
</style>
