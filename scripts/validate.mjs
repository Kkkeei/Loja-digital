import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [html, css, js] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../styles.css", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8")
]);

assert.match(html, /<html lang="pt-BR">/, "Documento deve declarar português do Brasil.");
assert.match(html, /name="viewport"/, "Viewport mobile deve estar configurado.");
assert.match(html, /href="styles\.css"/, "CSS principal deve estar conectado.");
assert.match(html, /src="script\.js"/, "JavaScript principal deve estar conectado.");
assert.match(html, /id="colecao"/, "A seção de coleção deve existir.");
assert.match(html, /class="cart-drawer"/, "A sacola deve existir.");
assert.match(html, /class="menu-toggle"[^>]*aria-expanded="false"/, "Menu mobile deve expor estado acessível.");

const productCards = [...html.matchAll(/<article class="product-card"/g)];
assert.equal(productCards.length, 3, "A vitrine deve conter os três produtos demonstrativos.");
const images = [...html.matchAll(/<img\b([^>]*)>/g)];
assert.ok(images.length >= 4, "As imagens editoriais e dos produtos devem existir.");
for (const [, attributes] of images) assert.match(attributes, /\balt=/, "Toda imagem deve declarar texto alternativo (mesmo que vazio quando decorativa).");

for (const selector of [".cart-button", ".cart-drawer", ".cart-items", ".subtotal strong", ".menu-toggle", ".main-nav", ".filter", "#product-search", ".newsletter-form", ".toast"]) {
  assert.ok(js.includes(selector), `O JavaScript deve integrar o componente ${selector}.`);
}
assert.match(css, /@media\s*\(/, "O CSS deve conter regras responsivas.");
assert.match(css, /:focus-visible/, "O CSS deve manter indicador de foco visível.");
assert.match(js, /if\(drawerOpen\)closeCart\(\)/, "Escape deve fechar a sacola somente quando ela estiver aberta.");

console.log("NOVA — validação estática concluída: estrutura, integrações, acessibilidade básica e responsividade.");
