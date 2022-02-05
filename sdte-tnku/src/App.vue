<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid">
        <ul class="navbar-nav">
           
          <li class="nav-item">
           
            <router-link class="navbar-brand on-active" aria-current="page" to="/">
            <img src="./assets/compass.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> 
            Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="Result">Details</router-link>
          </li>
          <!-- เอาออกที่หลัง -->
          <li class="nav-item">
            <router-link class="navbar-brand" to="Detail">Result</router-link>
          </li>
          <!-- เอาออกที่หลัง -->
        </ul>
    </div>
  </nav>
   <router-view/>
</div>

</template>

<script>
import * as name from 'bootstrap/dist/js/bootstrap.esm'
export default {
  name:'App',
  data() {
    return {
      
    }
  },
  mounted(){
    // console.log(Alert);
    console.log(name.Alert)
  }
}
</script>