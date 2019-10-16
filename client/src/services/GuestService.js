const baseUrl = "http://localhost:3000/api/guests/"

export default {
  getGuests(){
    return fetch(baseUrl)
    .then(res => res.json())
  },
  postGuest(payload){
    return fetch(baseUrl, {
      method:'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type':'application/json' }
    })
    .then(res => res.json())
  },
  deleteGuest(id){
    return fetch(baseUrl+id, {
      method:'DELETE'
    })
  },
  updateGuest(payload){
    return fetch(baseUrl + payload._id, {
      method:'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type':'application/json'}
    })
    .then(res => res.json())
  }
}
