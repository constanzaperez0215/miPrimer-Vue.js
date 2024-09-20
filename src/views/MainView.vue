<script setup>
  import Sidebar from '../components/SideBar.vue';
</script>

<template>
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