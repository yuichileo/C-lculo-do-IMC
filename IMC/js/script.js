function IMC(){
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector ('.resultado'); 
    const hist = document.querySelector('.hist');
    const dados = [];
    let calcular;
    let classificacao;

     function salvarDados(informacoes){
        informacoes.preventDefault(); // nao atualiza a pagina qnd apertar o botao
        
        // salva os dados enviados para uma variavel
        const nome = form.querySelector('.nome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        calcular = ((peso.value)/(altura.value**2)).toFixed(2);
        console.log(calcular);

            if (calcular < 18.5) {
                classificacao = 'magreza';
            }
            else if (18.5 < calcular && calcular < 24.9) {
                classificacao = 'normal';
            }
            else if (24.9 < calcular && calcular < 29.9) {
                classificacao = 'sobrepeso';
            }
            else if (29.9 < calcular && calcular < 34.9) {
                classificacao = 'obesidade grau I';
            }
            else if (34.9 < calcular && calcular < 39.9) {
                classificacao = 'obesidade grau II';
            }
            else { classificacao = 'obesidade grau III';
            }
        
            
        //adiciona na array 'dados' as informações enviadas
        dados.push({
            nome: nome.value,
            peso: peso.value,
            altura: altura.value,
            imc: Number(calcular),
            classificacao: classificacao
        });

        resultado.innerHTML = `<p>${nome.value} A classificação do seu IMC é: ${classificacao}.</p>`
        hist.innerHTML += `<p>nome: ${nome.value} / peso: ${peso.value}kg / altura: ${altura.value}m / imc: ${Number(calcular)} / classificacao: ${classificacao}</p>`
     }

   form.addEventListener('submit', salvarDados);
};

IMC();






