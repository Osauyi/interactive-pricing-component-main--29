let input = document.querySelector(".slider")
let cash = document.querySelector("h3")
let switched = document.querySelector(".checkbox")
let pageView = document.querySelector(".pagenumb")

let first = 8
let second = 12
let third = 16
let fourth = 24
let fifth = 36

let discountFirst = 8 * 0.25
let discountSecond = 12 * 0.25
let discountThird = 16 * 0.25
let discountFourth = 24 * 0.25
let discountFifth = 36 * 0.25

fullPriceFirst = first - discountFirst
fullPriceSecond = second - discountSecond
fullPriceThird = third - discountThird
fullPriceFourth = fourth - discountFourth
fullPriceFifth = fifth - discountFifth

let firstPageView = "10K"
let secondPageView = "50K"
let thirdPageView = "100K"
let fourthPageView = "500K"
let fifthPageView = "1M"



let IsOpen = false



switched.addEventListener("click", function () {
  if (IsOpen) {
    monthlyBill()
  } else {
    yearlyBill()
  }
}, false)

function monthlyBill() {
  input.oninput = function () {
    if (input.value == 1) {
      cash.innerHTML = "$" + first.toFixed(2)
      pageView.innerHTML = firstPageView
    } else if (input.value == 2) {
      cash.innerHTML = "$" + second.toFixed(2)
      pageView.innerHTML = secondPageView
    } else if (input.value == 3) {
      cash.innerHTML = "$" + third.toFixed(2)
      pageView.innerHTML = thirdPageView
    } else if (input.value == 4) {
      cash.innerHTML = "$" + fourth.toFixed(2)
      pageView.innerHTML = fourthPageView
    } else if (input.value == 5) {
      cash.innerHTML = "$" + fifth.toFixed(2)
      pageView.innerHTML = fifthPageView
    }
  }

  IsOpen = false
}

monthlyBill()

function yearlyBill() {
  input.oninput = function () {

    if (input.value == 1) {
      cash.innerHTML = "$" + fullPriceFirst.toFixed(2)
      pageView.innerHTML = firstPageView

    } else if (input.value == 2) {
      cash.innerHTML = "$" + fullPriceSecond.toFixed(2)
      pageView.innerHTML = secondPageView

    } else if (input.value == 3) {
      cash.innerHTML = "$" + fullPriceThird.toFixed(2)
      pageView.innerHTML = thirdPageView

    } else if (input.value == 4) {
      cash.innerHTML = "$" + fullPriceFourth.toFixed(2)
      pageView.innerHTML = fourthPageView

    } else if (input.value == 5) {
      cash.innerHTML = "$" + fullPriceFifth.toFixed(2)
      pageView.innerHTML = fifthPageView

    }
  }

  IsOpen = true
}