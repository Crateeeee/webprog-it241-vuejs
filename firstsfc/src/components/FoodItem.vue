<template>
  <div class="Adobo">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Adobo',
      message: 'Chicken Adobo is way better than Pork Adobo. Fight me!... With rice of course!'
    }
  }
};
</script>

<style>
  .Adobo {
    border: dashed rgb(255, 255, 255) 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: rgba(74, 45, 45, 0.861);
  }
</style>
