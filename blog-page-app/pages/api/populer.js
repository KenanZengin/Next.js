import data from "./data"

export default function handler(req, res) {
    const {Populer} = data
    
    if(Populer) return res.status(200).json(Populer)
    return res.status(404).json("data is not found")
}
  