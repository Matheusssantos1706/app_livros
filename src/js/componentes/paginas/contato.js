function contato(){
const paginadecontato = `<h1> Esta é a página contato </h1>
    <form class="bem-form">
        <div class="bem-form__group">
            <label for="assunto" class="bem-bem-form__label">Assunto</label>
            <input type="text" name="assunto" id="assunto" class="bem-bem-form__Label">
        </div>
        <div class="bem-form__group">    
            <label for="email" class="bem-bem-form__label">email</label>
            <input type="email" name="email" id="email class="bem-bem-form__input">
        </div>
        <div class="bem-form__group">
            <label for="mensagem" class="bem-bem-form__label">Mensagem</label>
            <textarea class="bem-bem-form__textarea"name="mensagem" id="mensagem" cols="30" rows="10"></textarea>    
        </div>
        <button type="submit" class="bem-btn--primary">Enviar</button>
    </form>
    <ul id="lista_de_contatos">
    </ul>
`
 
return paginadecontato;
}
export default contato;