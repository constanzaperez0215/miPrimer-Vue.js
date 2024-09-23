<script setup>
  import Sidebar from '../components/SideBar.vue';
  import Header from '../components/Header.vue'
</script>

<template>
  <Header></Header>
  <div class="container">
    <Sidebar />
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style>
  .container{
    display: flex;
  }

  .content{
    flex: 1;
    padding: 20px;
  }
</style>