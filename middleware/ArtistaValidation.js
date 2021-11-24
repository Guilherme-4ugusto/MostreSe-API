const ArtistaValidation = async (req, res, next) =>{
    const{nm_artista, nasc_artista, categoria_artista} = req.body;
    if(!nm_artista)
    return res.status(400).json({error: 'nome é obrigatorio!'});
    else if(!nasc_artista)
    return res.status(400).json({error: 'data de nascimento é obrigatoria!'});
    else if(!categoria_artista)
    return res.status(400).json({error: 'categoria é obrigatoria!'});
    else{
     
    if(req.file){
     const{location, key} = req.file;
     if(!location){
       req.body.foto_artista = `${process.env.APP_URL}/files/${key}`;
       req.body.key_foto = key;
     }else if(location){
       req.body.foto_artista = location;
       req.body.key_foto = key;
     }
    }
        
    next();
 }
}

module.exports = ArtistaValidation;