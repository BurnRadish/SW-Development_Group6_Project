<template>
  <div class="result-page">
    <h1>ผลลัพธ์การค้นหา "{{this.keyword}}"</h1>  
    <div v-for="item in info" v-bind:key="item.place_id" class="card card-style" style="background-color: #DCDCDC;" @click="sentInfo(item.place_id)">
      <div class="row">
        <div class="col-3">
          <img v-if="item.thumbnail_url !== ''" class="img-style" :src="item.thumbnail_url" alt=""/>
          <img v-if="item.thumbnail_url === ''" class="img-style" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg" alt=""/>
        </div>
        <div class="col-9" style="padding: 25px">
          <h4><b>ร้าน : </b>{{item.place_name}}</h4>
          <h4><b>คะแนน : </b>-/5</h4>
          <h4><b>ที่อยู่ : </b>{{item.location.address}} {{item.location.sub_district}} {{item.location.district}} จังหวัด{{item.location.province}} {{item.location.postcode}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Result',
    data () {
      return {
        keyword: this.$route.params.keyword,
        latitude: '',
        longitude: '',
        geolocation: '',
        categorycodes: this.$route.params.type,
        token: process.env.VUE_APP_API_KEY,
        info: null
      }
    },
    created () {
      this.getlocation();
      this.getInfo();
    },
    methods:{
      sentInfo(placeid){
        this.$router.push({ path: `/detail/${placeid}/${this.categorycodes}` });
      },
      getlocation(){
        navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude.toString(),
            this.longitude = position.coords.longitude.toString()
            this.geolocation = this.latitude.concat(',', this.longitude)
            console.log('latitude:', this.latitude);
            console.log('longtitude:', this.longitude);
            console.log('geolocation of LO, LA:', this.geolocation)
          },
          error => {
            console.log(error.message);
          },
        )
      },
      getInfo(){
        axios
        .get('https://tatapi.tourismthailand.org/tatapi/v5/places/search', 
        { headers: {
          "Authorization": 'Bearer ' + this.token,
          "Accept-language": "TH"
          },
          params: {
            "keyword": this.keyword,
            "geolocation": this.geolocation,
            "categorycodes": this.categorycodes,
          }
        })
        .then(response => {
          this.info = response.data.result;
          //console.log("response from API: ", this.info);
          }
        )
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');
  .result-page{
    margin: 2.5%;
    font-family: 'Prompt', sans-serif;
  }
  .card-style{
    padding: 15px;
    margin-top: 25px;
    margin-inline: 5%;
  }
  .img-style{
    border-radius: 10px;
    padding: 7.5px;
    width: 100%;
    height: auto;
  }
</style>