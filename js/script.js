let out2 = document.querySelector('.out-2');
let out1 = document.querySelector('.out-1');

let priceRange = document.querySelector('#myRange-1');
let price = document.querySelector('#i-1');
let initialRange = document.querySelector('#myRange-2');
let initial = document.querySelector('#i-2');
let precent = document.querySelector('.back');
let monthsRange = document.querySelector('#myRange-3');
let months = document.querySelector('#i-3');

let monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
let total = Math.round(Number(initial.value) + Number(months.value) * monthPay);




priceRange.addEventListener('input', () => {
    price.value = priceRange.value;
    initial.value = Math.round(Number(priceRange.value) / 100 * Number((precent.value)[0] + (precent.value)[1]));
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})
price.addEventListener('input', () => {
    priceRange.value = price.value
    initial.value = Math.round(Number(priceRange.value) / 100 * Number((precent.value)[0] + (precent.value)[1]));
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})

price.addEventListener('change', () => {
    if (price.value < 1000000) {
        price.value = 1000000;
    } else if (price.value > 6000000) {
        price.value = 6000000;
    }
    priceRange.value = price.value
    initial.value = Math.round(Number(priceRange.value) / 100 * Number((precent.value)[0] + (precent.value)[1]));
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})


precent.value += '%'

initialRange.addEventListener('input', () => {
    res = String(initialRange.value);
    precent.value = res;
    initial.value = Math.round(Number(priceRange.value) / 100 * Number(precent.value))
    precent.value += '%'
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})
precent.addEventListener('input', () => {
    initial.value = Math.round(Number(priceRange.value) / 100 * Number((precent.value)[0] + (precent.value)[1]));
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})

precent.addEventListener('change', () => {
    if (precent.value < 10) {
        precent.value = 10 + '%'
        initialRange.value = 10
    } else if (precent.value > 60) {
        precent.value = 60 + '%'
        initialRange.value = 60
    } else {
        precent.value = precent.value + '%'
    }
    priceRange.value = price.value
    initial.value = Math.round(Number(priceRange.value) / 100 * Number((precent.value)[0] + (precent.value)[1]));
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})


monthsRange.addEventListener('input', () => {
    months.value = monthsRange.value
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})
months.addEventListener('input', () => {
    if (months.value < 1) {
        months.value = 1
    } else if (months.value > 60) {
        months.value = 60
    }
    monthsRange.value = months.value
    out2.innerHTML = monthPay = Math.round((price.value - initial.value) * ((0.035 * Math.pow((1 + 0.035), months.value)) / (Math.pow((1 + 0.035), months.value) - 1)));
    out2.innerHTML += ' ₽';
    out1.innerHTML = total = Math.round(Number(initial.value) + Number(months.value) * monthPay) + ' ₽';
})



let btn = document.querySelector('.btn');

btn.onclick = () => {
    shift()
    let xttp = new XMLHttpRequest();

    xttp.open('POST', 'https://hookb.in/eK160jgYJ6UlaRPldJ1P', true);
    xttp.setRequestHeader('Content-Type', 'application/json');
    xttp.onreadystatechange = () => {
        if (xttp.readyState == 4 && xttp.status == 200) {
            console.log(this.responseText);
        }
        setTimeout(show, 1000)
    }

    let data = JSON.stringify({
        "car_coast": price.value,
        "initail_payment": initial.value,
        "initail_payment_percent": precent.value,
        "lease_term": months.value,
        "total_sum": Math.round(total),
        "monthly_payment_from": Math.round(monthPay)
    })

    xttp.send(data);
    // fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "car_coast": price.value,
    //         "initail_payment": initial.value,
    //         "initail_payment_percent": precent.value,
    //         "lease_term": months.value,
    //         "total_sum": Math.round(total),
    //         "monthly_payment_from": Math.round(monthPay)
    //     }),
    // })
    //     .then(shift())
    //     .then(response => response.json())
    //     .then(json => { console.log(json) })
    //     .then(setTimeout(show, 2000))

    // .catch(error => { console.log(`${error.name}: ${error.message}`); })

}

function shift() {
    document.querySelectorAll('input').forEach(element => {
        element.setAttribute('disabled', '');
        element.classList.add(['disabled']);
    })
    btn.setAttribute('disabled', '')
    btn.classList.add('disabled')
    btn.innerHTML = 'Disabled'
}

function show() {
    document.querySelectorAll('input').forEach(element => {
        element.removeAttribute('disabled', '');
        element.classList.remove(['disabled']);
    })
    btn.removeAttribute('disabled', '')
    btn.classList.remove('disabled')
    btn.innerHTML = 'Оставить заявку'
}

