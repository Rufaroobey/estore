
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
        <div><button id="cart"><img src="" alt="">View Cart</button></div>
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
        <div class="image">
          <div id="image-infor1">
        </div>
        </div>
        

        <div class="image">
          <div id="image-infor1">
            </div>
        </div>
        <div class="image">
          <div id="image-infor1">
            </div>
        </div>
      </div>
      <div class="collections-wrapper">
         <center>
         <h2 >Items on Collection</h2>
                  <p > Lorem ipsum dolor sit amet, 
                      consectetur adipiscing elit, 
                      sed do eiusmodor incididunt 
                      ut labore.
                  </p>
          </center>
         <div class="items">
          <div class="item"><button id="view">View</button></div>
          <div class="item"><button id="view">View</button></div>
          <div class="item"><button id="view">View</button></div>
          <div class="item"><button id="view">View</button></div>
         </div>
          <br> 
          <br>
          <br>
         <div class="items">
          <div class="item"><button id="view">View</button></div>
          <div class="item"><button id="view">View</button></div>
          <div class="item"><button id="view">View</button></div>
          <div class="item"><button id="view">View</button></div>
         </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Product',
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

<style  scoped>
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

.image{
  position: relative;
  background-color: rgb(141, 141, 141);
  height: 350px;
  width: 15%;
}

#image-infor1{
 
  background-color: white;
  width: 15%;
  height: 60px;
}

.collections-wrapper{
  /* border-bottom: 2px solid grey; */
  background-color: whitesmoke;
  height: 900px;
  margin-top:-3% ;
  padding-top: 3%;
}

.items{
  display: flex;
  justify-content: space-between;
}
.item{
  width: 15%;
  height: 300px;
  background-color: rgb(141, 141, 141);
  
}

#view{
  position: relative;
  width: 70%;
  height: 35px;
  border: 1.4px solid black;
  background-color:rgb(141, 141, 141);
  color: black;
  /* font-weight: bold; */
  font-size: 1vw;
  margin-top: 250px;
  margin-left: 15%;
}

#view:hover{
  transition: 0.9s;
  cursor: pointer;
  background-color: black;
  color: white;
}
</style>

