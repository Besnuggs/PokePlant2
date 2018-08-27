let pokePlantServer = [

]

module.exports = {

  read: (req, res) => {
      console.log("something")
      res.status(200).send(pokePlantServer)
  },

  update: (req, res) => {
      console.log('the water button fired')
    let {newWateredDate} = req.body
    pokePlantServer.push(newWateredDate)
    res.status(200).send(pokePlantServer)
  },

  create: (req, res) => {
      console.log ('Post Fired')
      let {name, date, pokeImg} =req.body
      pokePlantServer.push({name, date, pokeImg})
      console.log(pokePlantServer)
      res.status(200).send(pokePlantServer)

  }

}