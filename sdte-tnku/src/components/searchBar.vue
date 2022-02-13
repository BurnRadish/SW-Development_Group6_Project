<template>
    <section>
        <div class="input-group mb-3">
            <div class="col-2">
                <select class="form-select" v-model="type">
                    <option>ATTRACTION</option>
                    <option>RESTAURANT</option>
                    <option>ACCOMMODATION</option>
                </select>
            </div>
            
            <input v-model="keyword" type="text" class="form-control">
            <button class="btn btn-outline-secondary" type="button" @click="searchLocation()">ค้นหา</button>
            
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
        return {
            keyword: "",
            type: ""
        }
        },
        methods:{
            searchLocation(){
              this.$router.push({ path: `/result/${this.keyword}/${this.type}` });
            }
        }
    }
</script>