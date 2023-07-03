<template>
  <div class="new-nfts">
    <div class="background close top-gap">
      <div class="container">
        <div class="logo-size">
          <div class="logo-text for-closing">
            <i class="fa fa-filter" style="font-size: 24px"
              ><span class="filter-txt p-3">Filters</span></i
            >
          </div>
        </div>
        <div>
          <i
            style="color: white"
            class="fa-solid fa-arrow-right toggle-icon toggle"
          ></i>
        </div>

        <div class="slider-bars for-closing">
          <div class="slidecontainer">
            <span class="slide-text">Price</span>
            <input
              type="range"
              min="1"
              max="100"
              value="0"
              class="slider mt-3"
              id="price"
            />
          </div>
          <div class="slidecontainer">
            <span class="slide-text">Any other</span>
            <input
              type="range"
              min="1"
              max="100"
              value="0"
              class="slider mt-3"
              id="any-other"
            />
          </div>
          <div class="slidecontainer">
            <span class="slide-text mb-5">Any other</span>
            <input
              type="range"
              min="1"
              max="100"
              value="0"
              class="slider mt-3"
              id="myRange"
            />
          </div>
          <div class="radio-btns">
            <div>
              <label class="radio-container">
                <span class="radio-txt">Filter Option</span>
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="radio-container"
                ><span class="radio-txt =">Filter Option</span>
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="radio-container"
                ><span class="radio-txt">Filter Option</span>
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <label class="radio-container"
                ><span class="radio-txt">Filter Option</span>
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="latest-nfts-contain">
        <h1 class="latest-nfts-txt top-gap">Latest NFTs</h1>
        <div class="search-txt row">
          <div
            class="col-lg-6 col-12 text-lg-start text-center newest-txt mb-lg-0 mb-4"
          >
            <span>The Newest Nfts</span>
          </div>
          <div
            class="searchBAR-btn col-lg-6 col-12 text-lg-end text-center mb-5"
          >
            <input
              type="text"
              class="search-bar nosubmit"
              placeholder="Search"
            />
          </div>
        </div>
        <div class="container" style="margin-top: 100px">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12  img-mb">
              <img src="../../assets/img-ape.jpg" alt="" />
              <div class="mt-2">
                <span class="my-creation-txt"
                  >My creations <span class="eth-txt"> 0.3 Eth</span></span
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12  img-mb">
              <img src="../../assets/img-ape.jpg" alt="" />
              <div class="mt-2">
                <span class="my-creation-txt"
                  >My creations <span class="eth-txt"> 0.3 Eth</span></span
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 img-mb">
              <img src="../../assets/img-ape.jpg" alt="" />
              <div class="mt-2">
                <span class="my-creation-txt"
                  >My creations <span class="eth-txt"> 0.3 Eth</span></span
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12  img-mb">
              <img src="../../assets/img-ape.jpg" alt="" />
              <div class="mt-2">
                <span class="my-creation-txt"
                  >My creations <span class="eth-txt"> 0.3 Eth</span></span
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12  img-mb">
              <img src="../../assets/img-ape.jpg" alt="" />
              <div class="mt-2">
                <span class="my-creation-txt"
                  >My creations <span class="eth-txt"> 0.3 Eth</span></span
                >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12  img-mb">
              <img src="../../assets/img-ape.jpg" alt="" />
              <div class="mt-2">
                <span class="my-creation-txt"
                  >My creations <span class="eth-txt"> 0.3 Eth</span></span
                >
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
  name: 'NewNfts',
  mounted() {
    const body = document.querySelector('body'),
      background = body.querySelector('.background'),
      toggle = body.querySelector('.toggle');

    toggle.addEventListener('click', () => {
      background.classList.toggle('close');
    });
  },
  components: {},
};
</script>

<style scoped>
.top-gap {
  margin-top: 8%;
}
/* navbar backgroun color */
.background {
  background-color: white !important;
  width: 228px;
  height: 100%;
  position: fixed;
  border-right: 1px solid rgb(236, 236, 236);
}

/* navbar logo */

.logo-size {
  /* padding-top: 100px !important; */
  margin-left: 50px;
  width: 93px;
  height: 5%;
}

.logo-text {
  color: #edb731;
}
.filter-txt {
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}

/* navbar elements texts and icons */
.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 8px;
  border-radius: 5px;
  background: black;
  outline: none;
  margin-left: 20px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 13px;
  height: 23px;
  border-radius: 15%;
  background: #edb731;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;

  cursor: pointer;
}

.slider-bars {
  margin-top: 0px !important;
}

.slidecontainer {
  margin-top: 7%;
}

.slide-text {
  color: black;
  padding-bottom: 100px !important;
  margin-left: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}

/*  */

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
  margin-top: 90px;
  margin-left: 30px;
  width: 157px;
  height: 40%;
}

@media only screen and (max-width: 992px) {
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

.radio-container {
  margin-bottom: 20px !important;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-container input {
  /* position: absolute; */
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 20%;
  border: 1px solid black;
}

/* On mouse-over, add a grey background color */
.radio-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: white;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 12px;
  height: 12px;
  border-radius: 10%;
  background: #edb731;
}

.radio-btns {
  margin-top: 50px;
  margin-left: 20px !important;
}

.radio-txt {
  position: relative;
  top: -6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
}
.latest-nfts-txt {
  padding-top: 6%;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 150%;
  align-items: center;
  text-align: center;
}

.latest-nfts-contain {
  height: 395px;
  padding-top: 20px;
  /* margin-left: 130px !important; */
  margin-left: 230px !important;
}

@media only screen and (max-width: 991px) {
  .latest-nfts-contain {
    height: 395px;
    padding-top: 20px;
    margin-left: 80px !important;
  }
}

.search-txt {
  margin-top: 100px;
}

.newest-txt {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
}

.search-bar {
  width: 50%;
  height: 36px;
  font-size: 16px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 43px;
  border-radius: 25px;
  border: solid 2px #000000;
}

@media only screen and (max-width: 991px) {
  .search-bar {
    width: 100%;
  }
}

.nosubmit {
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
}

input[type='text']::-webkit-input-placeholder {
  color: #edb731;
}

.eth-txt {
  margin-left: 13% !important;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #222222;
}

.my-creation-txt {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.02em;
  margin-left: -15px;
  color: #717171;
}

.img-mb {
  margin-bottom: 100px;
  padding: 0;
}


</style>
