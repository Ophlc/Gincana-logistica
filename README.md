# Rota Zer013 — Conferência de Livros

Esse site é um sistema de conferência de livros feito para uma gincana de logística. A ideia é simular uma operação em que os participantes precisam registrar os livros e conferir seus códigos, enquanto um cronômetro acompanha o tempo da atividade.

O projeto tem um acervo de livros já cadastrado no código, com os códigos correspondentes e a indicação das caixas A e B. Ao finalizar a operação, aparece um resumo mostrando quais registros estavam corretos, quais estavam errados e quanto tempo a conferência levou.

## Funcionalidades

- Cronômetro com opções de iniciar, parar e zerar a operação.
- Cadastro de livros pelo título e código durante a contagem.
- Lista dos livros registrados.
- Ajuste de letras maiúsculas e correção de acentos para títulos conhecidos no cadastro.
- Conferência dos códigos com base no acervo definido no JavaScript.
- Página de resultado com acertos, erros, caixa de cada livro e tempo final.
- Opção de começar uma nova operação.

## Tecnologias utilizadas

- **HTML:** estrutura das duas páginas.
- **CSS:** visual e adaptação para diferentes tamanhos de tela.
- **JavaScript:** cronômetro, registros e conferência dos livros.
- **localStorage:** passagem dos resultados para a página final.
- **Google Fonts:** fontes Inter e Oswald.

## Como executar

Baixe os arquivos do repositório e abra o `index.html` no navegador. Não é preciso instalar nada ou configurar um servidor.

Clique em **Iniciar** para começar a contagem, registre os títulos e códigos e use **Parar** quando quiser encerrar e ver o resultado. O botão **Zerar** reinicia o cronômetro e limpa os registros da operação atual.

É necessário ter internet para carregar as fontes externas.

## Arquivos do projeto

- `index.html`: tela do cronômetro e do registro de livros.
- `resultado.html`: página com o resumo da conferência.
- `script.js`: acervo de livros e lógica da operação.
- `style.css`: estilos usados nas páginas.
- Arquivos `.png`: imagens da identidade visual do Rota Zer013.
