<template>
  <div class="gallery-area">
    <div class="container">
      <div class="row">
        <img class="top-img img-fluid" src="../../assets/sunset.png" alt="" />
        <h1 class="gallery-hd">Gallery</h1>
      </div>

      <div class="row second-row">
        <div class="col-md-2 col-12">
          <h5 class="folder-text">Your Folders</h5>
        </div>
        <div class="col-md-10 col-12 text-md-end">
          <div class="searchBAR-btn">
            <input
              type="text"
              class="search-bar nosubmit"
              placeholder="Search "
            />
            <button type="button" class="search-btn">Create New Folder</button>
          </div>
        </div>
      </div>

      <div class="row third-row">
        <div class="col-xl-4 col-md-6 col-12">
          <div class="img-info">
            <img class="img-creation" src="../../assets/img-ape.jpg" />
            <h3 class="img-hd">My Creations</h3>
            <p class="img-p">Description if any</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="img-info">
            <img class="img-creation" src="../../assets/img-ape.jpg" />
            <h3 class="img-hd">My Creations</h3>
            <p class="img-p">Description if any</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="img-info">
            <img class="img-creation" src="../../assets/img-ape.jpg" />
            <h3 class="img-hd">My Creations</h3>
            <p class="img-p">Description if any</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="img-info">
            <img class="img-creation" src="../../assets/img-ape.jpg" />
            <h3 class="img-hd">My Creations</h3>
            <p class="img-p">Description if any</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="img-info">
            <img class="img-creation" src="../../assets/img-ape.jpg" />
            <h3 class="img-hd">My Creations</h3>
            <p class="img-p">Description if any</p>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 col-12">
          <div class="img-info">
            <img class="img-creation" src="../../assets/img-ape.jpg" />
            <h3 class="img-hd">My Creations</h3>
            <p class="img-p">Description if any</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryArea',
};
</script>

<style scoped>
.top-img {
  width: 100%;
  height: 150px;
  margin-top: 20px;
}

.gallery-hd {
  color: #ffffff;
  text-align: center;
  margin-top: -115px;
  font-weight: 600;
  font-size: 3rem;
}

.searchBAR-btn {
  /* margin-left: 31.5%; */
  /* width: 60%; */
  /* padding-top: 100px; */
}

.folder-text {
  font-size: 23px;
}

.search-bar {
  width: 60%;
  height: 36px;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 43px;
  border-radius: 25px;
  border: solid 2px #000000;
  font-size: 17px;
}

.search-btn {
  width: 33%;
  height: 36px;
  border-radius: 23px;
  padding: 5px 12px 5px 12px;
  margin-left: 15px;
  background-color: #222222;
  border: solid 2px #222222;
  color: #edb731;
  font-size: 15px;
}

@media only screen and (max-width: 1200px) {
  .folder-text {
    font-size: 18px;
  }

  .search-bar {
    font-size: 14px;
  }

  .search-btn {
    font-size: 12px;
  }
}

@media only screen and (max-width: 992px) {
  .folder-text {
    font-size: 16px;
  }

  .search-bar {
    font-size: 14px;
  }

  .search-btn {
    font-size: 10px;
  }
}

@media only screen and (max-width: 576px) {
  .folder-text {
    font-size: 22px;
  }

  .search-bar {
    font-size: 14px;
  }

  .search-btn {
    font-size: 8px;
  }
}

.nosubmit {
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
}

.second-row {
  margin-top: 40px;
  margin-left: 10px;
}

.img-creation {
  width: 180px;
  height: auto;
  border-radius: 5px;
  /* margin-left: 22%; */
}

.img-hd {
  /* text-align: center; */
  font-size: 20px;
  padding-top: 15px;
  color: #222222;
}

.img-p {
  /* text-align: center; */
  font-size: 14px;
  color: #222222;
}

.third-row {
  margin-top: 80px;
  margin-left: 50px;
}

@media only screen and (max-width: 768px) {
  .third-row {
    margin-left: 120px;
  }
}
</style>
