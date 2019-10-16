<template lang="html">
  <form v-on:submit="addGuest" method="post">
    <label for="name">Name: </label>
    <input type="text" name="name" value="Full Name" v-model="name" required>

    <label for="email">Email: </label>
    <input type="text" name="email" value="Email Address" v-model="email" required>

    <label for="checkedIn">Checked In?: </label>
    <select v-model="checkedIn">
      <option disabled >Pick one...</option>
      <option :value="true">Yes</option>
      <option :value="false">Not Yet</option>
    </select>
    <input type="submit" name="" value="Add Guest">
  </form>
</template>

<script>
import GuestService from '../services/GuestService.js'
import {eventBus} from '../main.js'

export default {
  name:'guest-form',
  data(){
    return{
      name:'',
      email:'',
      checkedIn: null
    }
  },
  methods:{
    addGuest: function(e) {
      e.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      GuestService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }

}
</script>

<style lang="css" scoped>
form{
  width: 80%;
  margin: auto;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

</style>
