<template lang="html">
  <div class="">
    <h1>{{title}}</h1>
    <guest-form></guest-form>
    <guest-grid :guests="guests"></guest-grid>
  </div>
</template>

<script>
import GuestGrid from './components/GuestGrid.vue'
import GuestForm from './components/GuestForm.vue'
import {eventBus} from './main.js'
import GuestService from './services/GuestService.js'
export default {
  name: 'app',
  data(){
    return{
      guests: [],
      title: "Welcome to Hotel California"
    }
  },
  mounted(){
    this.getGuests()
    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })
    eventBus.$on('guest-deleted', (id) => {
      const index = this.guests.findIndex(guest => {
        return guest._id === id
      })
      this.guests.splice(index, 1)
    })

    eventBus.$on('guest-change', guestToChange => {
      const updatedGuest = {
        ...guestToChange,
        checkedIn: !guestToChange.checkedIn
      }
      GuestService.updateGuest(updatedGuest)
      const index = this.guests.findIndex(guest => guest._id === guestToChange._id);
      this.guests.splice(index, 1, updatedGuest)
    })
  },
  methods:{
    getGuests: function(){
      GuestService.getGuests()
      .then(data => this.guests = data)
    }
  },
  components:{
    "guest-grid":GuestGrid,
    "guest-form":GuestForm
  }
}
</script>

<style lang="css" scoped>
@font-face {
  font-family: "hotel";
  src: url('/assets/fonts/grand-hotel/GrandHotel-Regular.otf')  format('embedded-opentype');
}
h1{
  text-align: center;
  font-family: cursive;
}

</style>
