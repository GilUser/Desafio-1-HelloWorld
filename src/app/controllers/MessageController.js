function helloWorld(req,res){
    res.send({mensagem:"Olá, Mundo!"})
}

module.exports = {
    helloWorld,
};