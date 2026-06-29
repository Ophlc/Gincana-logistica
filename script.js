
const livros={
    "Barraca do Beijo":["35791", "A"], 
    "Club Penguin": ["17652", "A"], 
    "Diário de um Banana: Dias de Cão": ["43268", "A"], 
    "Diário de um Banana: A Verdade Nua e Crua": ["39117", "A"], 
    "End of the Chrysalis 47 Age": ["74825", "A"], 
    "Extraordinário": ["59143", "A"], 
    "Guerra Civil": ["28357", "A"], 
    "Harry Potter e o Prisioneiro de Azkaban": ["76418", "A"], 
    "Marley e Eu": ["21496", "A"], "Os Últimos Jovens da Terra": ["83749", "A"], 
    "Percy Jackson e os Olimpianos: O Ladrão de Raios": ["91827", "A"], 
    "Sete Monstros Brasileiros": ["58371", "A"], 
    "Star Wars: Herdeiro do Jedi": ["68154", "A"], 
    "Turma da Mônica Jovem: Herdeiros da Terra": ["39184", "A"], 
    "Wickend": ["25583", "A"], 
    
    "A Culpa é das Estrelas": ["68421", "B"], 
    "Assassin's Creed: Renascença": ["41583", "B"], 
    "Assassin's Creed: Irmandade": ["72619", "B"], 
    "Assassin's Creed: Unity": ["56834", "B"], 
    "Crepúsculo": ["97245", "B"], 
    "Diário de um Zumbi do Minecraft": ["79256", "B"], 
    "Dois Mundos, Um Herói": ["81642", "B"], 
    "Goblin Slayes": ["52973", "B"], 
    "Halo: Silentium": ["63782", "B"], 
    "Harry Potter e a Criança Amaldiçoada": ["85137", "B"], 
    "Jogos Vorazes": ["29461", "B"], 
    "O Hobbit": ["13864", "B"], 
    "O Menino do Pijama Listrado": ["34718", "B"], 
    "Os Cães Nunca Deixam de Amar": ["46529", "B"], 
    "Turma da Mônica Jovem: O Brilho de um Pulsar": ["17395", "B"]};

let registros=[];
let m=0,s=0,ms=0,running=false,interval;
const timer=document.getElementById('timer');

function upd()
{
    ms++;if
    (ms>=100)
    {ms=0;s++;}

    if(s>=60)
    {s=0;m++;}timer.innerText=`${String(m).padStart(2,'0')}:${String(s)
    .padStart(2,'0')}:${String(ms).padStart(2,'0')}`; 
}

startBtn.onclick=()=>
    {
    if(!running){interval=setInterval(upd,10);running=true;}
    };

resetBtn.onclick=()=>
    {
    clearInterval(interval);running=false;m=s=ms=0;timer.innerText='00:00:00';registros=[];productList.innerHTML='';
    };

stopBtn.onclick=()=>

    {
clearInterval(interval);running=false;
let resultado=[];

registros.forEach(r=>
    {
    let livro=livros[r.nome];
    resultado.push
       ({
          nome:r.nome,codigo:r.codigo,
          caixa:livro?livro[1]:'Não encontrada',
          correto:!!(livro && livro[0]===r.codigo),
          codigoCorreto:livro?livro[0]:'-'
        });
    });
localStorage.setItem('resultadoLivros',JSON.stringify(resultado));
localStorage.setItem('tempoFinal',timer.innerText);
location.href='resultado.html';

   };

productForm.addEventListener('submit',e=>{
e.preventDefault();

if(!running) return alert('Inicie a operação primeiro!');
let nome=document.getElementById('nome').value.trim();
let codigo=document.getElementById('codigo').value.trim();
registros.push({nome,codigo});
productList.innerHTML+=`<div class="item"><strong>${nome}</strong><br>Código: ${codigo}</div>`;
productForm.reset();
});

// Palavras que devem permanecer em minúsculas (artigos, preposições, conjunções),
// a menos que sejam a primeira palavra do título ou venham logo após ":", "," ou "-"
const palavrasMinusculas = new Set([
    'de','da','do','das','dos','um','uma','uns','umas',
    'e','ou','é','a','o','as','os',
    'em','no','na','nos','nas',
    'com','por','para','ao','aos','à','às',
    // alguns títulos do acervo estão em inglês
    'of','the','an','in','on','at','to','and'
]);

function primeiraMaiuscula(input) {
    const cursor = input.selectionStart;
    const palavras = input.value.toLowerCase().split(' ');

    const resultado = palavras.map((palavra, i) => {
        if (palavra.length === 0) return palavra;

        // remove pontuação no final da palavra só para comparar com a lista
        const palavraLimpa = palavra.replace(/[.,:;!?()"]+$/, '');

        const anterior = i > 0 ? palavras[i - 1] : '';
        const forcarMaiuscula = i === 0 || /[:,\-]$/.test(anterior);

        if (forcarMaiuscula || !palavrasMinusculas.has(palavraLimpa)) {
            // capitaliza só o primeiro caractere da palavra (não usa \b\w),
            // por isso acento e apóstrofo no meio da palavra não são mais afetados
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        }
        return palavra;
    });

    input.value = resultado.join(' ');
    input.setSelectionRange(cursor, cursor); // mantém o cursor no lugar ao digitar
}
