
<template>
  <slot>
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
          <h2 style=" width: 73%; max-height: 120px; font-size: 2.7vw;" >Find The Best Fashion Style For You </h2>
          <p style="font-size: 1vw; width: 80%; max-height: 120px;" >
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa
             qui officia deserunt mollit anim id est laborum.
          </p>
          <button id="moredetails">More details</button>
        </div>
        <div class="image"></div>
      </div>
      <div class="collections-wrapper">
         <center>
         <h2 >New Collection</h2>
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
      </div>
    </div>
  </main>

  <footer>
    <center>
      <div class="information">
          <div class="infor-image"></div>
          <div class="infor-text">
            <h1 style=" width: 73%; max-height: 120px; font-size: 3vw;" >Best Fashion Since 2014 </h1>
              <p style="font-size: 1vw; width: 80%; max-height: 120px;" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
              </p>
          </div>
      </div>
    </center>
  </footer>
  </slot>
</template>

<script>

export default {
  name: 'Product',
  data() {
    return {}
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
  width: 40%;
  font-size: 20px;
}

#moredetails{
  width: 30%;
  height: 40px;
  border: none;
  background-color:rgb(141, 141, 141);
  border: 1.4px solid black;
  color: rgb(8, 8, 8);
  /* font-weight: bold; */
  margin-left: 20px;
  font-size: 1vw;
}
.image{
  background-color: rgb(141, 141, 141);
  height: 350px;
  width: 40%;
  border-bottom-left-radius: 90px;
}

.collections-wrapper{
  /* border-bottom: 2px solid grey; */
  background-color: whitesmoke;
  height: 420px;
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

/* footer */
.information{
  display: flex;
  justify-content: space-around;
  padding-top: 10%;
  height: 500px;
  /* width: 70%; */
  /* margin-top: 40px; */
  background-color: whitesmoke;

}

.infor-image{
  width: 30%;
  height: 400px;
  background-color: rgb(141, 141, 141);
  border-top-left-radius: 90px;
}

.infor-text{
  width: 30%;
  height: 400px;
  background-color: rgb(141, 141, 141);
  text-align: left;
}


</style>





