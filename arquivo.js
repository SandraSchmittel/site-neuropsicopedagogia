document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle o painel associado
            var panel = this.nextElementSibling;
            
            // Verifica se o painel está aberto
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                // Fecha todos os outros painéis
                document.querySelectorAll('.panel').forEach(function(p) {
                    p.style.display = 'none';
                });
                // Abre o painel atual
                panel.style.display = 'block';
            }
        });
    });
});


const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// document.querySelectorAll('.servico').forEach(servico => {
//     servico.addEventListener('click', () => {
//         alert(`Você clicou em: ${servico.querySelector('h3').innerText}`);
//     });
// });

function toggleContent(id) {
    const conteudo = document.getElementById(id);
    if (conteudo.style.display === "block") {
        conteudo.style.display = "none"; // Oculta o conteúdo se estiver visível
    } else {
        conteudo.style.display = "block"; // Mostra o conteúdo se estiver oculto
    }
}
