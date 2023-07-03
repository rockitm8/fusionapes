<template>
  <div class="main-content">
    <div class="img-div">
      <img
        class="bg-img img-fluid"
        src="../../assets/bg.jpg"
        alt="background"
      />
    </div>

    <div class="container bg-img-txt">
      <div class="row text-center txt1-row">
        <div class="col-12">
          <span class="txt1 fus-p">FusionApes Presents</span>
        </div>
      </div>
      <div class="row text-center">
        <span class="baked-txt"> BAKED <span class="ai-txt">AI</span> </span>
        <span class="generator-txt"> AI Image Generator </span>
      </div>
    </div>

    <div id="home" class="container">
      <!-- <span>Text To Image AI Generator</span> -->
      <div class="top-m">
        <div class="text-center text-to">
          <span>Text To Image AI Generator</span>
        </div>
        <div class="text-center convert-txt mt-4">
          <span>Bring your words to life</span>
        </div>
      </div>
      <div class="input-mt">
        <div class="box mx-auto">
          <form action="" class="form-gen">
            <input
              class="input-gen inp1"
              type="text"
              name=""
              placeholder="Describe your imagination..."
            />
            <input class="input-gen" type="submit" name="" value="Generate" />
          </form>
        </div>
      </div>
      <div class="custom-con">
        <div class="prompt"><span>Prompt suggestions</span></div>
        <div class="row">
          <div class="col-lg-4 col-12 sug-1 mt-4">
            <span class="sugg-here">Suggestion here</span>
          </div>
          <div class="col-lg-8 col-12 sug-2 mt-4">
            <span class="sugg-here">Suggestion here</span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col12 sug-3 mt-4">
            <span class="sugg-here">Suggestion here</span>
          </div>
          <div class="col-lg-2 col-md-6 col-12 sug-4 mt-4">
            <span class="sugg-here">Suggestion here</span>
          </div>
          <div class="col-lg-2 col-md-6 col-12 sug-5 mt-4">
            <span class="sugg-here">Suggestion here</span>
          </div>
        </div>
      </div>
    </div>

    <div id="best-creations" class="container sec-2">
      <div class="text-center">
        <div><span class="text-to">Best Creations</span></div>
        <!-- <span class="convert-txt">Here are some best people have created</span> -->
      </div>

      <div class="row mt-5 text-center">
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="card mx-auto" style="width: 18rem">
            <img src="../../assets/img5.png" class="card-img-top" alt="..." />
            <div class="card-body bg-warning">
              <div><p class="created-by">Created by</p></div>
              <div class="p-0"><p class="mr-jony">Mr Jonny</p></div>
              <p class="describe-txt ">
                Prompt: Describe your suggestions here
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="card mx-auto" style="width: 18rem">
            <img src="../../assets/img4.png" class="card-img-top" alt="..." />
            <div class="card-body bg-warning">
              <div><p class="created-by">Created by</p></div>
              <div class="p-0"><p class="mr-jony">Mr Jonny</p></div>
              <p class="describe-txt ">
                Prompt: Describe your suggestions here
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4">
          <div class="card mx-auto" style="width: 18rem">
            <img src="../../assets/img3.png" class="card-img-top" alt="..." />
            <div class="card-body bg-warning">
              <div><p class="created-by">Created by</p></div>
              <div class="p-0"><p class="mr-jony">Mr Jonny</p></div>
              <p class="describe-txt ">
                Prompt: Describe your suggestions here
              </p>
            </div>
          </div>
        </div>
        <div class="loved-it">
          <p>Loved it? Create yours</p>
          <router-link class="btn2" to="/login">Log In</router-link>
        </div>
      </div>
    </div>
    <div id="our-story" class="sec-3 text-center container">
      <div><h1 class="text-to">Our Story</h1></div>
      <div class="d-lg-flex baked-mt">
        <div class="col-lg-6 col-12">
          <div class="our-pics">
            <div class="baked-ai">
              <img class="img-fluid" src="../../assets/img1.png" alt="" />
            </div>
            <div class="baked-ai2">
              <img class="img-fluid" src="../../assets/img2.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="journey-txt p-lg-5 p-0">
            <h3 class="hustle-txt text-start">The journey of hustle</h3>
            <p class="text-start">
              It is an AI image generator tool. With it, you can create stunning
              images of your products or ideas. It has a wide variety of
              templates and options to choose from, so you can create the
              perfect image for your product. You can preview your generated
              images before you download them, so you can see how they will
              look. It is very easy to use, and there is step-by-step guidance
              to help you create the best possible images.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="latest-news" class="sec-4 container">
      <div class="text-center slider-txt">
        <div class="latest-txt"><h1>Latest News</h1></div>
        <div class="update-txt"><p>Get updated with our latest blogs</p></div>
      </div>


      <div class="row">
        <div class="col-12 text-center">
          <span class="indicate"> Slide (Left or Right)</span> 
        </div>
      </div>
      <div class="slide-container swiper slider-margin position-relative">
       
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card swiper-slide">
              <img src="../../assets/img3.png" class="card-img-top" alt="..." />
              <div class="card-body bg-dark">
                <p class="card-p">Category</p>
                <h5 class="card-title">How AI has changes the way of living</h5>
                <p class="card-text">
                  It is an AI image generator tool. With it, you can create
                  stunning images of your products or ideas.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-warning text-center rounded-pill"
                    >Read now</a
                  >
                </div>
              </div>
            </div>
            <div class="card swiper-slide">
              <img src="../../assets/img3.png" class="card-img-top" alt="..." />
              <div class="card-body bg-dark">
                <p class="card-p">Category</p>
                <h5 class="card-title">How AI has changes the way of living</h5>
                <p class="card-text">
                  It is an AI image generator tool. With it, you can create
                  stunning images of your products or ideas.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-warning text-center rounded-pill"
                    >Read now</a
                  >
                </div>
              </div>
            </div>
            <div class="card swiper-slide">
              <img src="../../assets/img3.png" class="card-img-top" alt="..." />
              <div class="card-body bg-dark">
                <p class="card-p">Category</p>
                <h5 class="card-title">How AI has changes the way of living</h5>
                <p class="card-text">
                  It is an AI image generator tool. With it, you can create
                  stunning images of your products or ideas.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-warning text-center rounded-pill"
                    >Read now</a
                  >
                </div>
              </div>
            </div>
            <div class="card swiper-slide">
              <img src="../../assets/img3.png" class="card-img-top" alt="..." />
              <div class="card-body bg-dark">
                <p class="card-p">Category</p>
                <h5 class="card-title">How AI has changes the way of living</h5>
                <p class="card-text">
                  It is an AI image generator tool. With it, you can create
                  stunning images of your products or ideas.
                </p>
                <div class="text-center">
                  <a href="#" class="btn btn-warning text-center rounded-pill"
                    >Read now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="swiper-button-next swiper-navBtn"></div>
      <div class="swiper-button-prev swiper-navBtn"></div> -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'MainContent',
  mounted() {
    new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  },
};
</script>

<style scoped>
#home {
  margin-top: 35%;
}

.bg-img-txt {
  position: relative;
  padding-top: 20%;
}
.bg-img {
  /* background-repeat: no-repeat;
  background-size: contain; */
  width: 100% !important;
  height: auto;
}

.rounded-pill {
  padding: 10px;
}

.img-div {
  position: absolute;
  width: 100% !important;
  height: auto;
}

@media only screen and (max-width: 576px) {
  .img-div {
    width: 576px !important;
    height: auto;
  }
}

.indicate {
  font-size: 18px;
  color: var(--orange);
  font-weight: 800;
}

.ai-txt {
  color: transparent;
  
  font-style: normal;
  font-weight: 600;
  font-size: 8vw;
  line-height: 150%;
  -webkit-text-stroke: 3px white;
}

.generator-txt {
  
  font-style: normal;
  font-weight: 500;
  font-size: 2vw;
  color: white;
}

.fus-p {
  border: 2px solid black;
  border-radius: 25px;
  padding: 0.3% 8%;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  color: #ffffff;
  position: relative;
}

.fus-p-mt {
  /* padding-top: 320px !important; */
  margin-top: 200px;
  position: relative;
  left: 20%;
}

.baked-txt {
  padding-top: 20px;
  color: white;
  
  font-style: normal;
  font-weight: 600;
  font-size: 8vw;
  /* position: relative; */
  /* left: 20%; */
}

.txt1-row {
  /* margin-top: 20%; */
}

.box {
  width: 500px;
}

.input-gen {
  display: inline-block;
  font-size: 17px;
  box-sizing: border-box;
  transition: 0.5s;
}

input::placeholder {
  font-size: 17px;
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
  font-size: 22px;
  text-decoration: none;
}

.btn2:hover {
  background: var(--orange);
  border: 2px var(--orange) solid;
  border-radius: 25px 25px 25px 25px;
  color: black;
  transition: 0.2s;
}

.input-gen[type='text'] {
  /* background: white; */
  width: 350px;
  height: 50px;
  border: 2px var(--orange) solid;
  outline: none;
  padding: 0 25px;
  border-radius: 25px 0 0 25px;
}

.input-gen[type='submit'] {
  border-radius: 0 25px 25px 0;
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  background: var(--orange);
  color: black;
}

.input-gen[type='submit']:hover {
  background: rgb(221, 188, 41);
}

.top-m {
  margin-top: 100px;
}

.text-to {
  
  color: var(--orange);
  font-style: normal;
  font-weight: 600;
  font-size: 58px;
}

.convert-txt {
  
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
}

/*  */
.input-mt {
  margin-top: 70px;
}

.inp {
  border: 2px solid var(--orange);
  border-radius: 40px;
  outline: #edb731;
  /* padding: 40px; */
  padding-left: 50px;
  width: 50%;
  height: 5.7vw;
}

.ip-btn {
  background: var(--orange);
  border: 2px var(--orange) solid;
  border-radius: 0px 40px 40px 0px;
  padding: 1.4vw 2.2vw 1.5vw 2vw;
  margin-left: -45px;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1.7vw;
  line-height: 150%;
  position: relative;
}

.ip-btn:hover {
  background-color: #f7c954;
}
/* ::placeholder {
  
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #afafaf;
} */

.custom-con {
  margin-top: 100px;
  margin-left: 10%;
  margin-right: 10%;
}

.prompt {
  
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
}

.sug-1 {
  background-color: var(--orange);
  border-radius: 20px;
  width: 32% !important;
  padding: 10px;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
}

.sug-2 {
  background-color: var(--orange);
  border-radius: 20px;
  padding: 10px;
  margin-left: 1%;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
}

.sug-3 {
  background-color: var(--orange);
  border-radius: 20px;
  padding: 10px;
  width: 64% !important;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
}

.sug-4 {
  background-color: var(--orange);
  border-radius: 20px;
  padding: 10px;
  margin-left: 1%;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
}

.sug-5 {
  background-color: var(--orange);
  border-radius: 20px;
  padding: 10px;
  margin-top: 100px;
  margin-left: 1%;
  
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
}

/* sec-2 */

.sec-2 {
  margin-top: 150px;
}

.created-by {
  
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
}

.mr-jony {
  
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
}

.y-bg {
  background-color: var(--orange);
  padding-left: -100px !important;
  padding-right: -100px !important;
}

.describe-txt {
  
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
}

.loved-it {
  margin-top: 70px;
}

.loved-it p {
  
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
}

.loved-it button {
  background-color: var(--orange);
  border: none;
  padding: 10px 90px 10px 90px;
  border-radius: 25px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
}

.sugg-here {
  padding-left: 15px;
}

/* sec-3 */

.sec-3 {
  margin-top: 150px;
}

.our-pics {
  position: relative;
}

.baked-ai {
  position: relative;
  top: 0;
  left: 0;
}
.baked-ai2 {
  position: absolute;
  top: 310px;
  left: 53%;
}

.journey-txt {
  margin-top: 60px;
}

.journey-txt h3 {
  
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;

  color: var(--orange);
}

.journey-txt p {
  
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: black;
}

.baked-mt {
  margin-top: 100px !important;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

.slide-container {
  max-width: 1120px;
  width: 100%;
  padding: 10px 0;
}
.slide-content {
  margin: 0 40px;
  overflow: hidden;
  border-radius: 5px;
}
.card {
  border-radius: 25px;
  background-color: #fff;
}
.image-content,
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 14px;
}
.image-content {
  position: relative;
  row-gap: 5px;
  padding: 25px 0;
}
.overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: orange;
  border-radius: 25px 25px 0 25px;
}
.overlay::before,
.overlay::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -40px;
  height: 40px;
  width: 40px;
  background-color: orange;
}
.overlay::after {
  border-radius: 0 25px 0 0;
  background-color: #fff;
}
.card-image {
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #fff;
  padding: 3px;
}
.card-image .card-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid orange;
}
.name {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}
.description {
  font-size: 14px;
  color: #707070;
  text-align: center;
}
.button {
  border: none;
  font-size: 16px;
  color: #fff;
  padding: 8px 16px;
  background-color: orange;
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background: orange;
}

.swiper-navBtn {
  color: orange !important;
  transition: color 0.3s ease;
}
.swiper-navBtn:hover {
  color: orange !important;
}
.swiper-navBtn::before,
.swiper-navBtn::after {
  font-size: 35px;
}
.swiper-button-next {
  /* left: 0;
  top: 0px; */
}
.swiper-button-prev {
  /* left: 0;
  top: 0px; */
}
.swiper-pagination-bullet {
  background-color: orange !important;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: orange;
}

@media screen and (max-width: 768px) {
  .slide-content {
    margin: 0 10px;
  }
}

.card-p {
  
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 150%;
  color: white;
}

.card-title {
  
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #edb731;
}

.card-text {
  
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
}

.latest-txt h1 {
  font-family: 'Poppins', sans-serif;
  color: var(--orange);
  font-style: normal;
  font-weight: 600;
  font-size: 58px;
}

:root {
  --orange: #edb731;
}

.update-txt {
  
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
}

.slider-txt {
  margin-bottom: 100px;
}

.sec-4 {
  margin-top: 180px;
  min-height: 90vh;
  position: relative;
}
</style>
