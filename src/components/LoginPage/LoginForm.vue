<template>
  <div class="page-div">
    <img class="side-img img-fluid" src="../../assets/long-pic.png" />
    <div class="container">
      <div class="row pt-4 row-page">
        <div class="col-6 col-md-5 col-1">
          <router-link class="logo-link" to="/">
            <img class="img-fluid" src="../../assets/logo-main.jpg" alt="" /></router-link
          >
        </div>
        <div class="col-6 col-md-7 col-11">
          <div class="signUP-confirmation">
            <p class="haveAccount-text">Are you new here?</p>
            <router-link class="signupNOW-btn" to="/signup"
              >Sign Up</router-link
            >
          </div>
        </div>
        <div class="col-12 form-col pt-4">
          <div class="container form-contain">
            <div class="login-form">
              <h2 class="loginFORM-hd">Log In</h2>
              <label for="exampleInputEmail1" class="form-texts"
                >Username or Email
              </label>
              <input
                type="email"
                class="boxes mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Type Username or Email..."
              />
              <br />
              <label for="exampleInputEmail1" class="form-texts"
                >Password
              </label>
              <input
                type="password"
                class="boxes mt-2"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
              />
              <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i>
              <br />
              <div class="row mt-3">
                <div class="col-12 text-end">
                  <span class="forgot-p">Forgot Password?</span>
                </div>
              </div>
              <div class="btns-div">
                <button type="button" class="login-btn form-btns">Log In</button>
              </div>
              <div class="row or-row">
                <div class="col-5 px-0 left-line">
                  <hr class="lines" />
                </div>
                <div class="col-2 px-0">
                  <p class="or-text">OR</p>
                </div>
                <div class="col-5 px-0 right-line">
                  <hr class="lines" />
                </div>
              </div>
              <div class="btns-div mt-3">
                <button type="button" class="contact-btns form-btns">
                  Continue with Google
                </button>
                <br />
              </div>
              <div class="btns-div">
                <button type="button" class="contact-btns form-btns mt-2">
                  Connect with Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  mounted() {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#exampleInputEmail2');

    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
    });
  }
};
</script>

<style scoped>
/* full body */

.page-div {
  display: flex;
}

/* img on left */

.side-img {
  /* width: 30%; */
  height: 100vh;
}

/* row of page ( right side of img ) */

/* logo heading */

.logo-hd {
  padding-left: 40px;
  font-size: 36px;
  color: #edb731;
}

.logo-link {
  text-decoration: none;
  
}

.logo-link img {
  width: 5  0px;
}

/* question of new here and btn */

.signUP-confirmation {
  display: flex;
  margin-left: 30%;
}

.haveAccount-text {
  font-size: 16px;
  color: #222222;
  padding-top: 3px;
  width: 45%;
}

.loginNOW-btn {
  width: 163px;
  height: 36px;
  padding: 5px 12px;
  font-size: 16px;
  color: #222222;
  background-color: #edb731;
  border: solid 1px #edb731;
  border-radius: 23px;
}

.signupNOW-btn {
  /* width: 163px; */
  height: 36px;
  padding: 5px 12px;
  font-size: 16px;
  color: #222222;
  background-color: #edb731;
  border: solid 1px #edb731;
  border-radius: 23px;
  text-decoration: none;
}

.signupNOW-btn:focus {
  outline: none;
}

/* form section .... */

.form-contain {
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-self: center;
}

.login-form {
  /* width: 592px; */
  /* height: 575px; */
  border-radius: 6px;
  border: solid 2px black;
  padding: 50px;
}

.forgot-p {
  color: var(--orange);
  cursor: pointer;
  
}

/* form heading */

.loginFORM-hd {
  font-size: 20px;
  color: #222222;
  font: bold;
}

/* form texts and boxes (search bar) */

.form-texts {
  font-size: 16px;
  color: #222222;
  padding-top: 4%;
}

.boxes {
  width: 100%;
  height: 8%;
  border-radius: 5px;
  border: solid 1px #222222;
  margin-top: 1%;
  padding: 5px 10px;
}

.form-btns {
  color: #222222;
  font-size: 16px;
  font-weight: 400;
  background-color: #edb731;
  border: solid 1px #edb731;
  border-radius: 23px;
  height: 36px;
}

.login-btn {
  width: 133px;
  margin-top: 40px;
}

.btns-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-btns {
  width: 264px;
}

.lines {
  width: 112px;
  opacity: 1;
  /* border: solid 1px #222222; */
}

.left-line {
  display: flex;
  justify-content: right;
}

.or-row {
  padding-top: 10%;
}

.or-text {
  text-align: center;
}

.right-line {
  display: flex;
  justify-content: left;
}

/* media max */

@media only screen and (max-width: 1400px) {
  .row-page {
    height: 100%;
  }

  .form-col {
    height: 92%;
  }

  .signUP-confirmation {
    margin-left: 0;
  }

  .btns-div {
    height: 10%;
  }

  .form-contain {
    padding-top: 2%;
    height: 100%;
  }

  .login-form {
    height: 95%;
  }

  .or-row {
    padding-top: 7%;
  }
}

@media only screen and (max-width: 1200px) {
  .haveAccount-text {
    margin-left: 0%;
  }

  .loginNOW-btn {
    margin-left: 9%;
  }

  .haveAccount-text {
    padding-top: 5px;
    font-size: 14px;
    text-align: center;
  }
}

@media only screen and (max-width: 992px) {
  .side-img {
    display: none;
  }
  .signUP-confirmation {
    margin-left: 3%;
  }

  .haveAccount-text {
    width: 58%;
    padding-top: 7px;
  }

  .loginNOW-btn {
    width: 45%;
    margin-left: 0;
    font-size: 80%;
  }

  .login-form {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .signUP-confirmation {
    margin-left: 0;
  }

  .haveAccount-text {
    text-align: center;
    padding-top: 10px;
    font-size: 10px;
  }

  .loginNOW-btn {
    font-size: 10px;
  }

  .logo-hd {
    font-size: 20px;
  }
}
</style>
