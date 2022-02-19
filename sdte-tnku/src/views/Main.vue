<template>
  <div class="container-fluid px-0">
    <div class="jumbotron text-center">
      <h1 style="color: white; font-size: 100px">TNKU Project</h1>
      <h3 style="color: white">Enjoy to Choose Any Thing!</h3>
    </div>
    <div class="container">
      <SearchBar class="input-group mt-3 mb-4"></SearchBar>
      <h1 class="text-center">New Arrival</h1>
      <hr />
      <div class="row" style="padding-left:7%">
        <div class="col-4 mb-3" v-for="n in 9" :key="n">
          <Card></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import SearchBar from "../components/searchBar.vue";
export default {
  components: {
    Card,
    SearchBar
  },
};
</script>

<style>
.jumbotron {
  background-image: url("https://wallpaperaccess.com/full/3353887.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding-top: 10%;
  padding-bottom: 15%;
}
</style>
