<template>
  <div class="Chicken">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Chicken',
      message: 'I like Chicken'
    }
  }
};
</script>

<style>
.Chicken {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style>