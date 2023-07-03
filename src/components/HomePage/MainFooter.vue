<template>
  <div class="main-footer">
    <footer>
      <div class="row">
        <div class="col-lg-6 col-12 mt-5 text-center">
          <img src="../../assets/logo-footer.png" alt="" />
        </div>
        <div class="col-lg-2 col-12"></div>
        
        <div class="col-lg-2 col-md-6 col-12 text-lg-start text-center">
          <ul>
            <li class="list-headings">Heading</li>
            <li><a href="" class="bot-links">Privacy Policy</a></li>
            <li><a href="" class="bot-links">Terms & Conditions</a></li>
            <li><a href="" class="bot-links">FAQs</a></li>
            <li><a href="" class="bot-links">About</a></li>
            <li><a href="" class="bot-links">Blog</a></li>
            <li><a href="" class="bot-links">Contacts</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12 text-center mt-5 foot-text">
          <span class="copyright-txt">© 2023 Fusion Apes</span>
        </div>
        <div class="col-lg-6 col-12 my-auto">
          <div class="foot-icons text-center">
            
            <a href="#" class="fa fa-instagram social-links"></a>
            <a href="#" class="fa fa-linkedin social-links"></a>
            <a href="#" class="fa fa-twitter social-links"></a>
            <a href="#" class="fab fa-discord social-links"></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
};
</script>

<style scoped>
/* Twitter */
.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  color: white;
}

.fa-discord {
  background: #7289DA;
  color: white;
  padding: 10px;
  font-size: 28px;
  border-radius: 50%;
}

footer {
  margin-top: 200px;
  background-color: #222222;
  overflow: hidden;
}

.bot-links:hover {
  color: var(--orange);
  text-decoration: underline;
}

footer ul {
  margin-top: 40px;
}

footer ul li {
  list-style: none;
  margin-bottom: 20px;
}

.social-links {
  margin-right: 10px;
}

.copyright-txt {
  color: var(--orange);
}

.list-headings {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #edb731;
  margin-bottom: 20px;
}

footer a {
  text-decoration: none;
  color: white;
  font-style: 'roboto';
}

footer a:hover {
  color: rgb(218, 218, 218);
}

.foot-ul li a {
  color: #edb731;
  font-size: 14px;
}

.foot-ul li a:hover {
  color: #fcca4d;
}

.foot-text a {
  color: #edb731;
  font-size: 14px;
}

.foot-text a:hover {
  color: #fcca4d;
}

.fa {
  margin-top: 20px;
  padding: 10px;
  font-size: 30px;
  text-decoration: none;
  border-radius: 50%;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

</style>
