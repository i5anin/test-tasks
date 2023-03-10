<template>
  <aside>
    <div class="sidenav">
      <a>Discord</a>
      <ul>
        <li v-for="favorite in favorites" :key="favorite.id">
          <b-img class="round" :src="favorite.imgUrl" alt="" />
        </li>
        <li v-for="item in used" :key="item.id">
          <b-img class="rounded-corners" :src="item.imgUrl" alt="" />
        </li>
      </ul>
    </div>
  </aside>
</template>

<style>
.round {
  border-radius: 100px; /* Радиус скругления */
}

.rounded-corners {
  border-radius: 15px; /* Радиус скругления */
}
</style>

<script>
import favorites from '@/data/favorites.json';
import used from '@/data/used.json';
export default {
  data() {
    return {
      favorites,
      used,
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 50px;
}

li {
  padding: 10px;
}

aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
}

/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  //   background-color: #212226; /* Black */
  background-color: #5b70c4; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 19px;
  //   color: #818181;
  color: #ffffff;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
