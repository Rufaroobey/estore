
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
        <div class="text">
          <h2 style=" width: 73%; max-height: 120px; font-size: 2vw;">Aesthetic And Authentic Products</h2>
          <p style="font-size: 1vw; width: 80%; max-height: 120px;" >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        
        <div class="about">
          <center>
            <h2>Background</h2>
            <p style= "width: 80%; " >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
           
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
            </p>
          <p style= "width: 80%; " >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
          </p><br>

          <h2>Vision</h2>
            <p style= "width: 80%; " >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
          </p><br>

          <h2>Mision</h2>
            <p style= "width: 80%; " >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
          </p><br>

          <h2>Values</h2>
            <p style= "width: 80%; " >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
          </p><br>

          <h2>To Our Customers</h2>
            <p style= "width: 80%; " >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
          </p><br>
          </center>
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
  name: 'About',
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
  height: 460px;
}
.text{
  background-color: rgb(141, 141, 141);
  height: 350px;
  width: 25%;
  font-size: 20px;
}

.about{
  position: relative;
  background-color: rgb(141, 141, 141);
  height: 900px;
  width: 55%;
  font-size: 0.8vw;
}



.collections-wrapper{
  /* border-bottom: 2px solid grey; */
  background-color: whitesmoke;
  height: 500px;
  margin-top:-3% ;
  padding-top: 3%;
}

.about-collections{
  background-color: rgb(141, 141, 141);
  height: 440px;
  width: 30%;

}
</style>

