// creat function for get input ID
function getInputId(InputId, price) {
    const productId = document.getElementById(InputId)
    productId.innerText = price
    getTotalPrice()
}

function getTotalPrice() {
    const bestPrice = document.getElementById('bestPrice')
    const ExtraMemoryCost = document.getElementById('ExtraMemoryCost')
    const ExtraStorageCost = document.getElementById('ExtraStorageCost')
    const DeliveryCharge = document.getElementById('DeliveryCharge')
    const bestPriceText = parseInt(bestPrice.innerText)
    const ExtraMemoryCostText = parseInt(ExtraMemoryCost.innerText)
    const ExtraStorageCostText = parseInt(ExtraStorageCost.innerText)
    const DeliveryChargeText = parseInt(DeliveryCharge.innerText)
    const subtotalPrice = bestPriceText + ExtraMemoryCostText + ExtraStorageCostText + DeliveryChargeText
    //calculate total parice
    const totalprice = document.getElementById('TotalPrice')
    totalprice.innerText = subtotalPrice
    const totalAmount = document.getElementById('totalAmount')
    totalAmount.innerText = subtotalPrice
}

//Click Memory button
document.getElementById('memory8GB').addEventListener('click', function () {
    getInputId('ExtraMemoryCost', 0)
})
document.getElementById('memory16GB').addEventListener('click', function () {
    getInputId('ExtraMemoryCost', 180)

})

// Click SSD Button
document.getElementById('storage256').addEventListener('click', function () {
    getInputId('ExtraStorageCost', 0)
})
document.getElementById('storage512').addEventListener('click', function () {
    getInputId('ExtraStorageCost', 100)
})
document.getElementById('storage1TB').addEventListener('click', function () {
    getInputId('ExtraStorageCost', 180)
})

// Click Delivery button
document.getElementById('freeDelivery').addEventListener('click', function () {
    getInputId('DeliveryCharge', 0)
})
document.getElementById('DeliveryCost').addEventListener('click', function () {
    getInputId('DeliveryCharge', 20)
})

// Click Apply Button
document.getElementById('apply').addEventListener('click', function () {
    const promoCode = document.getElementById('promoCode')
    if (promoCode.value == 'stevekaku') {
        const amount = document.getElementById('totalAmount')
        const amountText = parseInt(amount.innerText)
        const parcentageAmount = (amountText * 20) / 100
        amount.innerText = amountText - parcentageAmount
        promoCode.value = ''
    }
})