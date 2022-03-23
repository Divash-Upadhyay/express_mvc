const post= (model) => async (req, res) => 
{
    try {
      const item = await model.create(req.body);
  
      return res.send(item);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  };

  module.exports = (model) => {
      return{
        post:post(model), 
      }
      
  }