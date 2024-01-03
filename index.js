let products = document.getElementsByClassName('prod_item');

function navigateTo(x){
    window.location.assign(x);
}

products[0].addEventListener('click', ()=>{
    navigateTo('./products/explorer-rick');
})
products[1].addEventListener('click', ()=>{
    navigateTo('./products/pickle-hoodie');
})
products[2].addEventListener('click', ()=>{
    navigateTo('./products/biker-tshirt');
})