const ObraValidation = async (req, res, next) => {
    const {
        nm_obra,
        compositor
    } = req.body;
    if (!nm_obra)
        return res.status(400).json({
            error: 'nome é obrigatorio!'
        });
    else if (!compositor)
        return res.status(400).json({
            error: 'compositor é obrigatorio!'
        });
    else {
        next();
    }
}

module.exports = ObraValidation;