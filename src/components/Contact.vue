
<template>
  <main>
    <navigation>
      <center>
        <div class="nav-bar">
        <div class="companyName">
          <div><h3>UnCommon</h3></div>
        </div>
        <div class="nav-links">
          <div><router-link to="/">Home</router-link></div>
          <div><router-link to="/Product">Product</router-link></div>
          <div><router-link to="/About">About</router-link></div>
          <div><router-link to="/Contact">Contact</router-link></div>
        </div>
      </div>
      </center>
    </navigation>
    <div class="main-wrapper">
        <div class="introduction">
          <div class="email">
            <form action="">
              <h2>Contact us </h2>
              <p style="font-size: 0.8vw; font-style: italic;">Feel free to contact us anytime. We will get back to you as soon as we can...</p>
              <div><input type="text" placeholder="Name"/></div> <br>
              <div><input type="email" placeholder="Email Address"/></div><br>
              <div><textarea name="" id="" cols="30" rows="10"></textarea></div><br>
              <div><button type="submit">Send Message</button></div>
            </form>
          </div>
          
          <div class="contact-infor">
            <h2>Information</h2>
            <div id="socials" class="instagram"><img src="@/assets/images/instagram.png" alt=""><a href="">@un-popular</a></div><br>
            <div id="socials" class="tiktok"> <img src="@/assets/images/tiktok.png" alt=""><a href="">@un-popular</a></div><br>
            <div id="socials" class="facebook"><img src="@/assets/images/pinterest.png" alt=""><a href="">-UnPopular</a></div><br>
            <div id="socials" class="threads"><img src="@/assets/images/threads.png" alt=""><a href="">@un-popular</a></div><br>
            <div style="font-size: 1vw;" id="socials" class="phone"><img src="@/assets/images/phone.png" alt=""> +263 667 889 223</div><br>
            <div style="font-size: 1vw;" id="socials" class="location"><img src="@/assets/images/location.png" alt=""> 1528 Mainway Meadows Waterfalls Harare  </div><br>

          </div>
        </div>
        <div class="collections-wrapper">
          <div class="about-collections">

          </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Contact',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style scoped>
*{
  padding-left: 20px;
  padding-right: 20px;
  font-family: Arial, Helvetica, sans-serif;


}
.nav-bar{
  display: flex;
  height: 68px;
  /* width: 95%; */
  place-self: center;
  justify-content: space-between;
  /* border-bottom: 2px solid grey; */
  background-color: rgb(190, 187, 187);
  /* margin-left: 1.24%;
  margin-right: 1.24%; */
  

}

.nav-links{
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin-top: 20px;
  margin-right: 50px;
  font-size: 1vw;
}

a{
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-weight: bold;
}

a:hover{
  text-decoration: underline 2px solid;
  transition: 0.9s;
}

/* main */

.introduction{
  padding-top: 40px;
  margin-top: -3%;
  display: flex;
  justify-content: space-between;
  background-color: rgb(190, 187, 187);
  height: 420px;
}
.email{
  background-color: rgb(141, 141, 141);
  height: 550px;
  width: 50%;
  font-size: 20px;
}

img{
  width: 5%;
}

.contact-infor{
  position: relative;
  background-color: rgb(141, 141, 141);
  height: 350px;
  width: 30%;
}

#socials a{
  text-decoration:none;
  font-size: 1vw;
  font-weight: lighter;
}

#socials a:hover{
  color: rgb(150, 213, 238);
  transition: 0.2s;
}

input{
  border: none;
  background-color:transparent;
  border-bottom: 2px solid rgb(24, 23, 23);
  height: 30px;
  width: 60%;
}

textarea{
  resize: vertical;
  width: 60%;
  background-color:transparent;
}

button{
  width: 30%;
  height: 40px;
  border: none;
  background-color:rgb(141, 141, 141);
  border: 1.4px solid black;
  color: rgb(8, 8, 8);
  font-size: 1vw;
}

button:hover{
  background-color: black;
  color: white;
  transition: 0.9s;
}
.collections-wrapper{
  /* border-bottom: 2px solid grey; */
  background-color: whitesmoke;
  height: 200px;
  margin-top:-3% ;
  padding-top: 3%;
}


</style>
