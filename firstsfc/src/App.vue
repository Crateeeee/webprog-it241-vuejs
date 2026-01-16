<template>
  <h1>Food</h1>
  <food-item/>
  <food-item2/>
</template>

<script>
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'

export default {
  name: 'App',
  components: {
    'food-item': FoodItem,
    'food-item2': FoodItem2
  }
}
</script>

<style></style>