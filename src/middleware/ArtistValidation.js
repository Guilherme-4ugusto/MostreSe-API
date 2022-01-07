const hasRequiredFields = async (req, res, next) => {
  const { name, birth_date, category } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Campo nome é obrigatório.' });
    } else if (!birth_date) {
      return res.status(400).json({ error: 'Campo data de nascimento é obrigatório.' });
    } 
    if(req.file) {
      const { location, key } = req.file;
      req.body.link_aws_image = location ? location : `${process.env.APP_URL}/files/${key}`;
      req.body.aws_key = key;
    }
  next();
}


module.exports = {
  hasRequiredFields
}