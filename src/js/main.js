import navbar from "./componentes/navbar/nav.bar.js";
import roteador from "./componentes/rotas/rotas.js";
navbar(roteador);

const app = document.getElementById('app');
console.log(roteador)
const mapaDeRotas= {}
console.log(mapaDeRotas)
for(const rota of roteador){
    mapaDeRotas[rota.url] = rota
}
// console.log(mapaDeRotas)
// console.log(mapaDeRotas['#inicio'])
// console.log(mapaDeRotas.['#inicio'].pagina)
// console.log(mapaDeRotas['#inicio'].pagina())

//app.textContent ='<h1>Olá Mundo!</h1>';

let hash = window.location.hash || '#inicio';
render();
window.addEventListener("hashchange", ()=>{
hash = window.location.hash;
render();


})
const rota404 = { pagina: () => `<div> Página não encontrada 404 </div>` }
function render(){
    const rotaAtual = mapaDeRotas[hash]|| rota404
    app.innerHTML = rotaAtual.pagina()
    if(typeof mapaDeRotas[hash].acao === 'function'){
        mapaDeRotas[hash].acao()
    }
}





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