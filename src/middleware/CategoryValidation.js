const hasRequiredFields = async (req, res, next) => {
  const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Campo nome é obrigatório.' });
    } 
  next();
}


module.exports = {
  hasRequiredFields
}