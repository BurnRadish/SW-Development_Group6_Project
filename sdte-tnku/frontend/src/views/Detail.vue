<template>
    <div class="container">
            <div class="mt-5"><h1><b>{{place_name}}</b></h1></div>
            <div class="row mt-3">
                <div class="col-7">
                    <img :src="image_url" class="w-100 rounded" v-if="image_url.length > 0">
                    <img src="https://www.poynter.org/wp-content/uploads/2021/09/shutterstock_1563012205.png" class="w-100 rounded" v-else>
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
            <div class="container">
                <div class="row">
                    <div class="col-3" v-for="(comment, index) in comment" :key="index">
                        <Review :name="comment.name" :msg="comment.comment" :score="comment.rating"></Review>
                    </div>
                    
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import Review from '../components/ReviewBox.vue'
export default {
    components:{
        Review,
    },
    data(){
        return{
            type: '',
            place_name:"",
            place_id:"P03000001",
            score: 0.0,
            detail: "",
            lat:0,
            lon:0,
            contact: "-",
            image_url: "",
            comment: [],
        }
    },
    created(){
        this.place_id = this.$route.params.place_id;
        this.type = this.$route.params.type;
        let header = {
            "Accept-Language" : "TH",
            "Authorization" : "Bearer " + process.env.VUE_APP_API_KEY,
        }

        axios.get("http://localhost:9000/getcomments/123456").then((res)=>{
                console.log(res.data)
                this.comment = res.data
                console.log(this.comment)
        });

        if(this.type == "RESTAURANT"){
            axios.get("https://tatapi.tourismthailand.org/tatapi/v5/restaurant/" + this.place_id,{headers:header})
            .then(res => {
                this.place_name = res.data.result.place_name
                this.lat = res.data.result.latitude
                this.lon = res.data.result.longitude
                this.detail = res.data.result.place_information.detail
                this.image_url = res.data.result.thumbnail_url
                this.contact = res.data.result.contact.phones[0]
            })
        } else if (this.type == "ACCOMMODATION"){
            axios.get("https://tatapi.tourismthailand.org/tatapi/v5/accommodation/" + this.place_id,{headers:header})
            .then(res => {
                this.place_name = res.data.result.place_name
                this.lat = res.data.result.latitude
                this.lon = res.data.result.longitude
                this.detail = res.data.result.place_information.detail
                this.image_url = res.data.result.thumbnail_url
                this.contact = res.data.result.contact.phones[0]
            })
        } else if (this.type == "ATTRACTION"){
            axios.get("https://tatapi.tourismthailand.org/tatapi/v5/attraction/" + this.place_id,{headers:header})
            .then(res => {
                this.place_name = res.data.result.place_name
                this.lat = res.data.result.latitude
                this.lon = res.data.result.longitude
                this.detail = res.data.result.place_information.detail
                this.image_url = res.data.result.thumbnail_url
                this.contact = res.data.result.contact.phones[0]
            })
        }
    },
}
</script>

<style>

</style>
