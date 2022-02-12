<template>
    <section>
        <div class="input-group mb-3">
            <div class="col-2">
                <select class="form-select" v-model="type">
                    <option>ALL</option>
                    <option>ATTRACTION</option>
                    <option>RESTAURANT</option>
                    <option>ACCOMMODATION</option>
                </select>
            </div>
            
            <input v-model="keyword" type="text" class="form-control">
            <button class="btn btn-outline-secondary" type="button" @click="searchLocation()">ค้นหา</button>
            
        </div>
    </section>
</template>

<script>
    export default {
        data() {
        return {
            keyword: "",
            type: "ALL"
        }
        },methods:{
            searchLocation(){
                this.$router.push({ path: /result, props: [keyword, type] });
            }
        }
    }
</script>