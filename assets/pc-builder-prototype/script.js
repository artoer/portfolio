let pcBuilder = document.querySelector('.pc-builder')
let pcBuilderContainer = document.querySelector('.pc-builder-container')
let navigation = document.querySelector('#menuwrapper')
let toggle = [document.querySelector('.pc-builder .builder-title'), document.querySelector('.pc-builder > .toggle')]
let pageBody = document.querySelector('body');

// bron: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
// voorkom overlap met navigatie
if (window.innerWidth > 499) { // desktop only
    onscroll = (event) => {
        // bron: https://stackoverflow.com/questions/11805955/how-to-get-the-distance-from-the-top-for-an-element
        let NavDistanceToTop = navigation.getBoundingClientRect().bottom

        if (NavDistanceToTop > 0) {
            pcBuilder.style.top = NavDistanceToTop + 'px';
            pcBuilderContainer.style.height = 'calc(100vh - ' + NavDistanceToTop + 'px)'
        } else {
            pcBuilder.style.top = 0 + 'px';
            pcBuilderContainer.style.height = 'calc(100vh - ' + 0 + 'px)'
        }
    };
}

// in en uitkappen van de tool
// bron: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
toggle.forEach(element => {
    element.addEventListener('click', () => {
        if (window.innerWidth > 499) { // desktop only
            pcBuilder.classList.toggle('collapsed');
            if (pcBuilder.classList.contains('collapsed')) {
                pageBody.style.marginRight = 0 + 'px';
            } else {
                pageBody.style.marginRight = 704 + 'px';
            }
        } else {
            hideToolM();
        }
    });
});

function hideToolM() {
    if (window.innerWidth <= 499) { // mobile only
        pcBuilder.classList.toggle('collapsed-m');
        if (!pcBuilder.classList.contains('collapsed-m')) {
            pcBuilder.style.top = (window.innerHeight - 45) + 'px';
        } else {
            pcBuilder.style.top = 0 + 'px';
        }
    }
}


// sla keuzes op in array
let pick = [];
//0 processor
//1 videokaart
//2 moederbord
//3 ram
//4 behuizing
//5 opslag
//6 cpu koeler
//7 ventilatoren
//8 voeding

// database van componenten voor het prototype
// bron: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
let components = {
    cpu: [{
        "name": "AMD Ryzen 7 5800X3D Boxed",
        "image": "./images/cpu1.png",
        "specs": "AM4 socket • Octa (8) core @ 3,4GHz-4,5GHz",
        "price": 339,
        "power": 105,
        "socket": "Socket AM4",
        "score": 172.0
    }, {
        "name": "AMD Ryzen 9 7950X Boxed",
        "image": "./images/cpu2.png",
        "specs": "AM5 socket • 16 core @ 4,5GHz-5,7GHz",
        "price": 619,
        "power": 170,
        "socket": "Socket AM5",
        "score": 173.8
    }, {
        "name": "Intel Core i7-13700K Boxed",
        "image": "./images/cpu3.png",
        "specs": "1700 socket • 16 core @ 3,4GHz-5,4GHz",
        "price": 485.30,
        "power": 253,
        "socket": "Socket 1700",
        "score": 188.0
    }, {
        "name": "Intel Core i5-13600K Boxed",
        "image": "./images/cpu4.png",
        "specs": "1700 socket • 14 core @ 3,5GHz-5,1GHz",
        "price": 339,
        "power": 181,
        "socket": "Socket 1700",
        "score": 174.3
    }, {
        "name": "Intel Core i5-12600K Boxed",
        "image": "./images/cpu5.png",
        "specs": "1700 socket • 10 core @ 3,7GHz-4,9GHz",
        "price": 289,
        "power": 150,
        "socket": "Socket 1700",
        "score": 165.6
    }],

    mobo: [{
        "name": "Gigabyte B550 AORUS ELITE V2",
        "image": "./images/mobo1.png",
        "specs": "Socket AM4 • ATX • AMD B550 chipset",
        "price": 139.99,
        "socket": "Socket AM4",
        "ddr": 4
    },
    {
        "name": "ASUS ROG Strix B650E-F GAMING WIFI",
        "image": "./images/mobo2.png",
        "specs": "Socket AM5 • ATX • AMD B650 chipset",
        "price": 319.90,
        "socket": "Socket AM5",
        "ddr": 5
    },
    {
        "name": "Gigabyte AORUS Z790 ELITE AX",
        "image": "./images/mobo3.png",
        "specs": "Socket 1700 • ATX • Intel Z790 chipset",
        "price": 299,
        "socket": "Socket 1700",
        "ddr": 5
    }
    ],

    gpu: [{
        "name": "Gigabyte GeForce RTX 4070 Ti Gaming OC 12G",
        "image": "./images/gpu1.png",
        "specs": "Max. 2,64GHz • GDDR6X • 3x DP, HDMI",
        "price": 969,
        "mlength": 336,
        "power": 291,
        // "score4k": 84.4,
        // "score1440": 141.1,
        "score": 185.1
    },
    {
        "name": "Inno3D GeForce RTX 3050 Twin X2 OC",
        "image": "./images/gpu2.png",
        "specs": "Max. 1,822GHz • GDDR6 • 3x DP, HDMI",
        "price": 299,
        "mlength": 240,
        "power": 231,
        // "score4k": 28.5,
        // "score1440": 51.2,
        "score": 69.2
    },
    {
        "name": "Gigabyte GeForce RTX 3070 Ti GAMING OC 8G",
        "image": "./images/gpu3.png",
        "specs": "Max. 1,83GHz • GDDR6X • 2x DP, 2x HDMI",
        "price": 739,
        "mlength": 320,
        "power": 311,
        // "score4k": 60.6,
        // "score1440": 99.4,
        "score": 113.8
    },
    ],

    ram: [{
        "name": "Corsair Vengeance LPX CMK16GX4M2B3200C16",
        "image": "./images/ram1.png",
        "specs": "16GB DDR4 @ 3.200MT/s, kit van 2",
        "price": 48.99,
        "ddr": 4
    },
    {
        "name": "Corsair Vengeance RGB Pro CMW32GX4M2Z3600C18",
        "image": "./images/ram2.png",
        "specs": "32GB DDR4 @ 3.600MT/s, kit van 2",
        "price": 99.99,
        "ddr": 4
    },
    {
        "name": "Corsair Vengeance CMK32GX5M2B5600C36",
        "image": "./images/ram3.png",
        "specs": "32GB DDR5 @ 5.600MT/s, kit van 2",
        "price": 99.99,
        "ddr": 5
    },
    ],

    case: [{
        "name": "Fractal Design North - TG Clear Charcoal Black",
        "image": "./images/case1.png",
        "specs": "Tower • 4 interne bays",
        "price": 163.23,
        "form": "ATX",
        "mlength": 355
    },
    {
        "name": "Cooler Master MasterBox NR200P Zwart",
        "image": "./images/case2.png",
        "specs": "Small form factor • 3 interne bays",
        "price": 63,
        "form": "ATX",
        "mlength": 330
    },
    {
        "name": "Corsair 4000D Airflow Tempered Glass Zwart",
        "image": "./images/case3.png",
        "specs": "Tower • 4 interne bays",
        "price": 103.90,
        "form": "ATX",
        "mlength": 360
    },
    ],

    ssd: [{
        "name": "Samsung 980 1TB",
        "image": "./images/ssd1.png",
        "specs": "M.2 80mm • 3d v-nand (TLC) • PCI-e 3.0 x4",
        "price": 75
    },
    {
        "name": "WD Blue SN570 1TB",
        "image": "./images/ssd2.png",
        "specs": "M.2 80mm • 3d v-nand (TLC) • PCI-e 3.0 x4",
        "price": 59.89
    },
    {
        "name": "Kingston NV2 1TB",
        "image": "./images/ssd3.png",
        "specs": "M.2 80mm • 3d v-nand (QLC) • PCI-e 4.0 x4",
        "price": 53.84
    },
    ],

    pfan: [{
        "name": "Cooler Master Hyper 212 Black Edition with LGA1700",
        "image": "./images/pfan1.png",
        "specs": "120mm diameter met 26dB geluidsproductie",
        "price": 36.91
    },
    {
        "name": "be quiet! Pure Rock 2 Zwart",
        "image": "./images/pfan2.png",
        "specs": "120mm diameter met 26,8dB geluidsproductie",
        "price": 39.55
    },
    {
        "name": "be quiet! Dark Rock Pro 4",
        "image": "./images/pfan3.png",
        "specs": "135mm diameter met 24,3dB geluidsproductie",
        "price": 88.35
    }
    ],

    cfan: [{
        "name": "Noctua NF-A20-PWM, 200mm",
        "image": "./images/cfan1.png",
        "specs": "18,1dB bij maximaal 800rpm",
        "price": 30.45,
        "fsize": 200
    }, {
        "name": "Arctic P12 PWM PST Zwart (5 stuks), 120mm",
        "image": "./images/cfan2.png",
        "specs": "23,5dB bij maximaal 1.800rpm",
        "price": 24.95,
        "fsize": 120
    }, {
        "name": "be quiet! Pure Wings 2 PWM, 140mm",
        "image": "./images/cfan3.png",
        "specs": "19,8dB bij maximaal 1.000rpm",
        "price": 10.17,
        "fsize": 140
    },],

    psu: [{
        "name": "Corsair RM850x (2021) Zwart",
        "image": "./images/psu1.png",
        "specs": "850W (80 Plus Gold) • volledig modulair",
        "price": 149.10,
        "power": 850
    }, {
        "name": "be quiet! Pure Power 11 400W",
        "image": "./images/psu2.png",
        "specs": "400W (80 Plus Gold) • niet-modulair",
        "price": 57.45,
        "power": 400
    }, {
        "name": "Seasonic Focus GX-550",
        "image": "./images/psu3.png",
        "specs": "550W (80 Plus Gold) • volledig modulair",
        "price": 97.89,
        "power": 550
    },]
}

// bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// maak voor elke categorie een lijst
allListings = []
Object.entries(components).forEach((key, val) => {
    // listing wordt voor het eerst gemaakt
    category = document.createElement('div');
    category.classList = key[0]

    // maak binnen elke categorie een productlisting aan
    for (let i = 0; i < key[1].length; i++) {

        listing = document.createElement('div');
        listing.classList = "pw-product"
        listing.innerHTML = `
            <div class="pw-p-image" style="background: url('${key[1][i].image}');"></div>
            <div class="pw-p-info">
                <p class="p-name">${key[1][i].name}</p>
                <p class="p-specs">${key[1][i].specs}</p>
                    <div>
                    <img src="./images/vergelijk.png" alt="">
                    <a class="add">pc bouwer</a>
                    <div class="warning"></div>   
                    </div>   
            </div>
            <div class="pw-p-clickout">
                <img src="./images/rating.png" alt="">
                <div>
                    <p>€ ` + key[1][i].price.toFixed(2).replace(".", ",").replace(",00", ",-") + `</p>
                    <a>${Math.floor(Math.random() * (12 - 3) + 3)} prijzen</a>
                </div>
            </div>`

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        Object.assign(listing, key[1][i]);

        // gedrag van de 'pc bouwer' knop
        listing.querySelector('a.add').addEventListener('click', () => {
            currentCategory = document.querySelectorAll('.pw-listing > div')[val]
            if (pick[val] == undefined) {
                pick[val] = key[1][i]
                currentCategory.querySelectorAll('.pw-product').forEach(li => {
                    li.classList.remove('active');
                })
                currentCategory.querySelectorAll('.pw-product')[i].classList.add('active');
            } else if (pick[val] != key[1][i]) {
                pick[val] = key[1][i]
                currentCategory.querySelectorAll('.pw-product').forEach(li => {
                    li.classList.remove('active');
                })
                currentCategory.querySelectorAll('.pw-product')[i].classList.add('active');
            } else {
                pick[val] = undefined;
                currentCategory.querySelectorAll('.pw-product').forEach(li => {
                    li.classList.remove('active');
                });
            }
            updateTool();
        });

        category.append(listing)
        allListings.push(listing);
    }
    document.querySelector('.pw-listing').append(category)
});

console.log(allListings);


productSelectors = document.querySelectorAll('.components li')

productSelectors.forEach(function (element, index) {

    e = element.querySelectorAll('div.product-image, a.add, a.edit')
    e.forEach(action => {
        action.addEventListener('click', function () {
            pageBody.classList = element.classList[0]
            updatePage()
            updateTool()
            hideToolM()
        });

        element.querySelector('a.delete').addEventListener('click', () => {
            pick[index] = undefined;
            updateTool()
        })
    })
})

function updatePage() {
    categoryName = document.querySelector('.category h1')
    if (pageBody.classList == "cpu") {
        categoryName.innerHTML = 'Processoren'
    } else if (pageBody.classList == "mobo") {
        categoryName.innerHTML = 'Moederborden'
    } else if (pageBody.classList == "gpu") {
        categoryName.innerHTML = 'Videokaarten'
    } else if (pageBody.classList == "ram") {
        categoryName.innerHTML = 'Geheugen intern'
    } else if (pageBody.classList == "case") {
        categoryName.innerHTML = 'Behuizingen'
    } else if (pageBody.classList == "ssd") {
        categoryName.innerHTML = 'Opslag'
    } else if (pageBody.classList == "pfan") {
        categoryName.innerHTML = 'Processorkoeling'
    } else if (pageBody.classList == "cfan") {
        categoryName.innerHTML = 'Ventilatoren'
    } else if (pageBody.classList == "psu") {
        categoryName.innerHTML = 'Voeding'
    }
    updateTool()
}

// best buy guide knoppen -- aanbevelingen vullen tool in
bestBuy = document.querySelectorAll('.bbg')
bestBuy[0].addEventListener('click', () => {
    document.querySelectorAll('.pw-product').forEach(li => {
        li.classList.remove('active');
    })
    pick[0] = components.cpu[0];
    document.querySelectorAll('.pw-listing > div')[0].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[1] = components.mobo[0];
    document.querySelectorAll('.pw-listing > div')[1].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[2] = components.gpu[0];
    document.querySelectorAll('.pw-listing > div')[2].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[3] = components.ram[0];
    document.querySelectorAll('.pw-listing > div')[3].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[4] = components.case[0];
    document.querySelectorAll('.pw-listing > div')[4].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[5] = components.ssd[0];
    document.querySelectorAll('.pw-listing > div')[5].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[6] = components.pfan[0];
    document.querySelectorAll('.pw-listing > div')[6].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[7] = components.cfan[0];
    document.querySelectorAll('.pw-listing > div')[7].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[8] = components.psu[2];
    document.querySelectorAll('.pw-listing > div')[8].querySelectorAll('.pw-product')[2].classList.add('active');

    updateTool()
});
bestBuy[1].addEventListener('click', () => {
    document.querySelectorAll('.pw-product').forEach(li => {
        li.classList.remove('active');
    })
    pick[0] = components.cpu[2];
    document.querySelectorAll('.pw-listing > div')[0].querySelectorAll('.pw-product')[2].classList.add('active');
    pick[1] = components.mobo[2];
    document.querySelectorAll('.pw-listing > div')[1].querySelectorAll('.pw-product')[2].classList.add('active');
    pick[2] = components.gpu[0];
    document.querySelectorAll('.pw-listing > div')[2].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[3] = components.ram[2];
    document.querySelectorAll('.pw-listing > div')[3].querySelectorAll('.pw-product')[2].classList.add('active');
    pick[4] = components.case[0]
    document.querySelectorAll('.pw-listing > div')[4].querySelectorAll('.pw-product')[0].classList.add('active');
    pick[5] = components.ssd[1];
    document.querySelectorAll('.pw-listing > div')[5].querySelectorAll('.pw-product')[1].classList.add('active');
    pick[6] = components.pfan[1];
    document.querySelectorAll('.pw-listing > div')[6].querySelectorAll('.pw-product')[1].classList.add('active');
    pick[7] = components.cfan[1];
    document.querySelectorAll('.pw-listing > div')[7].querySelectorAll('.pw-product')[1].classList.add('active');
    pick[8] = components.psu[0];
    document.querySelectorAll('.pw-listing > div')[8].querySelectorAll('.pw-product')[0].classList.add('active');
    updateTool()
});

//reset knop -- maak tool leeg
reset = document.querySelector('.controls a.reset')
reset.addEventListener('click', () => {
    pick[0] = undefined
    pick[1] = undefined
    pick[2] = undefined
    pick[3] = undefined
    pick[4] = undefined
    pick[5] = undefined
    pick[6] = undefined
    pick[7] = undefined
    pick[8] = undefined
    updateTool()
});

modifier = 1;

function updateTool() {
    //bereken totale prijs en stroomverbruik/levering
    price = [];
    power = [];
    totalPrice = document.querySelector('.builder-price > .total > .value')
    totalPower = document.querySelector('.power-value')

    summary = document.querySelector('.summary')
    summary.querySelectorAll('li').forEach(element => {
        element.classList.remove('show')
    })

    // voeg gekozen componenten toe aan lijst (of verwijder deze)
    for (let i = 0; i < productSelectors.length; i++) {
        productSelectors[i].classList.remove('error')
        if (pick[i]) {
            productSelectors[i].querySelector('.product-image').style.background = `url(${pick[i].image})`
            productSelectors[i].querySelector('.product-name').innerHTML = pick[i].name
            productSelectors[i].querySelector('.product-specline').innerHTML = pick[i].specs
            productSelectors[i].querySelector('.price').innerText = '€ ' + pick[i].price.toFixed(2).replace(".", ",").replace(",00", ",-");
            productSelectors[i].classList.add('full');
            price.push(pick[i].price)

            if (productSelectors[i].classList.contains('cpu') || (productSelectors[i].classList.contains('gpu'))) {
                productSelectors[i].querySelector('.product-info').classList.add('hasPerformance')
                productSelectors[i].querySelector('.power').innerText = `${pick[i].power}W`
                power.push(pick[i].power)
                productSelectors[i].querySelector('.performance .score').innerText = (pick[i].score * modifier).toFixed(1).replace(".", ",") + ' fps'
                productSelectors[i].querySelector('.price-performance').innerHTML = '€ ' + (pick[i].price / (pick[i].score * modifier)).toFixed(2).replace(".", ",").replace(",00", ",-") + ' / fps';
            }
        } else if (!pick[i]) {
            productSelectors[i].querySelector('.product-image').style.background = ""
            productSelectors[i].querySelector('.product-name').innerHTML = ""
            productSelectors[i].querySelector('.product-specline').innerHTML = ""
            productSelectors[i].querySelector('.price').innerText = ""
            productSelectors[i].classList.remove('full');
            if (productSelectors[i].classList.contains('cpu') || (productSelectors[i].classList.contains('gpu'))) {
                productSelectors[i].querySelector('.product-info').classList.remove('hasPerformance')
            }

            document.querySelectorAll('.pw-listing > div')[i].querySelectorAll('.pw-product').forEach(li => {
                li.classList.remove('active');
            })
        }

        // bron: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
        totalPrice.innerHTML = '€ ' + price.reduce((partialSum, a) => partialSum + a, 0).toFixed(2).replace(".", ",").replace(",00", ",-");

        if (pick[8]) { //er is een voeding gekozen
            totalPower.innerHTML = `${power.reduce((partialSum, a) => partialSum + a, 0)}/${pick[8].power}W`
        } else { //er is nog geen voeding gekozen
            totalPower.innerHTML = `${power.reduce((partialSum, a) => partialSum + a, 0)}W`
        }

        // highlight geselecteerde productcategorie
        // reset
        productSelectors[i].id = '';

        // pas highlight toe
        if (productSelectors[i].classList.contains(pageBody.classList)) {
            productSelectors[i].id = 'selected';
        }
    }

    // compatibiliteitsfilter
    // voor elk product in de PRICEWATCH
    allListings.forEach(element => {
        // controleer alle producten in de 'moederbord' categorie
        if (element.parentNode.classList.contains('mobo')) {

            // maak in eerste instantie alles compatibel (reset)
            element.classList.remove('incompatible');

            // maak alle moederborden die qua socket niet overeenkomen met de gekozen processor "incompatibel"
            // socket
            if (pick[0]) {
                if ((pick[0].socket != element.socket)) {
                    element.classList.add('incompatible');
                }
            }

            // maak alle moederborden die qua geheugen niet overeenkomen met de gekozen processor "incompatibel"
            // ddr
            if (pick[3]) {
                // maak een uitzondering voor moederborden die wel overeenkomen met het gekozen geheugen maar niet met de socket
                // hierdoor wordt de gebruiker verschillende oplossingsrichtingen laten zien
                if ((pick[3].ddr == element.ddr)) {
                    element.classList.remove('incompatible');
                }
                // maak de rest wel compatibel
                if ((pick[3].ddr != element.ddr)) {
                    element.classList.add('incompatible');
                }
            }
        };

        if (element.parentNode.classList.contains('cpu')) {
            // socket
            element.classList.remove('incompatible');
            if (pick[1]) {
                if ((pick[1].socket != element.socket)) {
                    element.classList.add('incompatible');
                }
            }

        };

        if (element.parentNode.classList.contains('ram')) {
            // ddr
            element.classList.remove('incompatible');
            if (pick[1]) {
                if ((pick[1].ddr != element.ddr)) {
                    element.classList.add('incompatible');
                }
            }
        };

        if (element.parentNode.classList.contains('gpu')) {
            // lengte
            element.classList.remove('incompatible');
            if (pick[4]) {
                if ((pick[4].mlength < element.mlength)) {
                    element.classList.add('incompatible');
                }
            }
        };

        if (element.parentNode.classList.contains('case')) {
            // lengte
            element.classList.remove('incompatible');
            if (pick[2]) {
                if ((pick[2].mlength >= element.mlength)) {
                    element.classList.add('incompatible');
                }
            }
        };


    });

    // cpu & mobo socket
    if (pick[0] && pick[1]) {
        if (pick[0].socket != pick[1].socket) {
            summary.querySelector('.socket-mismatch').classList.add('show');
            productSelectors[0].classList.add('error')
            productSelectors[1].classList.add('error')
            summary.querySelector('.socket-mismatch').innerHTML = `<p>Je <a>moederbord (${pick[1].socket})</a> en <a>processor (${pick[0].socket})</a> verschillen van socket.</p>`

            summary.querySelectorAll('.socket-mismatch a')[0].addEventListener('click', () => {
                pageBody.classList = "mobo"
                updatePage()
                hideToolM()
            })

            summary.querySelectorAll('.socket-mismatch a')[1].addEventListener('click', () => {
                pageBody.classList = "cpu"
                updatePage()
                hideToolM()
            })

        } else {
            summary.querySelector('.socket-mismatch').classList.remove('show');
            productSelectors[0].classList.remove('error')
            productSelectors[1].classList.remove('error')
        }
    }

    // voeding check
    if (pick[8] && pick[0] && pick[2]) {
        powerSum = power.reduce((partialSum, a) => partialSum + a, 0)
        if ((powerSum + 100) > pick[8].power) {
            summary.querySelector('.not-enough-power').classList.add('show');
            summary.querySelector('.too-much-power').classList.remove('show');
            totalPower.parentElement.classList.remove('caution');
            totalPower.parentElement.classList.add('critical');
            productSelectors[8].classList.add('error')

            summary.querySelector('.not-enough-power').innerHTML = `<p>Je <a>voeding</a> levert te weinig vermogen voor je gekozen componenten.</p>`

            console.log(summary.querySelectorAll('a'))
            summary.querySelectorAll('.not-enough-power a')[0].addEventListener('click', () => {
                pageBody.classList = "psu"
                updatePage()
                hideToolM()
            })

            // summary.querySelectorAll('.not-enough-power a')[1].addEventListener('click', () => {
            //     pageBody.classList = "cpu"
            //     updatePage()
            //     hideToolM()
            // })

            // summary.querySelectorAll('.not-enough-power a')[2].addEventListener('click', () => {
            //     pageBody.classList = "gpu"
            //     updatePage()
            //     hideToolM()
            // })
            // [Kies een krachtigere voeding] of [Kies een zuinigere processor] of [Kies een zuinigere videokaart] of 

        } else if ((powerSum + 400) < pick[8].power) {
            summary.querySelector('.too-much-power').classList.add('show');
            summary.querySelector('.not-enough-power').classList.remove('show');
            totalPower.parentElement.classList.remove('critical');
            totalPower.parentElement.classList.add('caution');
            productSelectors[8].classList.add('error')

            summary.querySelector('.too-much-power').innerHTML = `<p>Je <a>voeding</a> levert veel meer vermogen dan dat je nodig hebt.</p>`

            console.log(summary.querySelectorAll('a'))
            summary.querySelectorAll('.too-much-power')[0].addEventListener('click', () => {
                pageBody.classList = "psu"
                updatePage()
                hideToolM()
            })
            // [Kies een zuinigere voeding]

        } else {
            summary.querySelector('.not-enough-power').classList.remove('show');
            summary.querySelector('.too-much-power').classList.remove('show');
            totalPower.parentElement.classList.remove('caution');
            totalPower.parentElement.classList.remove('critical');
            productSelectors[8].classList.remove('error')
        }
    } else {
        totalPower.parentElement.classList.remove('caution');
        totalPower.parentElement.classList.remove('critical');
    }

    // videokaart lengte check 
    if (pick[2] && pick[4]) {
        if (pick[2].mlength >= pick[4].mlength) {
            summary.querySelector('.too-long').classList.add('show');
            productSelectors[2].classList.add('error')
            productSelectors[4].classList.add('error')
            summary.querySelector('.too-long').innerHTML = `<p>Je <a>videokaart (${pick[2].mlength}mm)</a> past niet binnen je <a>behuizing (${pick[4].mlength}mm)</a>.</p>`
            // [Kies een langere behuizing] of [Kies een kleinere videokaart]
            summary.querySelectorAll('.too-long a')[0].addEventListener('click', () => {
                pageBody.classList = "gpu"
                updatePage()
                hideToolM()
            })

            summary.querySelectorAll('.too-long a')[1].addEventListener('click', () => {
                pageBody.classList = "case"
                updatePage()
                hideToolM()
            })
        } else {
            summary.querySelector('.too-long').classList.remove('show');
            productSelectors[2].classList.remove('error')
            productSelectors[4].classList.remove('error')
        }
    }

    // ddr check
    if (pick[1] && pick[3]) {
        if (pick[1].ddr != pick[3].ddr) {
            summary.querySelector('.ddr-mismatch').classList.add('show');
            productSelectors[1].classList.add('error')
            productSelectors[3].classList.add('error')
            summary.querySelector('.ddr-mismatch').innerHTML = `<p>Je <a>geheugen (DDR${pick[3].ddr})</a> zal niet passen in je <a>moederbord (DDR${pick[1].ddr})</a>.</p>`
            // [Kies een DDRX moederbord]
            summary.querySelectorAll('.ddr-mismatch a')[0].addEventListener('click', () => {
                pageBody.classList = "ram"
                updatePage()
                hideToolM()
            })

            summary.querySelectorAll('.ddr-mismatch a')[1].addEventListener('click', () => {
                pageBody.classList = "mobo"
                updatePage()
                hideToolM()
            })
        } else {
            summary.querySelector('.ddr-mismatch').classList.remove('show');
            productSelectors[1].classList.remove('error')
            productSelectors[3].classList.remove('error')
        }

    }

    // laat samenvatting van problemen zien als er problemen zijn, zo niet verberg deze
    if (summary.querySelectorAll('li.show').length > 0) {
        summary.classList.remove('hidden')
    } else if (summary.querySelectorAll('li.show').length == 0) {
        summary.classList.add('hidden')
    }

    // prestatiescore resolutie selector
    dropdown = document.querySelector('.dropdown')
    performanceList = document.querySelectorAll('.dropdown > li')
    performanceList.forEach(element => {
        element.onclick = function () {
            document.querySelector('.dropdown').prepend(this);
            modifier = (element.value / 100);
            dropdown.classList.toggle('show');
            updateTool();
        }
    });


}

// bron: https://stackoverflow.com/questions/58837011/addeventlistener-to-the-whole-body-of-a-page-except-one-div
document.body.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown li')) {
        dropdown.classList.remove('show');
    }
});

updateTool();