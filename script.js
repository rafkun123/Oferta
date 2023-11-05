const products = document.querySelector('.products')
const liteSinglePerpetual = document.querySelector('.liteSinglePerpetual')
const maintenanceLiteSinglePerpetual = document.querySelector('.maintenanceLiteSinglePerpetual')
const proSinglePerpetual = document.querySelector('.proSinglePerpetual')
const maintenanceProSinglePerpetual = document.querySelector('.maintenanceProSinglePerpetual')
const bimSinglePerpetual = document.querySelector('.bimSinglePerpetual')
const maintenanceBimSinglePerpetual = document.querySelector('.maintenanceBimSinglePerpetual')
const mechanicalSinglePerpetual = document.querySelector('.mechanicalSinglePerpetual')
const maintenanceMechanicalSinglePerpetual = document.querySelector('.maintenanceMechanicalSinglePerpetual')
const ultimateSinglePerpetual = document.querySelector('.ultimateSinglePerpetual')
const maintenanceUltimateSinglePerpetual = document.querySelector('.maintenanceUltimateSinglePerpetual')
const communicatorSinglePerpetual = document.querySelector('.communicatorSinglePerpetual')
const maintenanceCommunicatorSinglePerpetual = document.querySelector('.maintenanceCommunicatorSinglePerpetual')

const liteNetworkPerpetual = document.querySelector('.liteNetworkPerpetual')
const maintenanceLiteNetworkPerpetual = document.querySelector('.maintenanceLiteNetworkPerpetual')
const proNetworkPerpetual = document.querySelector('.proNetworkPerpetual')
const maintenanceProNetworkPerpetual = document.querySelector('.maintenanceProNetworkPerpetual')
const bimNetworkPerpetual = document.querySelector('.bimNetworkPerpetual')
const maintenanceBimNetworkPerpetual = document.querySelector('.maintenanceBimNetworkPerpetual')
const mechanicalNetworkPerpetual = document.querySelector('.mechanicalNetworkPerpetual')
const maintenanceMechanicalNetworkPerpetual = document.querySelector('.maintenanceMechanicalNetworkPerpetual')
const ultimateNetworkPerpetual = document.querySelector('.ultimateNetworkPerpetual')
const maintenanceUltimateNetworkPerpetual = document.querySelector('.maintenanceUltimateNetworkPerpetual')
const communicatorNetworkPerpetual = document.querySelector('.communicatorNetworkPerpetual')
const maintenanceCommunicatorNetworkPerpetual = document.querySelector('.maintenanceCommunicatorNetworkPerpetual')

const liteSingleYearly = document.querySelector('.liteSingleYearly')
const proSingleYearly = document.querySelector('.proSingleYearly')
const bimSingleYearly = document.querySelector('.bimSingleYearly')
const mechanicalSingleYearly = document.querySelector('.mechanicalSingleYearly')
const ultimateSingleYearly = document.querySelector('.ultimateSingleYearly')
const communicatorSingleYearly = document.querySelector('.communicatorSingleYearly')

const liteNetworkYearly = document.querySelector('.liteNetworkYearly')
const proNetworkYearly = document.querySelector('.proNetworkYearly')
const bimNetworkYearly = document.querySelector('.bimNetworkYearly')
const mechanicalNetworkYearly = document.querySelector('.mechanicalNetworkYearly')
const ultimateNetworkYearly = document.querySelector('.ultimateNetworkYearly')
const communicatorNetworkYearly = document.querySelector('.communicatorNetworkYearly')

const v21LiteUpgrade = document.querySelector('.v21LiteUpgrade')
const v22LiteUpgrade = document.querySelector('.v22LiteUpgrade')
const v23LiteUpgrade = document.querySelector('.v23LiteUpgrade')
const v21ProUpgrade = document.querySelector('.v21ProUpgrade')
const v22ProUpgrade = document.querySelector('.v22ProUpgrade')
const v23ProUpgrade = document.querySelector('.v23ProUpgrade')
const v21BimUpgrade = document.querySelector('.v21BimUpgrade')
const v22BimUpgrade = document.querySelector('.v22BimUpgrade')
const v23BimUpgrade = document.querySelector('.v23BimUpgrade')
const v21MechanicalUpgrade = document.querySelector('.v21MechanicalUpgrade')
const v22MechanicalUpgrade = document.querySelector('.v22MechanicalUpgrade')
const v23MechanicalUpgrade = document.querySelector('.v23MechanicalUpgrade')
const v21UltimateUpgrade = document.querySelector('.v21UltimateUpgrade')
const v22UltimateUpgrade = document.querySelector('.v22UltimateUpgrade')
const v23UltimateUpgrade = document.querySelector('.v23UltimateUpgrade')
const v21CommunicatorUpgrade = document.querySelector('.v21CommunicatorUpgrade')
const v22CommunicatorUpgrade = document.querySelector('.v22CommunicatorUpgrade')
const v23CommunicatorUpgrade = document.querySelector('.v23CommunicatorUpgrade')

const liteToPro = document.querySelector('.liteToPro')
const liteToBim = document.querySelector('.liteToBim')
const liteToMechanical = document.querySelector('.liteToMechanical')
const liteToUltimate = document.querySelector('.liteToUltimate')
const proToBim = document.querySelector('.proToBim')
const proToMechanical = document.querySelector('.proToMechanical')
const proToUltimate = document.querySelector('.proToUltimate')
const bimToUltimate = document.querySelector('.bimToUltimate')
const mechanicalToUltimate = document.querySelector('.mechanicalToUltimate')

const liteTraining = document.querySelector('.liteTraining')
const proTraining = document.querySelector('.proTraining')
const bimTraining = document.querySelector('.bimTraining')
const mechanicalTraining = document.querySelector('.mechanicalTraining')

const refresh = document.querySelector('.refresh')
const pdfGenerate = document.querySelector('.pdfGenerate')
const euroCourse = document.querySelector('.euroCourse')
const myTable = document.querySelector('#myTable')

let maintenanceMultiplier = 0.2
let networkMultiplier = 1.5
let v21Multiplier = 0.65
let v22Multiplier = 0.85
let v23Multiplier = 1.05

let liteSinglePerpetualPrice = 590
let maintenanceLiteSinglePerpetualPrice = maintenanceMultiplier*liteSinglePerpetualPrice
let proSinglePerpetualPrice = 1265
let maintenanceProSinglePerpetualPrice = maintenanceMultiplier*proSinglePerpetualPrice
let bimSinglePerpetualPrice = 1890
let maintenanceBimSinglePerpetualPrice = maintenanceMultiplier*bimSinglePerpetualPrice
let mechanicalSinglePerpetualPrice = 1780
let maintenanceMechanicalSinglePerpetualPrice = maintenanceMultiplier*mechanicalSinglePerpetualPrice
let ultimateSinglePerpetualPrice = 2100
let maintenanceUltimateSinglePerpetualPrice = maintenanceMultiplier*ultimateSinglePerpetualPrice
let communicatorSinglePerpetualPrice = 525
let maintenanceCommunicatorSinglePerpetualPrice = maintenanceMultiplier*communicatorSinglePerpetualPrice

let liteNetworkPerpetualPrice = 885
let maintenanceLiteNetworkPerpetualPrice = maintenanceMultiplier*liteNetworkPerpetualPrice
let proNetworkPerpetualPrice = 1898
let maintenanceProNetworkPerpetualPrice = maintenanceMultiplier*proNetworkPerpetualPrice
let bimNetworkPerpetualPrice = 2835
let maintenanceBimNetworkPerpetualPrice = maintenanceMultiplier*bimNetworkPerpetualPrice
let mechanicalNetworkPerpetualPrice = 2670
let maintenanceMechanicalNetworkPerpetualPrice = maintenanceMultiplier*mechanicalNetworkPerpetualPrice
let ultimateNetworkPerpetualPrice = 3150
let maintenanceUltimateNetworkPerpetualPrice = maintenanceMultiplier*ultimateNetworkPerpetualPrice
let communicatorNetworkPerpetualPrice = 788
let maintenanceCommunicatorNetworkPerpetualPrice = maintenanceMultiplier*communicatorNetworkPerpetualPrice

let liteSingleYearlyPrice = 314
let proSingleYearlyPrice = 677
let bimSingleYearlyPrice = 1010
let mechanicalSingleYearlyPrice = 950
let ultimateSingleYearlyPrice = 1120
let communicatorSingleYearlyPrice = 280
let liteNetworkYearlyPrice = networkMultiplier*liteSingleYearlyPrice
let proNetworkYearlyPrice = networkMultiplier*proSingleYearlyPrice
let bimNetworkYearlyPrice = networkMultiplier*bimSingleYearlyPrice
let mechanicalNetworkYearlyPrice = networkMultiplier*mechanicalSingleYearlyPrice
let ultimateNetworkYearlyPrice = networkMultiplier*ultimateSingleYearlyPrice
let communicatorNetworkYearlyPrice = networkMultiplier*communicatorSingleYearlyPrice

let v21LiteUpgradePrice = v21Multiplier * liteSinglePerpetualPrice
let v22LiteUpgradePrice = v22Multiplier * liteSinglePerpetualPrice
let v23LiteUpgradePrice = v23Multiplier * liteSinglePerpetualPrice
let v21ProUpgradePrice = v21Multiplier * proSinglePerpetualPrice
let v22ProUpgradePrice = v22Multiplier * proSinglePerpetualPrice
let v23ProUpgradePrice = v23Multiplier * proSinglePerpetualPrice
let v21BimUpgradePrice = v21Multiplier * bimSinglePerpetualPrice
let v22BimUpgradePrice = v22Multiplier * bimSinglePerpetualPrice
let v23BimUpgradePrice = v23Multiplier * bimSinglePerpetualPrice
let v21MechanicalUpgradePrice = v21Multiplier * mechanicalSinglePerpetualPrice
let v22MechanicalUpgradePrice = v22Multiplier * mechanicalSinglePerpetualPrice
let v23MechanicalUpgradePrice = v23Multiplier * mechanicalSinglePerpetualPrice
let v21UltimateUpgradePrice = v21Multiplier * ultimateSinglePerpetualPrice
let v22UltimateUpgradePrice = v22Multiplier * ultimateSinglePerpetualPrice
let v23UltimateUpgradePrice = v23Multiplier * ultimateSinglePerpetualPrice
let v21CommunicatorUpgradePrice = v21Multiplier * communicatorSinglePerpetualPrice
let v22CommunicatorUpgradePrice = v22Multiplier * communicatorSinglePerpetualPrice
let v23CommunicatorUpgradePrice = v23Multiplier * communicatorSinglePerpetualPrice

let liteToProPrice = proSinglePerpetualPrice+(maintenanceMultiplier*proSinglePerpetualPrice)-liteSinglePerpetualPrice
let liteToBimPrice = bimSinglePerpetualPrice+(maintenanceMultiplier*bimSinglePerpetualPrice)-liteSinglePerpetualPrice
let liteToMechanicalPrice = mechanicalSinglePerpetualPrice+(maintenanceMultiplier*mechanicalSinglePerpetualPrice)-liteSinglePerpetualPrice
let liteToUltimatePrice = ultimateSinglePerpetualPrice+(maintenanceMultiplier*ultimateSinglePerpetualPrice)-liteSinglePerpetualPrice
let proToBimPrice = bimSinglePerpetualPrice+(maintenanceMultiplier*bimSinglePerpetualPrice)-proSinglePerpetualPrice
let proToMechanicalPrice = mechanicalSinglePerpetualPrice+(maintenanceMultiplier*mechanicalSinglePerpetualPrice)-proSinglePerpetualPrice
let proToUltimatePrice = ultimateSinglePerpetualPrice+(maintenanceMultiplier*ultimateSinglePerpetualPrice)-proSinglePerpetualPrice
let bimToUltimatePrice = ultimateSinglePerpetualPrice+(maintenanceMultiplier*ultimateSinglePerpetualPrice)-bimSinglePerpetualPrice
let mechanicalToUltimatePrice = ultimateSinglePerpetualPrice+(maintenanceMultiplier*ultimateSinglePerpetualPrice)-mechanicalSinglePerpetualPrice

let liteTrainingPrice = 1000
let proTrainingPrice = 1000
let bimTrainingPrice = 2000
let mechanicalTrainingPrice = 2000

const salesName = document.querySelector('.salesName')
const salesMail = document.querySelector('.salesMail')
const salesPhone = document.querySelector('.salesPhone')
const dominika = document.querySelector('.dominika')
const marcin = document.querySelector('.marcin')
const artur = document.querySelector('.artur')
const rafal = document.querySelector('.rafal')

DodajDodaj = e =>{
    switch(e.target.classList.value){
        case 'dominika':
            salesName.textContent = 'Dominika Zalewska'
            salesMail.innerHTML = 'mail: dzalewska@vectorsoftware.pl'
            salesPhone.innerHTML = 'tel: +48 733-518-149'
            break;
        case 'marcin':
            salesName.textContent = 'Marcin Marczewski'
            salesMail.innerHTML = 'mail: mmarczewski@vectorsoftware.pl'
            salesPhone.innerHTML = 'tel: +48 506-178-062'
            break;
        case 'artur':
            salesName.textContent = 'Artur Dalidowicz'
            salesMail.innerHTML = 'mail: adalidowicz@vectorsoftware.pl'
            salesPhone.innerHTML = 'tel: +48 880-345-308'
            break;
        case 'rafal':
            salesName.textContent = 'Rafal Kunicki'
            salesMail.innerHTML = 'mail: rkunicki@vectorsoftware.pl'
            salesPhone.innerHTML = 'tel: +48 538-513-323'
            break;
    }
}

dominika.addEventListener('click', DodajDodaj)
marcin.addEventListener('click', DodajDodaj)
artur.addEventListener('click', DodajDodaj)
rafal.addEventListener('click', DodajDodaj)


const buttonCustomProduct = document.querySelector('.buttonCustomProduct')
const customProductName = document.querySelector('.customProductName')
const customProductSinglePrice = document.querySelector('.customProductSinglePrice')
const customProductQuantity = document.querySelector('.customProductQuantity')

buttonCustomProduct.addEventListener('click', function (){

    product = document.createElement('div')
    product.classList.add('product')
    products.append(product)

    for (let i=0; i<6; i++){
        makeElement = document.createElement('div')
        product.append(makeElement)
    }

    product.firstElementChild.innerHTML=customProductName.value

    for (let i=1; i<5; i++){
        makeInput = document.createElement('input')
        product.children[i].append(makeInput)
    }

    product.children[5].append(document.createElement('i'))
    product.children[5].children[0].classList.add('fa-solid')
    product.children[5].children[0].classList.add('fa-xmark')
    
    product.children[1].children[0].value = customProductSinglePrice.value
    product.children[2].children[0].value = customProductQuantity.value
    product.children[4].children[0].value = parseFloat(customProductSinglePrice.value*customProductQuantity.value)

    customProductName.value = ''
    customProductQuantity.value = ''
    customProductSinglePrice.value = ''
})

AddProduct = e =>{

    product = document.createElement('div')
    product.classList.add('product')
    products.append(product)

    for (let i=0; i<6; i++){
        makeElement = document.createElement('div')
        product.append(makeElement)
    }
  
    product.firstElementChild.innerHTML=e.target.textContent

    for (let i=1; i<5; i++){
        makeInput = document.createElement('input')
        product.children[i].append(makeInput)
    }

    product.children[5].append(document.createElement('i'))
    product.children[5].children[0].classList.add('fa-solid')
    product.children[5].children[0].classList.add('fa-xmark')


    let aktualnyKurs;

    fetch('http://api.nbp.pl/api/exchangerates/rates/a/eur/')
    .then(res => res.json())
    .then(data => {
        aktualnyKurs = data.rates[0].mid;

    switch (e.target.classList.value){
        case 'liteSinglePerpetual':
            price = liteSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'proSinglePerpetual':
            price = proSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'bimSinglePerpetual':
            price = bimSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'mechanicalSinglePerpetual':
            price = mechanicalSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'ultimateSinglePerpetual':
            price = ultimateSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'communicatorSinglePerpetual':
            price = communicatorSinglePerpetualPrice
            AddValueToProducts();
            break;

        case 'maintenanceLiteSinglePerpetual':
            price = maintenanceLiteSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceProSinglePerpetual':
            price = maintenanceProSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceBimSinglePerpetual':
            price = maintenanceBimSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceMechanicalSinglePerpetual':
            price = maintenanceMechanicalSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceUltimateSinglePerpetual':
            price = maintenanceUltimateSinglePerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceCommunicatorSinglePerpetual':
            price = maintenanceCommunicatorSinglePerpetualPrice
            AddValueToProducts();
            break;

        case 'liteNetworkPerpetual':
            price = liteNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'proNetworkPerpetual':
            price = proNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'bimNetworkPerpetual':
            price = bimNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'mechanicalNetworkPerpetual':
            price = mechanicalNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'ultimateNetworkPerpetual':
            price = ultimateNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'communicatorNetworkPerpetual':
            price = communicatorNetworkPerpetualPrice
            AddValueToProducts();
            break;

        case 'maintenanceLiteNetworkPerpetual':
            price = maintenanceLiteNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceProNetworkPerpetual':
            price = maintenanceProNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceBimNetworkPerpetual':
            price = maintenanceBimNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceMechanicalNetworkPerpetual':
            price = maintenanceMechanicalNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceUltimateNetworkPerpetual':
            price = maintenanceUltimateNetworkPerpetualPrice
            AddValueToProducts();
            break;
        case 'maintenanceCommunicatorNetworkPerpetual':
            price = maintenanceCommunicatorNetworkPerpetualPrice
            AddValueToProducts();
            break;

        case 'liteSingleYearly':
            price = liteSingleYearlyPrice
            AddValueToProducts();
            break;
        case 'proSingleYearly':
            price = proSingleYearlyPrice
            AddValueToProducts();
            break;
        case 'bimSingleYearly':
            price = bimSingleYearlyPrice
            AddValueToProducts();
            break;
        case 'mechanicalSingleYearly':
            price = mechanicalSingleYearlyPrice
            AddValueToProducts();
            break;
        case 'ultimateSingleYearly':
            price = ultimateSingleYearlyPrice
            AddValueToProducts();
            break;
        case 'communicatorSingleYearly':
            price = communicatorSingleYearlyPrice
            AddValueToProducts();
            break;

        case 'liteNetworkYearly':
            price = liteNetworkYearlyPrice
            AddValueToProducts();
            break;
        case 'proNetworkYearly':
            price = proNetworkYearlyPrice
            AddValueToProducts();
            break;
        case 'bimNetworkYearly':
            price = bimNetworkYearlyPrice
            AddValueToProducts();
            break;
        case 'mechanicalNetworkYearly':
            price = mechanicalNetworkYearlyPrice
            AddValueToProducts();
            break;
        case 'ultimateNetworkYearly':
            price = ultimateNetworkYearlyPrice
            AddValueToProducts();
            break;
        case 'communicatorNetworkYearly':
            price = communicatorNetworkYearlyPrice
            AddValueToProducts();
            break;

        case 'v21LiteUpgrade':
            price = v21LiteUpgradePrice
            AddValueToProducts();
            break;
        case 'v22LiteUpgrade':
            price = v22LiteUpgradePrice
            AddValueToProducts();
            break;
        case 'v23LiteUpgrade':
            price = v23LiteUpgradePrice
            AddValueToProducts();
            break;
        case 'v21ProUpgrade':
            price = v21ProUpgradePrice
            AddValueToProducts();
            break;
        case 'v22ProUpgrade':
            price = v22ProUpgradePrice
            AddValueToProducts();
            break;
        case 'v23ProUpgrade':
            price = v23ProUpgradePrice
            AddValueToProducts();
            break;
        case 'v21BimUpgrade':
            price = v21BimUpgradePrice
            AddValueToProducts();
            break;
        case 'v22BimUpgrade':
            price = v22BimUpgradePrice
            AddValueToProducts();
            break;
        case 'v23BimUpgrade':
            price = v23BimUpgradePrice
            AddValueToProducts();
            break;
        case 'v21MechanicalUpgrade':
            price = v21MechanicalUpgradePrice
            AddValueToProducts();
            break;
        case 'v22MechanicalUpgrade':
            price = v22MechanicalUpgradePrice
            AddValueToProducts();
            break;
        case 'v23MechanicalUpgrade':
            price = v23MechanicalUpgradePrice
            AddValueToProducts();
            break;
        case 'v21UltimateUpgrade':
            price = v21UltimateUpgradePrice
            AddValueToProducts();
            break;
        case 'v22UltimateUpgrade':
            price = v22UltimateUpgradePrice
            AddValueToProducts();
            break;
        case 'v23UltimateUpgrade':
            price = v23UltimateUpgradePrice
            AddValueToProducts();
            break;
        case 'v21CommunicatorUpgrade':
            price = v21CommunicatorUpgradePrice
            AddValueToProducts();
            break;
        case 'v22CommunicatorUpgrade':
            price = v22CommunicatorUpgradePrice
            AddValueToProducts();
            break;
        case 'v23CommunicatorUpgrade':
            price = v23CommunicatorUpgradePrice
            AddValueToProducts();
            break;

        case 'liteToPro':
            price = liteToProPrice
            AddValueToProducts();
            break;
        case 'liteToBim':
            price = liteToBimPrice
            AddValueToProducts();
            break;
        case 'liteToMechanical':
            price = liteToMechanicalPrice
            AddValueToProducts();
            break;
        case 'liteToUltimate':
            price = liteToUltimatePrice
            AddValueToProducts();
            break;
        case 'proToBim':
            price = proToBimPrice
            AddValueToProducts();
            break;
        case 'proToMechanical':
            price = proToMechanicalPrice
            AddValueToProducts();
            break;
        case 'proToUltimate':
            price = proToUltimatePrice
            AddValueToProducts();
            break;
        case 'bimToUltimate':
            price = bimToUltimatePrice
            AddValueToProducts();
            break;
        case 'mechanicalToUltimate':
            price = mechanicalToUltimatePrice
            AddValueToProducts();
            break;

        case 'liteTraining':
            price = liteTrainingPrice
            AddTrainingValue();
            break;
        case 'proTraining':
            price = proTrainingPrice
            AddTrainingValue();
            break;
        case 'bimTraining':
            price = bimTrainingPrice
            AddTrainingValue();
            break;
        case 'mechanicalTraining':
            price = mechanicalTrainingPrice
            AddTrainingValue();
            break;
    }
})


    AddValueToProducts = e =>{
        product.children[1].children[0].value=price*aktualnyKurs
        product.children[2].children[0].value=1
        product.children[3].children[0].value=0
        product.children[4].children[0].value=product.children[1].children[0].value*product.children[2].children[0].value
    }

    AddTrainingValue = e =>{
        product.children[1].children[0].value=price
        product.children[2].children[0].value=1
        product.children[3].children[0].value=0
        product.children[4].children[0].value=product.children[1].children[0].value*product.children[2].children[0].value
    }

}


DeleteProduct = e =>{
    if (e.target.matches('.fa-xmark')){
        e.target.closest('.product').remove();
    }
}


Refresh = () =>{
    let number = products.childElementCount
    for(let i=0; i<number; i++){
        let count = products.children[i].children[1].children[0].value*products.children[i].children[2].children[0].value*(1-(products.children[i].children[3].children[0].value/100))
        products.children[i].children[4].children[0].value = count.toFixed(2)
    }
}

liteSinglePerpetual.addEventListener('click', AddProduct)
maintenanceLiteSinglePerpetual.addEventListener('click', AddProduct)
proSinglePerpetual.addEventListener('click', AddProduct)
maintenanceProSinglePerpetual.addEventListener('click', AddProduct)
bimSinglePerpetual.addEventListener('click', AddProduct)
maintenanceBimSinglePerpetual.addEventListener('click', AddProduct)
mechanicalSinglePerpetual.addEventListener('click', AddProduct)
maintenanceMechanicalSinglePerpetual.addEventListener('click', AddProduct)
ultimateSinglePerpetual.addEventListener('click', AddProduct)
maintenanceUltimateSinglePerpetual.addEventListener('click', AddProduct)
communicatorSinglePerpetual.addEventListener('click', AddProduct)
maintenanceCommunicatorSinglePerpetual.addEventListener('click', AddProduct)

liteNetworkPerpetual.addEventListener('click', AddProduct)
maintenanceLiteNetworkPerpetual.addEventListener('click', AddProduct)
proNetworkPerpetual.addEventListener('click', AddProduct)
maintenanceProNetworkPerpetual.addEventListener('click', AddProduct)
bimNetworkPerpetual.addEventListener('click', AddProduct)
maintenanceBimNetworkPerpetual.addEventListener('click', AddProduct)
mechanicalNetworkPerpetual.addEventListener('click', AddProduct)
maintenanceMechanicalNetworkPerpetual.addEventListener('click', AddProduct)
ultimateNetworkPerpetual.addEventListener('click', AddProduct)
maintenanceUltimateNetworkPerpetual.addEventListener('click', AddProduct)
communicatorNetworkPerpetual.addEventListener('click', AddProduct)
maintenanceCommunicatorNetworkPerpetual.addEventListener('click', AddProduct)

liteSingleYearly.addEventListener('click', AddProduct)
liteSingleYearly.addEventListener('click', AddProduct)
proSingleYearly.addEventListener('click', AddProduct)
bimSingleYearly.addEventListener('click', AddProduct)
mechanicalSingleYearly.addEventListener('click', AddProduct)
ultimateSingleYearly.addEventListener('click', AddProduct)
communicatorSingleYearly.addEventListener('click', AddProduct)

liteNetworkYearly.addEventListener('click', AddProduct)
liteNetworkYearly.addEventListener('click', AddProduct)
proNetworkYearly.addEventListener('click', AddProduct)
bimNetworkYearly.addEventListener('click', AddProduct)
mechanicalNetworkYearly.addEventListener('click', AddProduct)
ultimateNetworkYearly.addEventListener('click', AddProduct)
communicatorNetworkYearly.addEventListener('click', AddProduct)

v21LiteUpgrade.addEventListener('click', AddProduct)
v22LiteUpgrade.addEventListener('click', AddProduct)
v23LiteUpgrade.addEventListener('click', AddProduct)
v21ProUpgrade.addEventListener('click', AddProduct)
v22ProUpgrade.addEventListener('click', AddProduct)
v23ProUpgrade.addEventListener('click', AddProduct)
v21BimUpgrade.addEventListener('click', AddProduct)
v22BimUpgrade.addEventListener('click', AddProduct)
v23BimUpgrade.addEventListener('click', AddProduct)
v21MechanicalUpgrade.addEventListener('click', AddProduct)
v22MechanicalUpgrade.addEventListener('click', AddProduct)
v23MechanicalUpgrade.addEventListener('click', AddProduct)
v21UltimateUpgrade.addEventListener('click', AddProduct)
v22UltimateUpgrade.addEventListener('click', AddProduct)
v23UltimateUpgrade.addEventListener('click', AddProduct)
v21CommunicatorUpgrade.addEventListener('click', AddProduct)
v22CommunicatorUpgrade.addEventListener('click', AddProduct)
v23CommunicatorUpgrade.addEventListener('click', AddProduct)

liteToPro.addEventListener('click', AddProduct)
liteToBim.addEventListener('click', AddProduct)
liteToMechanical.addEventListener('click', AddProduct)
liteToUltimate.addEventListener('click', AddProduct)
proToBim.addEventListener('click', AddProduct)
proToMechanical.addEventListener('click', AddProduct)
proToUltimate.addEventListener('click', AddProduct)
bimToUltimate.addEventListener('click', AddProduct)
mechanicalToUltimate.addEventListener('click', AddProduct)

liteTraining.addEventListener('click', AddProduct)
proTraining.addEventListener('click', AddProduct)
bimTraining.addEventListener('click', AddProduct)
mechanicalTraining.addEventListener('click', AddProduct)

products.addEventListener('click', DeleteProduct)
refresh.addEventListener('click', Refresh)


GenerujPDF = () => {
    // Create a new jsPDF instance
    let doc = new jsPDF();

    // Add h1 to table
    doc.setFontSize(20)
    doc.text('Oferta zakupu licencji BricsCAD', 55, 52)
  
    // Define your images
    let images = [
      { src: 'images/bricscad.png', x: 60, y: 0, width: 90, height: 45 }, // Adjust Y to 20
      { src: 'images/elite-partner.png', x: 85, y: 260, width: 100, height: 20 }, // Adjust Y to 280
      { src: 'images/VSlogo.png', x: 30, y: 255, width: 35, height: 30 } // Adjust Y to 275
    ];
  
    let loadedImages = 0; // Count the number of loaded images
  
    // Function to check if all images are loaded
    function checkImagesLoaded() {
      loadedImages++;
      if (loadedImages === images.length) {
        // All images are loaded, proceed with PDF generation
        generatePDFWithImages();
      }
    }
  
    // Function to add an image to the PDF
    function addImageToPDF(image) {
      let img = new Image();
      img.src = image.src;
  
      // When the image is loaded, add it to the PDF
      img.onload = function () {
        doc.addImage(img, 'PNG', image.x, image.y, image.width, image.height);
        checkImagesLoaded();
      };
    }
  
    // Add images to the PDF
    images.forEach(addImageToPDF);
  
    function generatePDFWithImages() {
      // Get the product count inside the function using class name
      let products = document.querySelector('.products');
      let childCount = products.childElementCount;
  
      // Add autotable to the PDF with startY set to 60
      let columns = ["Produkt", "Cena netto [PLN]", "Ilosc", "Wartosc netto [PLN]"];
      let data = [];
      let totalPrice = 0;
  
      // Add data to table
      for (let i = 1; i <= childCount; i++) {
        let productName = products.children.item(i - 1).firstElementChild.textContent;
        let singleProductPrice = parseFloat(products.children.item(i - 1).firstChild.nextSibling.firstElementChild.value).toFixed(2).replace('.', ',');
        let productCount = products.children.item(i - 1).firstChild.nextSibling.nextSibling.firstElementChild.value;
        let sumProductPrice = parseFloat(products.children.item(i - 1).firstChild.nextSibling.nextSibling.nextSibling.nextSibling.firstElementChild.value).toFixed(2).replace('.', ',');
  
        data.push([
          productName, singleProductPrice, productCount, sumProductPrice
        ]);

        totalPrice += parseFloat(sumProductPrice.replace(',', '.'));
      }
  
      // Define column styles
      let columnStyles = {
        0: { halign: 'left', valign: 'middle', cellWidth: 100 },
        1: { halign: 'center', valign: 'middle', cellWidth: 32 },
        2: { halign: 'center', valign: 'middle', cellWidth: 20 },
        3: { halign: 'right', valign: 'middle', cellWidth: 32 },
      };
  
      // Define header styles (custom styles for header row)
      let headStyles = {
        halign: 'center',
        valign: 'middle',
        fillColor: [235, 235, 235], // Light blue background color
        textColor: [0, 0, 0], // Text color
        fontStyle: 'bold', // Font style (bold)
        fontSize: 12
      };
  
      // Define footer styles (custom styles for footer row)
      let footStyles = {
        halign: 'right',
        valign: 'middle',
        fillColor: [235, 235, 235], // Light blue background color
        textColor: [0, 0, 0], // Text color
        fontStyle: 'bold', // Font style (bold)
        fontSize: 12
      };
  
      // Add autotable with a table footer to the PDF
      doc.autoTable({
        startY: 60, // Set the startY to 60
        head: [columns],
        body: data,
        foot: [[{ content: 'Razem:', colSpan: 3, styles: { halign: 'right' }, }, totalPrice.toFixed(2).replace('.', ',')]], // Replace '.' with ','
        columnStyles: columnStyles,
        headStyles: headStyles,
        footStyles: footStyles,
      });

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let offer = 'Warszawa, '
        today = offer + mm + '.' + dd + '.' + yyyy;

        // Add text below the autoTable
        doc.setFontSize(10); // Set the font size for the text
        doc.text(today, 160, 37)
        doc.text('1. Do powyzszych cen nalezy doliczyc 23% podatku VAT.', 15, doc.autoTable.previous.finalY + 10);
        doc.text('2. Zakup pakietu maintenance dla licencji wieczystych, stanowiskowych jest opcjonalny.', 15, doc.autoTable.previous.finalY + 17);
        doc.text('3. Powyzsze ceny zostaly przeliczone po aktualnym kursie Euro i moga ulec zmianie.', 15, doc.autoTable.previous.finalY + 24);
        doc.text('4. Szkolenia odbywaja sie zgodnie z harmonogramem, ktory znajduje sie na ponizszej stronie: ', 15, doc.autoTable.previous.finalY + 31);
        doc.text('   https://vectorsoftware.pl/oprogramowanie-cad/dowiedz-sie-wiecej/szkolenia/ szkolenia odbywaja sie ', 15, doc.autoTable.previous.finalY + 36);
        doc.text('   stacjonarnie w Warszawie lub zdalnie poprzez polaczenie aplikacja Teams.', 15, doc.autoTable.previous.finalY + 41);
        doc.text('5. Szkolenia z obslugi BricsCAD Lite oraz Pro sa to szkolenia grupowe.', 15, doc.autoTable.previous.finalY + 48);
        doc.text('6. Szkolenia z obslugi BricsCAD BIM oraz Mechanical sa to szkolenia indywidualne a ich harmonogram ustalany', 15, doc.autoTable.previous.finalY + 55);
        doc.text('   jest indywidualnie.', 15, doc.autoTable.previous.finalY + 60);
        doc.setFontSize(12)
        doc.text('Oferta przygotowana przez:', 15, doc.autoTable.previous.finalY + 85)
        doc.text(salesName.innerHTML, 15, doc.autoTable.previous.finalY + 90)
        doc.text(salesMail.innerHTML, 15, doc.autoTable.previous.finalY + 95)
        doc.text(salesPhone.innerHTML, 15, doc.autoTable.previous.finalY + 100)

      // Save the PDF to a file
      doc.save('Oferta.pdf');
    }
  }
  
  pdfGenerate.addEventListener('click', GenerujPDF);
  
  
const showSingle = document.querySelector('.showSingle');
const showNetwork = document.querySelector('.showNetwork')
const showYearly = document.querySelector('.showYearly')
const upgrade = document.querySelector('.upgrade')
const crossUpgrade = document.querySelector('.crossUpgrade')
const training = document.querySelector('.training')
const arrow = document.querySelectorAll('.fa-arrow-right');


for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener('click', function (e){
        e.target.parentElement.style.left="105vw";
    })
}

ShowMenu = (e) => {
    switch (e.target.textContent){
        case 'Stanowiskowe, wieczyste': 
            document.querySelector('.singlePerpetualMenuWrapper').style.left="60vw"
            break;
        case 'Sieciowe, wieczyste':
            document.querySelector('.networkPerpetualMenuWrapper').style.left="60vw"
            break;
        case 'Licencje czasowe':
            document.querySelector('.YearlyMenuWrapper').style.left="60vw"
            break;
        case 'Aktualizacje':
            document.querySelector('.upgradeWrapper').style.left="60vw"
            break;
        case 'Podniesienie wersji':
            document.querySelector('.crossUpgradeWrapper').style.left="60vw"
            break;
        case 'Szkolenia':
            document.querySelector('.trainingWrapper').style.left="60vw"
            break;
    }   

}

showSingle.addEventListener('click', ShowMenu)
showNetwork.addEventListener('click', ShowMenu)
showYearly.addEventListener('click', ShowMenu)
upgrade.addEventListener('click', ShowMenu)
crossUpgrade.addEventListener('click', ShowMenu)
training.addEventListener('click', ShowMenu)
arrow.addEventListener('click', HideMenu)