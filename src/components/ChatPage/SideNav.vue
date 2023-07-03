<template>
  <div class="side-nav">
    <div class="background close">
      <div class="container backgroundd">
        <div class="sidebar">
          <div v-if="history == false">
            <div class="logo-size for-closing">
              <router-link class="remove-line" to="/"
                >
                <img class="img-fluid" src="../../assets/logo-main.jpg" alt="" />
                </router-link
              >
            </div>
            <div>
              <i class="fas fa-arrow-right toggle-icon toggle"></i>
            </div>
            <ul class="navbar-nav">
              <li class="">
                <button
                  @click="sendPageName('prompt')"
                  class="nav-item nav-link for-closing"
                >
                  <i class="far fa-comment-alt icon"></i> New Prompt
                </button>
              </li>
              <li class="">
                <button
                  @click="sendPageName('history')"
                  class="nav-item nav-link for-closing"
                >
                  <i class="fa-sharp fa-solid fa-clock-rotate-left icon"></i>
                  History
                </button>
              </li>
              <li class="">
                <button
                  @click="sendPageName('gallery')"
                  class="nav-item nav-link for-closing"
                >
                  <i class="far fa-image icon"></i> My Gallery
                </button>
              </li>
              <li class="">
                <button
                  @click="sendPageName('community')"
                  class="nav-item nav-link for-closing"
                >
                  <i class="fa-sharp fa-solid fa-users icon"></i> Community
                </button>
              </li>
              <li class="">
                <button
                  @click="sendPageName('feedback')"
                  class="nav-item nav-link for-closing"
                >
                  <i class="fa fa-thumbs-up icon"></i> Feedback
                </button>
              </li>
            </ul>
          </div>
          <div v-else>
            <div class="logo-size logo-div">
              <i @click="sendPageName('back')" class="fas fa-arrow-left logo-icon icon"></i>
              <router-link class="remove-line" to="/"
                ><img class="img-fluid" src="../../assets/logo-main.jpg" alt="" /></router-link
              >
            </div>
            <li class="history-item nav-item">
              <i class="fa-sharp fa-solid fa-clock-rotate-left icon"></i>
              <a class="nav-link history-text">History</a>
            </li>
            <ul class="prompt-ul">
              <li class="prompt-item">
                <i class="far fa-comment-alt icon"></i>
                <a class="prompt-link" href="#">Prompt 1</a>
                <span class="prompt-icons">
                  <i class="fa-sharp fa-solid fa-pen prompt-icon icon"></i>
                  <i class="fa-solid fa-trash-can prompt-icon icon"></i>
                </span>
              </li>
              <li class="prompt-item">
                <i class="far fa-comment-alt icon"></i>
                <a class="prompt-link" href="#">Prompt 1</a>
                <i class="fa-sharp fa-solid fa-pen prompt-icon icon"></i>
                <i class="fa-solid fa-trash-can prompt-icon icon"></i>
              </li>
              <li class="prompt-item">
                <i class="far fa-comment-alt icon"></i>
                <a class="prompt-link" href="#">Prompt 1</a>
                <i class="fa-sharp fa-solid fa-pen prompt-icon icon"></i>
                <i class="fa-solid fa-trash-can prompt-icon icon"></i>
              </li>
            </ul>
            <div class="delete-section">
              <i class="fa-solid fa-trash-can del-icon icon"></i>
              <p class="del-text">Clear All Conversation</p>
            </div>
          </div>

          <div v-if="0">
            <div class="pp-data">
              <div class="dp-div">
                <img
                  class="dp-pic rounded-circle for-closing"
                  src="../../assets/boy.jpg"
                />
              </div>
              <p class="dp-name for-closing">Ali James</p>
              <div class="logOut-element">
                <a class="nav-link logOut-text for-closing" href="#"
                  ><i class="fa fa-sign-out icon"></i> Logout</a
                >
              </div>
            </div>
          </div>
          <div v-else>
            <div class="logIN-signUP">
              <button type="button" class="btns logIN-btn for-closing">
                Login
              </button>
              <br />
              <button type="button" class="btns signUP-btn for-closing">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      history: false,
    };
  },
  methods: {
    sendPageName(page) {
      if (
        page == 'prompt' ||
        page == 'community' ||
        page == 'gallery' ||
        page == 'feedback'
      ) {
        this.$emit('linkClicked', page);
      } else if (page == 'history') {
        this.history = true;
      }
      else if (page == 'back')
      {
        this.history = false;
      }
    },
  },
  mounted() {
    const body = document.querySelector('body'),
      background = body.querySelector('.background'),
      toggle = body.querySelector('.toggle');

    toggle.addEventListener('click', () => {
      background.classList.toggle('close');
    });
  },
};
</script>

<style scoped>
.remove-line {
  text-decoration: none;
}
/* navbar backgroun color */
.background {
  background-color: #222222;
  /* width: 228px; */
  height: 100vh;
  position: fixed;
  z-index: 100;
}

.pp-data {
}

/* navbar logo */

.logo-size {
  display: flex;
  padding-top: 25px;
  margin-left: 57px;
  width: 93px;
  height: 5%;
}

.logo-text {
  color: #edb731;
  font-size: 36px;
  font-weight: 400;
}

/* navbar elements */

.navbar-nav {
  margin-top: 50px;
  margin-left: 30px;
  width: 157px;
  height: 40%;
}

/* navbar elements texts and icons */

.nav-item {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 15%;
  padding-left: 7px;
  border-radius: 5px;
}

.nav-item-active {
  background-color: #0e0e0e;
  color: white;
}

.nav-item:hover {
  background-color: #363636;
}

.icon {
  margin-top: 9px;
  width: 24px;
  height: 24px;
  color: #edb731;
}

.nav-link {
  font-size: 100%;
  padding-left: 3px;
  color: #f2f2f2;
  text-align: center;
  background: #222222;
  border: none;
}

.nav-link:hover,
button:hover {
  color: #f2f2f2;
}

/* navbar dp and name */

.dp-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dp-pic {
  margin-top: 40%;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dp-name {
  text-align: center;
  font-size: 17px;
  color: #f2f2f2;
  padding-top: 10px;
  text-decoration: underline;
  transition: 0.3s;
}

.dp-name:hover {
  text-decoration: none;
}

/* navbar logout icon and text */

.logOut-element {
  display: flex;
  width: 93px;
  height: 30px;
  margin-left: 55px;
  padding-left: 7px;
  border-radius: 5px;
  position: fixed;
  transition: 0.3s;
}

.logOut-element:hover {
  background-color: #363636;
}

.logOut-text {
  padding-top: 2px;
  padding-left: 1px;
}

/* log in and sign up btns .............. side nav with log in and sign up btn */

.logIN-signUP {
  padding-top: 20%;
  padding-left: 10%;
}

.btns {
  width: 128px;
  height: 40px;
  border-radius: 23px;
  border: solid 2px #edb731;
  transition: 0.3s;
}

.logIN-btn {
  font-weight: 400;
  background-color: #edb731;
  color: black;
}

.logIN-btn:hover {
  background-color: transparent;
  color: #edb731;
}

.signUP-btn {
  margin-top: 15px;
  color: #edb731;
  background-color: transparent;
}

.signUP-btn:hover {
  color: #000000;
  background-color: #edb731;
}

/* logo side arrow icon .............. side nav with history prmpt */

.logo-icon {
  margin-left: -30px;
  margin-top: 15px;
  margin-right: 16px;
  width: 21px;
  height: 22px;
  cursor: pointer;
}

/* history div */

.history-item {
  margin-top: 70px;
  margin-left: 45px;
  height: 40px;
}

.history-item:hover {
  background-color: transparent;
}

.history-text {
  font-size: 20px;
}

/* prompt and icons */

.prompt-ul {
  margin-top: 40px;
  margin-left: -20px;
  height: 20%;
}

.prompt-item {
  margin-bottom: 20px;
  padding-left: 6px;
  border-radius: 5px;
  transition: 0.3s;
}

.prompt-item:hover {
  background-color: #363636;
}

.prompt-link {
  text-decoration: none;
  color: #ffffff;
  padding-right: 35px;
}

.prompt-link:hover {
  color: #ffffff;
}

.prompt-icons {
  color: transparent;
}

/* delete text and icon */

.delete-section {
  display: flex;
  margin-top: 50px;
  margin-left: 15px;
  width: 185px;
  height: 37px;
  padding-left: 10px;
  border-radius: 5px;
  transition: 0.3s;
}

.delete-section:hover {
  background-color: #363636;
}

.del-text {
  margin-top: 5px;
  color: rgb(255, 255, 255);
  font-size: 14px;
}

/* dp section of history page */

.history-dp {
  margin-top: 80px;
}

/* media max */

@media only screen and (max-width: 1100px) {
  .nav-item:hover {
    background-color: transparent;
  }

  /* navbar toggler for responsive */

  .toggle-icon {
    position: absolute;
    top: 7%;
    right: -15px;
    transform: translateY(-50%);
    height: 30px;
    width: 30px;
    padding-top: 0px;
    padding-left: 2px;
    color: white;
    background-color: #edb731;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .close {
    width: 78px;
  }

  .close .for-closing {
    opacity: 0;
  }

  .navbar-nav {
    margin-left: 15px;
  }

  .logOut-element {
    margin-top: 10px;
    margin-left: 15px;
  }
}
</style>
