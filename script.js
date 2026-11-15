const products = {
  sound:{id:"sound",name:"NOVA Sound Pro",price:1899,image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80"},
  watch:{id:"watch",name:"NOVA Watch One",price:2499,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"},
  vision:{id:"vision",name:"NOVA Vision",price:4990,image:"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=300&q=80"}
};
const cart=new Map();
const $=(selector,scope=document)=>scope.querySelector(selector);
const $$=(selector,scope=document)=>[...scope.querySelectorAll(selector)];
const formatPrice=value=>value.toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
let toastTimer;
function notify(message){const toast=$(".toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2300)}
function openCart(){$(".cart-drawer").classList.add("open");$(".cart-drawer").setAttribute("aria-hidden","false");$(".overlay").hidden=false;document.body.style.overflow="hidden";$(".close-drawer").focus()}
function closeCart(){$(".cart-drawer").classList.remove("open");$(".cart-drawer").setAttribute("aria-hidden","true");$(".overlay").hidden=true;document.body.style.overflow="";$(".cart-button").focus()}
function addToCart(id){if(!products[id])return;cart.set(id,(cart.get(id)||0)+1);renderCart();notify(`${products[id].name} adicionado à sacola`)}
function removeFromCart(id){cart.delete(id);renderCart()}
function renderCart(){
 const count=[...cart.values()].reduce((sum,qty)=>sum+qty,0);
 const total=[...cart.entries()].reduce((sum,[id,qty])=>sum+products[id].price*qty,0);
 $$(".cart-count").forEach(el=>el.textContent=count);$(".drawer-count").textContent=`(${count})`;$(".subtotal strong").textContent=formatPrice(total);
 const container=$(".cart-items");
 if(!count){container.innerHTML='<p class="cart-empty">Sua sacola ainda está vazia.<br><span>Encontre algo extraordinário.</span></p>';return}
 container.innerHTML=[...cart.entries()].map(([id,qty])=>{const p=products[id];return `<div class="cart-row"><img src="${p.image}" alt=""><div><strong>${p.name}</strong><small>${qty} × ${formatPrice(p.price)}</small></div><button class="remove-item" data-remove="${id}" aria-label="Remover ${p.name}">×</button></div>`}).join("");
}
$$("[data-add]").forEach(button=>button.addEventListener("click",()=>addToCart(button.dataset.add)));
$(".cart-button").addEventListener("click",openCart);$(".close-drawer").addEventListener("click",closeCart);$(".overlay").addEventListener("click",closeCart);
$(".cart-items").addEventListener("click",event=>{const button=event.target.closest("[data-remove]");if(button)removeFromCart(button.dataset.remove)});
document.addEventListener("keydown",event=>{
 if(event.key!=="Escape")return;
 const drawerOpen=$(".cart-drawer").classList.contains("open");
 const menuOpen=$(".main-nav").classList.contains("open");
 if(drawerOpen)closeCart();
 if(menuOpen){$(".main-nav").classList.remove("open");$(".menu-toggle").setAttribute("aria-expanded","false");$(".menu-toggle").setAttribute("aria-label","Abrir menu");$(".menu-toggle").focus()}
});
$$(".filter").forEach(button=>button.addEventListener("click",()=>{$$(".filter").forEach(item=>item.classList.toggle("active",item===button));filterProducts()}));
$("#product-search").addEventListener("input",filterProducts);
function filterProducts(){const category=$(".filter.active").dataset.filter;const query=$("#product-search").value.trim().toLocaleLowerCase("pt-BR");let visible=0;$$(".product-card").forEach(card=>{const matchCategory=category==="todos"||card.dataset.category===category;const matchQuery=card.dataset.name.toLocaleLowerCase("pt-BR").includes(query);card.hidden=!(matchCategory&&matchQuery);if(!card.hidden)visible++});$(".empty-state").hidden=visible!==0}
$(".menu-toggle").addEventListener("click",()=>{const nav=$(".main-nav");const isOpen=nav.classList.toggle("open");$(".menu-toggle").setAttribute("aria-expanded",String(isOpen));$(".menu-toggle").setAttribute("aria-label",isOpen?"Fechar menu":"Abrir menu")});
$$(".nav-link").forEach(link=>link.addEventListener("click",()=>{$(".main-nav").classList.remove("open");$(".menu-toggle").setAttribute("aria-expanded","false");$(".menu-toggle").setAttribute("aria-label","Abrir menu")}));
$(".search-toggle").addEventListener("click",()=>{$("#product-search").focus();$("#colecao").scrollIntoView({behavior:"smooth"})});
$(".checkout-button").addEventListener("click",()=>notify("Demonstração: o checkout não processa pagamentos."));
$(".newsletter-form").addEventListener("submit",event=>{event.preventDefault();const email=$("#email").value.trim();if(email){notify("Cadastro demonstrativo recebido. Obrigado!");event.target.reset()}});
// Swipe gestures in hero on mobile to move between the intro and product collection.
const heroVisual=$(".hero-visual");
if(heroVisual){let touchStartX=0;heroVisual.addEventListener("touchstart",event=>{touchStartX=event.changedTouches[0].clientX},{passive:true});heroVisual.addEventListener("touchend",event=>{const delta=event.changedTouches[0].clientX-touchStartX;if(Math.abs(delta)<65)return;if(delta<0)$("#colecao")?.scrollIntoView({behavior:"smooth"});else $("#inicio")?.scrollIntoView({behavior:"smooth"})},{passive:true})}
renderCart();
