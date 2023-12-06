import '../CSS/style.css'
import { DOMselectors } from './dom.js'
import { Merch } from './menu.js'

function toggleColors() {
    if (DOMselectors.body.classList.contains("light")) {
        DOMselectors.body.classList.remove("light");
        DOMselectors.body.classList.add("dark");
    } else if (DOMselectors.body.classList.contains("dark")) {
        DOMselectors.body.classList.remove("dark");
        DOMselectors.body.classList.add("light");
    };
};
DOMselectors.toggleButton.addEventListener("click", toggleColors);

function filterFor(array) {
    DOMselectors.menu.innerHTML = "";
    array.forEach(eva => {
        DOMselectors.menu.insertAdjacentHTML(
            "beforeend",
            `
                <div class="menu-item">
                    <img src="${eva.image}" alt="" class="item-img">
                    <h2 class="item-name">${eva.name}</h2>
                </div>
            `
        );
    });
};
filterFor(Merch);

function filterAll() {
    filterFor(Merch);
};
DOMselectors.allFilter.addEventListener("click", filterAll);

function filterShiniji() {
    const Shiniji = Merch.filter(eva => eva.Shiniji === true);
    filterFor(Shiniji);
};
DOMselectors.ShinijiFilter.addEventListener("click", filterShiniji);

function filterREI() {
    const REI = Merch.filter(eva => eva.REI === true);
    filterFor(REI);
};
DOMselectors.REIFilter.addEventListener("click", filterREI);

function filterAsuka() {
    const Asuka = Merch.filter(eva => eva.Asuka === true);
    filterFor(Asuka);
};
DOMselectors.AsukaFilter.addEventListener("click", filterAsuka);

// import '../css/style.css'
// import { DOMselectors } from './dom.js'
// import { evangelion } from './menu.js'
// function toggleColors() {
//     if (DOMselectors.body.classList.contains("light")) {
//         DOMselectors.body.classList.remove("light");
//         DOMselectors.body.classList.add("dark");
//     } else if (DOMselectors.body.classList.contains("dark")) {
//         DOMselectors.body.classList.remove("dark");
//         DOMselectors.body.classList.add("light");
//     };
// };
// DOMselectors.toggleButton.addEventListener("click", toggleColors);
// evangelion.forEach(merch => {
//     DOMselectors.menu.insertAdjacentHTML(
//         "beforeend",
//         `
//             <div class="menu-item">
//                 <img src="${merch.image}" alt="" class="item-img">
//                 <h2 class="item-name">${merch.name}</h2>
//             </div>
//         `
//     );
// });
// function filterAll() {
//     DOMselectors.menu.innerHTML = "";
//     evangelion.forEach(merch => {
//         DOMselectors.menu.insertAdjacentHTML(
//             "beforeend",
//             `
//                 <div class="menu-item">
//                     <img src="${merch.image}" alt="" class="item-img">
//                     <h2 class="item-name">${merch.name}</h2>
//                 </div>
//             `
//         );
//     });
// };
// DOMselectors.allFilter.addEventListener("click", filterAll);
// function filtershiniji() {
//     DOMselectors.menu.innerHTML = "";
//     const shiniji = evangelion.filter(merch => merch.shiniji === true);
//     shiniji.forEach(merch => {
//         DOMselectors.menu.insertAdjacentHTML(
//             "beforeend",
//             `
//                 <div class="menu-item">
//                     <img src="${merch.image}" alt="" class="item-img">
//                     <h2 class="item-name">${merch.name}</h2>
//                 </div>
//             `
//         );
//     });
// };
// DOMselectors.shinijiFilter.addEventListener("click", filterl);
// function filterasuka() {
//     DOMselectors.menu.innerHTML = "";
//     const asuka = evangelion.filter(merch => merch.side === true);
//     asuka.forEach(merch => {
//         DOMselectors.menu.insertAdjacentHTML(
//             "beforeend",
//             `
//                 <div class="menu-item">
//                     <img src="${merch.image}" alt="" class="item-img">
//                     <h2 class="item-name">${merch.name}</h2>
//                 </div>
//             `
//         );
//     });
// };
// DOMselectors.asukaFilter.addEventListener("click", filterasuka
// );
// function filterrei() {
//     DOMselectors.menu.innerHTML = "";
//     const reimerch = evangelion.filter(merch => merch.rei === true);
//     reimerch.forEach(merch => {
//         DOMselectors.menu.insertAdjacentHTML(
//             "beforeend",
//             `
//                 <div class="menu-item">
//                     <img src="${merch.image}" alt="" class="item-img">
//                     <h2 class="item-name">${merch.name}</h2>
//                 </div>
//             `
//         );
//     });
// };
// DOMselectors.reiFilter.addEventListener("click", filterrei);