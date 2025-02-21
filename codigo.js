const botao = document.getElementById('botao');

botao.addEventListener('click', function(event) {
    event.preventDefault();  // Impede o formulário de ser enviado e a página de recarregar
    
    const nome = document.getElementById('username').value;  
    const senha = document.getElementById('password').value;
    
    console.log("Botão clicado!");  // Verifica se o código está rodando
    
    if (nome === 'usuario' && senha === 'senha123') {
        console.log("Dados corretos! Redirecionando...");
        window.location.href = 'outraPagina.html';  // Redireciona para outra página
    } else {
        alert('Usuário ou senha não encontrados!');
    }
});
