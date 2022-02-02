<template>
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="navbar-brand" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" to="Result">Details</router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" to="Detail">Result</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

 <router-view></router-view>

 
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