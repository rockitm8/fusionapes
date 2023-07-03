<template>
  <div class="feedback-area">
    <!-- <div class="container-lg container-fluid feedback-contain">
      <div class="background-feedback">
        <img class="feedback-pic" src="../../assets/sunset.png" />
        <h1 class="feedback-hd">We Need Your Valuable Feedback</h1>
      </div>
    </div>

    <div class="container form-contain">
      <div class="sendFeedback-bg">
        <div class="send-feedback">
          <h3 class="form-hd">Send Your Feedback</h3>
        </div>
        <div class="row pt-4">
          <div class="col-sm-6 col-12">
            <label for="exampleInputEmail1" class="form-texts"
              >FIRST NAME
            </label>
            <input
              type="email"
              class="boxes name-boxes"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <br />
          </div>
          <div class="col-sm-6 col-12 px-sm-4">
            <label for="exampleInputEmail1" class="form-texts"
              >LAST NAME
            </label>
            <br />
            <input
              type="email"
              class="boxes name-boxes"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <br />
          </div>
        </div>
        <label for="exampleInputEmail1" class="form-texts pt-4">EMAIL </label>
        <br />
        <input
          type="email"
          class="boxes emailMSG-box"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <br />
        <label for="exampleFormControlTextarea1" class="form-texts pt-4"
          >MESSAGE
        </label>
        <br />
        <input
          type="email"
          class="boxes msg-boxes"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <br />
        <button type="button" class="send-btn">Send</button>
      </div>
    </div> -->

    <div class="container">
      <div class="row first-row">
        <img class="top-img img-fluid" src="../../assets/sunset.png" alt="" />
        <h1 class="gallery-hd">We Need Your Valuable Feedback</h1>
      </div>

      <div class="form-contain row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 col-12">
          <div class="sendFeedback-bg">
            <div class="send-feedback">
              <h3 class="form-hd">Send Your Feedback</h3>
            </div>
            <!-- <div class="row pt-4">
            <div class="col-sm-6 col-12">
              <label for="exampleInputEmail1" class="form-texts"
                >FIRST NAME
              </label>
              <input
                type="email"
                class="boxes name-boxes"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <br />
            </div>
            <div class="col-sm-6 col-12 px-sm-4">
              <label for="exampleInputEmail1" class="form-texts"
                >LAST NAME
              </label>
              <br />
              <input
                type="email"
                class="boxes name-boxes"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <br />
            </div>
          </div> -->
            <label for="exampleInputEmail1" class="form-texts pt-4"
              >Username
            </label>
            <br />
            <input
              type="text"
              class="boxes emailMSG-box"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <br />
            <label for="exampleFormControlTextarea1" class="form-texts pt-4"
              >MESSAGE
            </label>
            <br />
            <input
              type="email"
              class="boxes msg-boxes"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <br />
            <button type="button" class="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackArea',
};
</script>

<style scoped>
.top-img {
  width: 100%;
  height: 196px;
  margin-top: 20px;
}

.gallery-hd {
  color: white;
  text-align: center;
  margin-top: -125px;
  font-weight: 600;
  font-size: 2.5rem;
}

.feedback-contain {
  width: 83%;
  height: 310px;
  padding-top: 20px;
  margin-left: 240px;
}

.feedback-pic {
  width: 100%;
  height: 196px;
  border-radius: 5px;
}

.feedback-hd {
  color: #ffffff;
  text-align: center;
  margin-top: -135px;
  font-weight: 600;
  font-size: 36px;
}

/* form area */

.form-contain {
  /* margin-left: 10%; */
  /* width: 50%; */
}

.sendFeedback-bg {
  border-radius: 6px;
  background-color: #222222;
  width: 100%;
  height: auto;
  padding: 32px;
  margin-top: 50px;
  /* margin-left: 37%; */
  /* margin-bottom: 50px; */
}

.form-hd {
  color: #edb731;
  font-size: 20px;
}

.form-texts {
  font-size: 14px;
  font-weight: 400;
  color: #edb731;
  padding-bottom: 5px;
}

.boxes {
  height: 40px;
  background-color: #363636;
  border: solid 1px #363636;
  border-radius: 5px;
  padding: 8px;
  color: white;
}

.boxes:focus {
  border-color: #363636;
  outline: none;
}

.name-boxes {
  width: 234.5px;
}

.emailMSG-box {
  width: 100%;
}

.msg-boxes {
  width: 100%;
  height: 100px;
}

/* form area (btn) */

.send-btn {
  margin-top: 33px;
  /* margin-left: 120px; */
  width: 100%;
  height: 40px;
  color: black;
  background-color: #edb731;
  border: solid 1px #edb731;
  border-radius: 23px;
}

@media only screen and (max-width: 768px) {
  .gallery-hd {
    font-size: 20px;
  }
}
</style>
