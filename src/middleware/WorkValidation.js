const hasRequiredFields = async (req, res, next) => {
  const { name, compositor } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Campo nome é obrigatório.' });
  } else if (!compositor) {
    return res.status(400).json({ error: 'Campo compositor é obrigatório.' });
  }
  if (req.file) {
    const { location, key } = req.file;
    req.body.link_aws_music = location ? location : `${process.env.APP_URL}/files/${key}`;
    req.body.aws_key = key;
  }
  next();
}

module.exports = {
  hasRequiredFields
}
