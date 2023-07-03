<template>
  <div class="chat-area container">
    <div class="box">
      <div class="input-group row">
        <input
          type="email"
          class="form-bar"
          id="exampleInputEmail1"
          placeholder="Describe your imagination"
          aria-describedby="emailHelp"
        />
        <button type="button" class="generate-btn">Generate</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatArea',
  components: {},
};
</script>

<style scoped>
.chat-area {
  height: 100vh;
  /* position: relative; */
  padding: 30px 25px 0 20px;
}
.box {
  /* position: absolute; */
  border: 2px solid black;
  border-radius: 5px;
  width: 100%;
  height: 95%;
  /* margin-top: 2%; */
  position: relative;
}

.input-group {
  position: absolute;
  bottom: 0;
  left: 15%;
  /* top: 700px;
  left: 10%; */
}

.form-bar {
  width: 50%;
  height: 66px;
  font-size: 1.5vw;
  padding-left: 40px;
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  border: solid 2px #edb731;
  margin-bottom: 5%;
  min-width: 120px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

@media only screen and (max-width: 768px) {
  .form-bar {
    width: 50%;
    height: 30px;
    font-size: 2vw;
  }
}

.form-bar:focus {
  outline: none;
}

/* search bar (btn) */

.generate-btn {
  min-width: 50px;
  margin-bottom: 5%;
  width: 15%;
  color: black;
  font-size: 1.5vw;
  font-weight: 600;
  background-color: #edb731;
  border: solid 1px #edb731;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
</style>
