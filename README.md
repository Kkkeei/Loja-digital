# NOVA — Concept Store

Loja conceito responsiva para portfólio Front-end. A NOVA é uma marca fictícia de tecnologia, com direção visual premium e interações no navegador.

## Destaques

- Landing page editorial com identidade visual própria.
- Layout responsivo com experiência mobile refinada.
- Menu compacto com navegação por toque.
- Vitrine com filtros por categoria e busca instantânea.
- Sacola lateral com adição, remoção, quantidades e subtotal.
- Mensagens de feedback, estados vazios e atalhos de teclado.
- Áreas de toque ampliadas, foco visível e respeito a movimento reduzido.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, variáveis, media queries e animações)
- JavaScript puro (ES6+, DOM e eventos)

Sem frameworks ou dependências de instalação.

## Executar localmente

Abra `index.html` no navegador. Para servir localmente:

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080`.

## Verificar o projeto

Com Node.js 20 ou superior:

```bash
node --check script.js
node scripts/validate.mjs
```

O GitHub Actions executa as mesmas verificações em cada atualização da branch principal e em Pull Requests.

## Publicar

### GitHub Pages
1. Abra **Settings → Pages** no repositório.
2. Selecione **Deploy from a branch**.
3. Escolha `main` e `/(root)`.
4. Salve e aguarde a URL pública ser disponibilizada.

### Netlify
Arraste a pasta do projeto para https://app.netlify.com/drop.

## Estrutura

```text
loja-digital/
├── .github/workflows/quality.yml
├── docs/PORTFOLIO.md
├── scripts/validate.mjs
├── index.html
├── styles.css
├── script.js
├── .gitignore
└── README.md
```

## Escopo

Projeto demonstrativo de interface. Marca e produtos fictícios. O carrinho funciona apenas em memória no navegador e não persiste após recarregar a página. Checkout e newsletter são demonstrações: não processam pagamentos nem enviam dados a um servidor. As imagens são externas (Unsplash) e as fontes usam Google Fonts, portanto esses recursos dependem de conexão com a internet.

Consulte [o guia do projeto](docs/PORTFOLIO.md) para conhecer a apresentação, estrutura, verificações e limites do protótipo.

---

Projeto desenvolvido para estudo e apresentação de habilidades Front-end.
