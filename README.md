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
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Escopo

Projeto demonstrativo de interface. Marca e produtos fictícios. O carrinho funciona apenas em memória no navegador e não persiste após recarregar a página. Checkout e newsletter são demonstrações: não processam pagamentos nem enviam dados a um servidor. As imagens são externas (Unsplash) e as fontes usam Google Fonts, portanto esses recursos dependem de conexão com a internet.

## Próximas evoluções

- Persistência da sacola com `localStorage`.
- Página individual de produto.
- Backend e API de catálogo/estoque.
- Autenticação e painel administrativo.
- Integração segura com gateway de pagamento.
- Testes automatizados e imagens locais otimizadas.

---

Projeto desenvolvido para estudo e apresentação de habilidades Front-end.
