<template>
  <div class="Beef">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Beef',
      message: 'Bulalo!'
    }
  }
};
</script>

<style>
  .Beef {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: red;
  }
</style>
