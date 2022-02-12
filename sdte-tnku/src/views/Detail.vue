<template>
    <div class="container">
            <div class="mt-5"><h1><b>{{place_name}}</b></h1></div>
            <div class="row mt-3">
                <div class="col-7">
                    <img :src="image_url" class="w-100 rounded">
                </div>
                <div class="col-5">
                    <span><b style="font-size:24px">คะแนน : {{score}}/5.00</b></span><br>
                    <span>&emsp;&emsp; {{detail}}</span><br>
                    <span><b>Contact : {{contact}}</b></span>
                   <div class="mt-3">
                       <a href="https://google.com" target="_blank">แผนที่</a>
                    </div>
                </div>
            </div>

            <!--Reviews area-->
            
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            place_name:"",
            place_id:"P03000001",
            score: 0.0,
            detail: "",
            lat:0,
            lon:0,
            contact: "-",
            image_url: "",
        }
    },
    created(){
        this.place_id = this.$route.params.place_id;
        let header = {
            "Accept-Language" : "TH",
            "Authorization" : "Bearer " + process.env.VUE_APP_API_KEY,
        }
        axios.get("https://tatapi.tourismthailand.org/tatapi/v5/attraction/" + this.place_id,{headers:header})
        .then(res => {
            this.place_name = res.data.result.place_name
            this.lat = res.data.result.latitude
            this.lon = res.data.result.longitude
            this.detail = res.data.result.place_information.detail
            this.image_url = res.data.result.thumbnail_url
            this.contact = res.data.result.contact.phones[0]
        })
    },
}
</script>

<style>

</style>
