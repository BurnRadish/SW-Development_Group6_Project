<template>
    <div class="container">
            <div class="mt-5"><h1><b>{{place_name}}</b></h1></div>
            <div class="row mt-3">
                <div class="col-7">
                    <img :src="image_url" class="w-100 rounded" v-if="image_url.length > 0">
                    <img src="https://www.poynter.org/wp-content/uploads/2021/09/shutterstock_1563012205.png" class="w-100 rounded" v-else>
                </div>
                <div class="col-5">
                    <span>{{place_name}}</span>
                    <span><b style="font-size:24px">คะแนน : {{rating}}/5.00</b></span><br>
                    <span>&emsp;&emsp; {{detail}}</span><br>
                    <span><b>Contact : {{contact}}</b></span>
                   <div class="mt-3">
                       <a href="https://google.com" target="_blank">แผนที่</a>
                    </div>
                </div>
            </div>

            <!--Reviews area-->
            <div class="container mb-5">
                <h2 class="text-center" style="text-decoration: underline"><b>รีวิว</b></h2><hr>
                <div class="input-group-text">
                    <label class="input-group-text" for="inputGroupUser00"><b>โดย</b></label>
                    <input v-model="username" type="text" class="form-control" id="inputGroupSelectUser00" placeholder="User123...">
                </div><hr>
                <div class="input-group-text">
                    <label class="input-group-text" for="inputGroupText01"><b>คำค้นหา</b></label>
                    <input v-model="textReview" type="text" class="form-control" id="inputGroupSelectText01" placeholder="รีวิว...">
                    <button class="btn btn-success" @click="confirmReview()">รีวิว</button>
                </div><hr>
                <div class="row">
                    <div class="col-lg-6" v-for="item in reviewData" v-bind:key="item._id">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><b>โดย : </b>{{item.username}}</h5>
                                <hr>
                                <p class="card-text">{{item.textReview}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            username: '',
            type: '',
            place_name:"",
            place_id: this.$route.params.placeId,
            rating: 5,
            detail: "",
            lat:0,
            lon:0,
            contact: "-",
            image_url: "",
            comment: [],
            textReview: null, 
            reviewData: []
        }
    },
    created(){
        this.getReview();
        this.getPlace();
    },
    methods:{
        getReview(){
            const data = {
                placeId: this.$route.params.place_id
            }
            console.log(this.$route.params.place_id)
            axios.post(`http://localhost:3000/review`, data)
            .then((res) => {
                this.reviewData = res.data.reviewData;
            })
        },
        getPlace(){
            this.place_id = this.$route.params.place_id;
            this.type = this.$route.params.type;
            let header = {
                "Accept-Language" : "TH",
                "Authorization" : "Bearer " + process.env.VUE_APP_API_KEY,
            }

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
        confirmReview(){
            const data = {
                placeId: this.place_id,
                textReview: this.textReview,
                username: this.username
            }
            axios.post('159.223.45.216:2077/addreview', data)
            .then(() => {
                window.location.reload();
            }) 
        }
    }
}
</script>

<style>

</style>
