import navbar from "./componentes/navbar/nav.bar.js";
import contato from "./componentes/paginas/contato.js";
import home from "./componentes/paginas/home.js";
import servicos from "./componentes/paginas/servicos.js";
import sobre from "./componentes/paginas/sobre.js";
navbar();

const app = document.getElementById('app');
//app.textContent ='<h1>Olá Mundo!</h1>';

let rota = window.location.hash || '#inicio';
render();
window.addEventListener("hashchange", ()=>{
rota = window.location.hash;
render();


})

function render(){
    switch(rota){
    case '#inicio':
        app.innerHTML = home();
        // capturarFormulario();
    break;
    case '#sobre':
        app.innerHTML = sobre;
    break;
    case '#contato':
        app.innerHTML = contato();
    break;
    case '#servicos':
        app.innerHTML = servicos;
    break;
    default:
        app.innerHTML = `<h1> Página não encontrada </h1>`;
}
}

function capturarFormulario(){
    const formulario = document.getElementById('formulario-fila');
    const lista = document.getElementById('lista-de-pessoas');
    lista.style.display = "flex";
    lista.style.flexDirection = "column";
    lista.style.listStyle = "none";
    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(event);
        // const idadeInput = event.target.elements['idade'];
        const idade = document.getElementById('idade');
        if(idade.value >= 65){
            console.log("Pessoas com prioridades");
            filaDoBanco.unshift(idade.value);
        }else{
            console.log("Pessoas sem prioridade!");
            filaDoBanco.push(idade.value);
        }
        idade.value = "";
        lista.innerHTML = "";
        filaDoBanco.forEach((item) => { 
            const li = document.createElement('li');
            li.innerHTML = "Pessoa com idade: " + item + " anos";            
            lista.appendChild(li);
        });
    } );

}
// console.log("contagem regressiva")
// for(let i=100;i>=0; i-=5){
    
//    console.log(i);
// }

// console.log("contagem progressiva")
// for(let i=0;i<=100; i++){
    
//     console.log(i);
// }

// let temperatura = 20;
// let ligado = true;
// while(ligado){
//     console.log("A temperatura atual é: " + temperatura);
//     temperatura += 0.05;
//     if(temperatura >= 30 && temperatura < 33){
//         console.log("Enviar email de alerta: Temperatura alta!");
//     }else if(temperatura > 33){
//         ligado = false;
//         console.log("Desligando o sistema para evitar danos");
//         //break;
//     }
// }