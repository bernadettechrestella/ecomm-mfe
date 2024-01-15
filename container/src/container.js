import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountNavbar } from 'navbar/NavbarIndex';
import { mount as mountSidebar } from 'sidebar/SidebarIndex';

console.log("Hello from the container");

//set warna background jadi light grey
document.body.style.backgroundColor = "#f5f5f5";

mountProducts(document.querySelector("#dev-products"));
mountSidebar(document.querySelector("#dev-sidebar"));
mountNavbar(document.querySelector("#dev-navbar"));