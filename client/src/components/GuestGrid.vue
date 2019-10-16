<template lang="html">
  <div class="container">
    <ul>
      <guest-grid-item v-for="(guest, index) in guests" :key="index" :guest="guest"></guest-grid-item>
    </ul>
  </div>
</template>

<script>
import GuestGridItem from './GuestGridItem.vue'
export default {
  name: 'guest-grid',
  props:['guests'],
  components:{
    "guest-grid-item":GuestGridItem
  }
}
</script>

<style lang="css" scoped>
ul{
  display: flex;
  flex-flow: row wrap;
}

.container{
  width: 80%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>
