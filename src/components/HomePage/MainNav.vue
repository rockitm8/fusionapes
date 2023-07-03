<template>
  <div class="main-nav">
    <div class="dis-none">
      <nav class="d-flex justify-content-around nav-background">
        <div class="my-auto">
          <img class="img-fluid" src="../../assets/logo-main.jpg" alt="" />
        </div>
        <div class="my-auto un-list">
          <ul class="d-flex list-unstyled my-auto">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/baked">Baked AI</router-link></li>
            <li><a href="http://localhost:8080/#our-story">Our Story</a></li>
            <li><router-link to="/new-nfts">New Nfts</router-link></li>
            <li><a href="http://localhost:8080/#best-creations">Best Creations</a></li>
            <li><a href="http://localhost:8080/#latest-news">Latest News</a></li>
          </ul>
        </div>
        <div class="btn-mar">
          <div class="d-flex nav-btns">
            <router-link class="btn1" to="/signup">Sign Up</router-link>
            <router-link class="btn2" to="/login">Log In</router-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="topnav">
      <a href="#home" class="active"
        ><img src="../../assets/logo-main.jpg" alt=""
      /></a>
      <!-- Navigation links (hidden by default) -->
      <div id="myLinks">
        <router-link to="/">Home</router-link>
        <router-link to="/baked">Baked AI</router-link>
        <a href="http://localhost:8080/#our-story">Our Story</a>
        <router-link to="/new-nfts">New Nfts</router-link>
        <a href="http://localhost:8080/#best-creations">Best Creations</a>
        <a href="http://localhost:8080/#latest-news">Latest News</a>
        <div class="btn-mar">
          <div class="d-flex nav-btns pb-5">
            <router-link class="btn1" to="/signup">Sign Up</router-link>
            <router-link class="btn2" to="/login">Log In</router-link>
          </div>
        </div>
      </div>
      <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
      <a href="javascript:void(0);" class="icon" @click="myFunction">
        <i class="fa fa-bars mt-3"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  methods: {
    myFunction() {
      var x = document.getElementById('myLinks');
      if (x.style.display === 'block') {
        x.style.display = 'none';
      } else {
        x.style.display = 'block';
      }
    },
  },
};
</script>

<style scoped>
.main-nav {
  position: fixed;
  z-index: 200;
  width: 100%;
}
.nav-background {
  position: sticky !important;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  height: 110px;
}

.un-list a {
  text-decoration: none;
  color: #fdfdfd;
  font-weight: 500;
  font-size: 1vw;
  line-height: 60px;
  margin-left: 60px;
}

.un-list a:hover {
  color: var(--orange);
  transition: 0.2s;
  text-decoration: underline;
}

.btn1 {
  background: none;
  border: 2px var(--orange) solid;
  border-radius: 25px 25px 25px 25px;
  color: var(--orange);
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 15px;
  text-decoration: none;
}

.btn2 {
  background: none;
  border: 2px var(--orange) solid;
  border-radius: 25px 25px 25px 25px;
  color: var(--orange);
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 10px;
  font-size: 15px;
  text-decoration: none;
}

.btn2:hover {
  background: var(--orange);
  border: 2px var(--orange) solid;
  border-radius: 25px 25px 25px 25px;
  color: black;
  transition: 0.2s;
}

.btn-mar {
  margin-top: 38px;
}

.btn1:hover {
  background: var(--orange);
  border: 2px var(--orange) solid;
  border-radius: 25px 25px 25px 25px;
  color: black;
  transition: 0.2s;
}



.dis-none {
  background: rgba(0, 0, 0, 0.6) !important;
}

@media only screen and (max-width: 991px) {
  .dis-none {
    display: none;
  }
}

.background-image nav {
  display: none;
}
/*  */
.topnav {
  display: none;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6) !important;

  position: fixed;
  top: 0;
}

@media only screen and (max-width: 991px) {
  .topnav {
    display: contents;
    background: rgba(0, 0, 0, 0) !important;
    position: fixed;
    z-index: 100;
  }
}

/* Hide the links inside the navigation menu (except for logo/home) */
.topnav #myLinks {
  display: none;
  background: rgba(0, 0, 0, 0.6) !important;
}

/* Style navigation menu links */
.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

/* Style the hamburger menu */
.topnav a.icon {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

/* Style the active link (or home/logo) */
.active {
  background: rgba(0, 0, 0, 0.6) !important;
  color: white;
}

#myLinks {
  text-decoration: none;
  color: #fdfdfd;
  font-weight: 500;
  font-size: 1vw;
}

#myLinks a:hover {
  color: var(--orange);
}

.fa-bars {
  color: var(--orange);
}

.fa-bars:hover {
  color: #f3c653;
}

/*  */
</style>
