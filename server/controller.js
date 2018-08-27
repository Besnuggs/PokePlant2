let pokePlantServer = [

]

let id = 0


module.exports = {

  read: (req, res) => {
      console.log("You looked at your pokeplant!")
      res.status(200).send(pokePlantServer)
  },

  update: (req, res) => {
      console.log('You watered your pokeplant!')
      let {newDate, id} = req.body
      let pokeToUpdate = pokePlantServer.findIndex((e) => e.id === id)
      pokePlantServer[pokeToUpdate].date = newDate
      res.status(200).send(pokePlantServer)
 
  },

  create: (req, res) => {
      console.log ('You made a new pokeplant!')
      let {name, date, pokeImg} =req.body
      pokePlantServer.push({name, date, pokeImg, id})
      console.log(pokePlantServer)
      res.status(200).send(pokePlantServer)
      id++

  },
  
  delete: (req, res) => {
      console.log('your pokeplant DIED!')
      let {id} = req.params
      let deadPoke
      pokePlantServer.map((e, i) => {
          if (e.id === +id) {
            deadPoke = i
          }
      })
      console.log(deadPoke)
      pokePlantServer.splice(deadPoke, 1)
      console.log(pokePlantServer)
      res.status(200).send(pokePlantServer)
  }

}