let pokePlantServer = [

]

let id = 0


module.exports = {

  read: (req, res) => {
      console.log("something")
      res.status(200).send(pokePlantServer)
  },

  update: (req, res) => {
      console.log('You watered your pokeplant')
      let {newDate, id} = req.body
      let pokeToUpdate = pokePlantServer.findIndex((e) => e.id === id)
      pokePlantServer[pokeToUpdate].date = newDate
      res.status(200).send(pokePlantServer)
 
  },

  create: (req, res) => {
      console.log ('Post Fired')
      let {name, date, pokeImg} =req.body
      pokePlantServer.push({name, date, pokeImg, id})
      console.log(pokePlantServer)
      res.status(200).send(pokePlantServer)
      id++

  }

}