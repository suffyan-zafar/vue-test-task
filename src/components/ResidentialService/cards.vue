<template>
    <div style="margin: 5% 7%">
      <div class="container2">
        <div style="display: flex; ">
            <img
              :src="require('../../assets/grocery-cart.svg')"
              alt="vector"
              class="vector-image"
              @click="openInNew"
            /> 
            <div>
                <p class="header">LUGGAGE</p>
                <p class="header2">I need a cart</p>
                <div style="display: flex;">
                    <p class="header3">Provided By</p>
                    <p class="header4">Twelve 12</p>
                </div>
            </div>
          
        </div>
      </div>
      <div class="container2">
        <div style="display: flex; ">
            <img
              :src="require('../../assets/vegetable.svg')"
              alt="vector"
              class="vector-image2"
              @click="openInNew"
            /> 
            <div>
                <p class="header">GROCERY</p>
                <p class="header2">I need help with my groceries</p>
                <div style="display: flex;">
                    <p class="header3">Provided By</p>
                    <p class="header4">Twelve 12</p>
                </div>
            </div>
          
        </div>
      </div>
      <div class="container2">
        <div style="display: flex; ">
            <img
              :src="require('../../assets/deliver.svg')"
              alt="vector"
              class="vector-image3"
              @click="openInNew"
            /> 
            <div>
                <p class="header">Delivery</p>
                <p class="header2">I need my package delivered </p>
                <div style="display: flex;">
                    <p class="header3">Provided By</p>
                    <p class="header4">Twelve 12</p>
                </div>
            </div>
          
        </div>
      </div>
      <div class="container2">
        <div style="display: flex; ">
            <img
              :src="require('../../assets/valet-parking.svg')"
              alt="vector"
              class="vector-image"
              @click="openInNew"
            /> 
            <div>
                <p class="header">Valet Parking</p>
                <p class="header2">I need Valet Parking</p>
                <div style="display: flex;">
                    <p class="header3">Provided By</p>
                    <p class="header4">Twelve 12</p>
                </div>
            </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Residential-Services-Card-Component",
  
    data() {
      return {
      };
    },
  };
  </script>
  
  <style scoped>
  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    background-color: white;
  }
  
  .header {
    font-size: 18px;
    color: #21437C;
    font-weight: bolder;
    margin-top: 20px;
    margin-bottom: 6px;
  }
  .header2{
    font-size: 18px;
    color: black;
    margin-bottom: 6px;
  }
.header3{
    font-size: 15px;
    color: #21437C;
    font-weight: bolder;
    margin-right: 10px;
    margin-bottom: 6px;
}
.header4{
    font-size: 15px;
    color: #21437C;
    font-weight: bolder;
    margin-bottom: 15px;
}
  .vector-image {
    width: 65px;
    height: 65px;
    margin-right: 50px;
    margin-top: 16px;
  }
  .vector-image2{
    width: 65px;
    height: 65px;
    margin-right: 40px;
    margin-top: 22px;
    margin-left: 30px;
  }
  .vector-image3{
    width: 65px;
    height: 65px;
    margin-right: 40px;
    margin-top: 22px;
    margin-left: 30px;
  }
  </style>
  