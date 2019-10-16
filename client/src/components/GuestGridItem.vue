<template lang="html">
  <div class="container">

  <div :class="guest.checkedIn ? 'checkedIn' : 'checkedOut'">
    <p>{{guest.status}}</p>
    <p>Name: {{guest.name}}</p>
    <p>Email: {{guest.email}}</p>
    <div v-if="guest.checkedIn">
      <p>Status: Checked In</p>
      <button @click="checkOut">Check Out</button>
    </div>
    <div v-if="!guest.checkedIn">
      <p>Status: Checked Out</p>
      <button @click="checkIn">Check In</button>
    </div>
    <button @click="deleteGuest">Delete Guest</button>
  </div>
</div>
</template>

<script>
import GuestService from '../services/GuestService.js'
import {eventBus} from '../main.js'

export default {
  name:'guest-grid-item',
  props:['guest'],
  methods:{
    deleteGuest: function(){
      GuestService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('guest-deleted', this.guest._id))
    },
    checkOut: function(){
      eventBus.$emit('guest-change', this.guest)
    },
    checkIn: function() {
      eventBus.$emit('guest-change', this.guest)
    }
  }
}
</script>

<style lang="css" scoped>
.checkedIn{
  border: 2px solid green;
  background-color: #f2f2f2;
  margin-bottom: 2px;
  padding: 3vw;

}
.checkedOut{
  border: 2px solid red;
  background-color: #f2f2f2;
  margin-bottom: 2px;
  padding: 3vw;
}
.container{
    width: 50%;
}

</style>
