window.onload = async () =>{
    const currencyValueText = document.getElementById("currency-value-text")
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    const dolar = data.USDBRL.high
    currencyValueText.innerHTML = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(10000 / dolar)
}

const button = document.getElementById("convertB")
const select = document.getElementById("currency-select")


const convertValues = async () => {  
    const real = parseInt(document.getElementById("valor").value)     
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")


    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    if(real > 0){
        if (select.value === "US$ Dólar americano") {
            realValueText.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(real)
            currencyValueText.innerHTML = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(real / dolar)
        } if (select.value === "€ Euro") {
            realValueText.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(real)
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(real / euro)
        } if (select.value === "฿ Bitcoin") {
            realValueText.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(real)
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(real / bitcoin)
        } 
    }else{
        if (select.value === "US$ Dólar americano") {
            realValueText.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(10000)
            currencyValueText.innerHTML = new Intl.NumberFormat("en-EN", { style: "currency", currency: "USD" }).format(10000 / dolar)
        } if (select.value === "€ Euro") {
            realValueText.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(10000)
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(10000 / euro)
        } if (select.value === "฿ Bitcoin") {
            realValueText.innerHTML = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(10000)
            currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "XBT" }).format(10000 / bitcoin)
        } 
    }


}



const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")

    if(select.value === "€ Euro"){
        const currencyValueText = document.getElementById("currency-value-text")
        currencyValueText.innerHTML = "€ 1837,00"
        currencyImage.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"

    }if(select.value === "฿ Bitcoin"){
        const currencyValueText = document.getElementById("currency-value-text")
        currencyValueText.innerHTML = "฿ 0,067"     
        currencyImage.src = "./assets/bitcoin.png"
        currencyName.innerHTML = "Bitcoin"
    }if(select.value === "US$ Dólar americano"){
        const currencyValueText = document.getElementById("currency-value-text")
        currencyValueText.innerHTML = "US$ 2.028,40"  
        currencyImage.src = "./assets/eua.png"
        currencyName.innerHTML = "Dólar americano"
    }
    convertValues()
}



button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)