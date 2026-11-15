# NOVA — Guia do projeto e portfólio

## Apresentação

NOVA — Concept Store é uma loja conceito fictícia de tecnologia premium, criada como projeto de portfólio Front-end. A interface combina direção visual editorial, vitrine de produtos e interações de e-commerce demonstrativas.

## Experiência e funcionalidades

- Página inicial com hero editorial e identidade visual própria.
- Vitrine com filtros por categoria e busca instantânea.
- Sacola lateral com inclusão, remoção, quantidades e subtotal.
- Navegação compacta para telas menores.
- Feedback visual para ações demonstrativas.
- Formulário de newsletter sem envio para servidor.
- Estados vazios, foco visível, rótulos acessíveis e respeito a movimento reduzido.

## Tecnologias

- HTML5 semântico.
- CSS3, Grid, Flexbox, variáveis e media queries.
- JavaScript moderno sem frameworks ou dependências externas de build.

## Estrutura

```text
.
├── .github/workflows/quality.yml
├── docs/PORTFOLIO.md
├── scripts/validate.mjs
├── index.html
├── styles.css
├── script.js
├── .gitignore
└── README.md
```

## Executar localmente

Não há etapa de instalação de dependências:

```bash
python3 -m http.server 8080
```

Acesse http://localhost:8080.

## Verificações

Com Node.js 20 ou superior:

```bash
node --check script.js
node scripts/validate.mjs
```

A integração contínua executa essas verificações em pushes e Pull Requests para a branch principal.

## Limites do protótipo

A marca e os produtos são fictícios. A sacola existe somente em memória e é reiniciada ao recarregar a página. O botão de checkout não processa pagamentos; o formulário de newsletter não transmite dados. Fotografias e fontes são carregadas de serviços externos e dependem de conexão com a internet.

## Próximas evoluções possíveis

- Persistência da sacola no navegador.
- Páginas de detalhe de produto.
- Catálogo e estoque via API.
- Autenticação e administração.
- Checkout real integrado a um provedor de pagamentos.
- Testes de navegador e otimização local de imagens.

> Este projeto é uma demonstração de interface e não deve ser apresentado como uma loja pronta para transações reais.
