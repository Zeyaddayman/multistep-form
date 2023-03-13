let steps = document.querySelectorAll(".step");
let infoInputs = document.querySelectorAll(".step-0 section form div input");
let controlBtns = document.querySelectorAll(".control-btn");
let optionsCheckBox = document.querySelector(".step-1 .options label input");
let planOffers = document.querySelectorAll(".step-1 .plan .box label .info .offer");
let planOptions = document.querySelectorAll(".options span");
let allPrices = document.querySelectorAll("span.price");
let summaryPlan = document.querySelector(".step-3 .summary .plan .info h4")
let summaryPlanPrice = document.querySelector(".step-3 .summary .plan .price");
let summaryOns = document.querySelector(".step-3 .summary .ons");
let total = document.querySelector(".step-3 .total");

const user = {};

const prices = {
    "month": {
        arcade: "$9/mo",
        advanced: "$12/mo",
        pro: "$15/mo",
        "online service": "+$1/mo",
        "larger storage": "+$2/mo",
        "customizable profile": "+$2/mo",
        abbreviation: "mo"
    },
    "year": {
        arcade: "$90/yr",
        advanced: "$120/yr",
        pro: "$150/yr",
        "online service": "+$10/yr",
        "larger storage": "+$20/yr",
        "customizable profile": "+$20/yr",
        abbreviation: "yr"
    }
}

let planMode = "month";

let offerValue = "2 months free";

showPrices(planMode);
showOffers(false);

infoInputs.forEach((input) => {
    input.onblur = function () {
        checkInput(input);
    }
    input.onkeyup = function () {
        checkInput(input);
    }
})

function checkInput (input) {
    let span = document.querySelector(`.step-0 section form .${input.parentElement.className} span.required`);
    if (input.value.length < 1) {
        input.classList.add("empty");
        span.style.display = "inline";
        input.classList.remove("ready");
    } else {
        input.classList.remove("empty");
        span.style.display = "none";
        input.classList.add("ready");
    }
    let btn = document.querySelector(".step-0 section .controls button.next");
    if (document.querySelectorAll(".step-0 section form div input.ready").length === infoInputs.length) {
        btn.style.pointerEvents = "inherit";
    } else {
        btn.style.pointerEvents = "none";
    }
}

controlBtns.forEach((btn) => {
    btn.onclick = function () {
        if (btn.id === "confirm") {
            sendData();
        } else {
            hidesteps();
            showstep(document.querySelector(`.step-${btn.id}`));
            saveData(btn);
        }
    }
})

function hidesteps () {
    steps.forEach((step) => step.style.display = "none")
}

function showstep (step) {
    step.style.display = "block";
}

optionsCheckBox.onclick = function () {
    if (optionsCheckBox.checked) {
        planMode = "year";
        optionsUX();
        showOffers(true);
        showPrices(planMode);
    } else {
        planMode = "month";
        optionsUX();
        showOffers(false);
        showPrices(planMode);
    }
}

function optionsUX () {
    planOptions.forEach((option) => {
        if (option.classList.contains(planMode)) {
            option.classList.add("active");
        } else {
            option.classList.remove("active");
        }
    })
}

function showOffers (year) {
    planOffers.forEach((offer) => {
        year ? offer.innerHTML = offerValue : offer.innerHTML = "";
    })
}

function showPrices (planMode) {
    let i = 0;
    for (value in prices[planMode]) {
        allPrices[i].innerHTML = prices[planMode][value];
        i++;
    }
}

function saveData (btn) {
    if (btn.id === "1") {
        user.name = document.querySelector(".step-0 form .name input").value;
        user.email = document.querySelector(".step-0 form .email input").value;
        user.phone = document.querySelector(".step-0 form .phone input").value;
    } else if (btn.id === "2" ) {
        let plan = document.querySelector(".step-1 .plan input[type='radio']:checked + .box .info h4").innerHTML;
        user.plan = plan.toLocaleLowerCase();
        user.planPrice = prices[planMode][user.plan];
    } else if (btn.id === "3") {
        let arr = [];
        let priceArr = [];
        document.querySelectorAll(".step-2 .add-ons input[type='checkbox']:checked").forEach((input) => {
            let ons = input.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
            arr.push(ons);
            priceArr.push(prices[planMode][ons.toLocaleLowerCase()]);
        })
        user.ons = arr;
        user.onsPrice = priceArr;
        showSummary();
    }
}

function showSummary () {
    summaryPlan.innerHTML = `${user.plan} <span>(${planMode}ly)</span>`;
    summaryPlanPrice.innerHTML = user.planPrice;
    summaryOns.innerHTML = "";
    for (let i = 0; i < user.ons.length; i++) {
        let ons = `<p>${user.ons[i]}<span>${user.onsPrice[i]}</span></p>`;
        summaryOns.innerHTML += ons;
    }
    let arr = user.onsPrice.concat(summaryPlanPrice.innerHTML);
    let totalPrice = arr.map((x) => +(x.split("").map((x) => x.replace(/\D/g, "")).join("")));
    totalPrice = totalPrice.reduce((acc, current) => acc + current);
    total.innerHTML = `<p>Total <span class='mode'>(per ${planMode})</span> <span class='total-price'>+$${totalPrice}/${prices[planMode].abbreviation}</span></p>`;
}

function sendData () {
    hidesteps();
    document.querySelector(".step-3 section div.thank-you").style.display = "flex";
    document.querySelector(".step-3 section div.finish").style.display = "none";
    showstep(document.querySelector(`.step-3`));
    document.querySelector(".step-3 .small").style.display = "none";
    console.log(user);
}