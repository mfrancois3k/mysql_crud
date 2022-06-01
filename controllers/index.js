const db = require ('../db')

//GET All
const getAllItems = async (_req,res) => {
    db.query("SELECT * FROM mobile_game", (err, result) => {
        if(err){
          console.log(err);
        } else {
          res.send(result);
        }
      })
    
}

//POST
const createItem = async (req, res) => {
    const insertQuery =`INSERT INTO mobile_game SET ?` ;
    db.query(insertQuery, req.body ,(err, result) => {
    if(err){
      console.log(err);
    } else {
      res.send("Review Added to Database");
    }
    })
}

// PUT
const updateItem = async (req, res) =>{
    const updateQuery = "UPDATE mobile_game SET game_name = ?, game_platform = ?,game_price = ?,game_creator = ? WHERE id = ? ";
db.query(
  updateQuery,
  [req.body.game_name, req.body.game_platform,req.body.game_price ,req.body.game_creator, req.params.id],
  (err, result) => {
    if (err){
      console.log(err);
    } else {
      res.send(result);
    }
  })
}
//delete
const deleteItem = async (req, res) =>{
    db.query(
        "DELETE FROM mobile_game WHERE id = ?",
        req.params.id, 
        (err, result) => {
          if (err) {
            console.log(err)
          } else {
            res.send(result);
          }
        })
}


module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
}