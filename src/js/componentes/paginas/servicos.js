let cardServico = "";
const detalhes = [
    {
        titulo: 'Toma caneta Kaio Jorge',
        descricao: 'xxxxxxxx xxxxxxx xxxxxx',
        imagem: 'src/img/01.webp',
    },
    {
        titulo: 'Menino ney',
        descricao: 'xxxxxxxx xxxxxxx xxxxxx',
        imagem: 'src/img/02.webp',
    },
    {
        titulo: 'Garoto Estevão',
        descricao: 'xxxxxxxx xxxxxxx xxxxxx',
        imagem: 'src/img/03.webp',
    },
    {
        titulo: 'Mascote da Copa 2026',
        descricao: 'xxxxxxxx xxxxxxx xxxxxx',
        imagem: 'src/img/04.webp',
    },
    {
        titulo: ' Fase de Grupos',
        descricao: 'xxxxxxxx xxxxxxx xxxxxx',
        imagem: 'src/img/05.jpg',
    }    
    
]

function servicos(){
    cardServico +=`<div class="bem-grid-auto">`
    for(let i=0; i< detalhes.length; i++){
    cardServico += `
        
            <div class="bem-card">
                <img class="bem-card__image" src="${detalhes[i].imagem}" alt="Image description">
                <div class="bem-card__body">
                    <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                    <p>${detalhes[i].descricao}</p>
                </div>
            </div>        
        </div>

    `
    }
    cardServico +=`<div class="bem-grid-auto">`
    return cardServico
}
export default servicos;