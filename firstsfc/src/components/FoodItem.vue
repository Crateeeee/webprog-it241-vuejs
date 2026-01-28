<template>
  <div class="Chocolates">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Chocolates',
      message: 'I like chocolates'
    }
  }
};
</script>

<style>
  .Chocolates {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: brown;
  }
</style>