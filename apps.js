let Frases = ["bom dia", "boa tarde", "boa noite"]
let FrasesCopiadas = [...Frases]
function GeradorMensagem(){
    if (Frases.lenght==0){
        Frases=[...FrasesCopiadas];
}
let IndiceGerado = math.floor(math.random()*(Frases.lenght))
let FraseGerada = Frases [IndiceGerado];
console.log (FraseGerada)
Document.queryselector("#msg").textcontent = FraseGerada;
Frases.splice (IndiceGerado,1)
}
GeradorMensagem();