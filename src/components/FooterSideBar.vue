<template>
  <div class="container blog-bar">
    <div class="search-container">
      <h3>SEARCH:</h3>
      <form class="search-wrapper">
        <input type="text" placeholder="Search here..." required>
        <button type="submit"><font-awesome-icon icon="search"/></button>
      </form>
    </div>
    <div class="bar-features">
      <h3>CATEGORIES:</h3>
      <li><a href="#">Lore ipsum</a></li>
      <li><a href="#">Lore ipsum</a></li>
      <li><a href="#">Lore ipsum</a></li>
      <li><a href="#">Lore ipsum</a></li>
      <li><a href="#">Lore ipsum</a></li>
      <li><a href="#">Lore ipsum</a></li>

      <h3>RECENT POSTS:</h3>
      <li><a href="#">Lore ipsum amet</a><span class="date"> - November 1st, 2019</span></li>
      <li><a href="#">Lore ipsum amet</a><span class="date"> - October 3rd, 2019</span></li>
      <li><a href="#">Lore ipsum amet</a><span class="date"> - September 2nd, 2019</span></li>
      <li><a href="#">Lore ipsum amet</a><span class="date"> - July 6th, 2019</span></li>

      <h3>MENU:</h3>
      <li>
        <router-link to="/">HOME</router-link>
      </li>
      <li>
        <router-link to="/lawfirm">LAW FIRM</router-link>
      </li>
      <li>
        <router-link to="/services">SERVICES</router-link>
      </li>
      <li>
        <router-link to="/blog">BLOG</router-link>
      </li>
      <li>
        <router-link to="/contact">CONTACT</router-link>
      </li>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  color: rgb(83, 83, 83);
  margin-top: 1rem;
  margin-bottom: .4rem;
}

a {
  color: #e0a347;
  font-size: 1.1rem;

  &:hover {
    color: #a0793e;
  }
}

.date {
  color: #493e2d
}
.blog-bar {
  padding-bottom: 1rem;
}

.search {
  &-wrapper {
    display: flex;
    margin-bottom: 1.5rem;
    margin-top: .6rem;

    & input {
      width: 14rem;
      height: 3rem;
      padding-left: 1rem;
      background: #fafafa;
      border: 1px solid rgb(161, 159, 159);
      font-size: 1rem;
      color: rgb(36, 33, 33);
      border-radius: 3px 0 0 3px;

      &:focus {
      outline: 0;
      background: #ffffff;
      box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
      }

      &::placeholder {
      color: #999;
      font-style: italic;
      }
    }

    & button {
      overflow: hidden;
      position: relative;
      cursor: pointer;
      height: 3rem;
      width: 4.5rem;
      font-size: 1rem;
      color: #fff;
      background: #ddb16e;
      border: 1px solid transparent;
      border-radius: 0 3px 3px 0;
      text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);

      &:hover {
        background: #e2bb80;
      }

      &:active, &:focus {
        background:#e2bb80;
      }
    }
  }
}
        @media (min-width: 768px) {
          .container {
            padding-left: 0;
          }

          .blog-bar {
            position: sticky;
            top: 90px;
          }
        }
</style>
