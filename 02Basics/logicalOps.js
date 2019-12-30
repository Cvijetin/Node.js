// && - AND operator
// || - OR operator - ( | - Shift + alt + Ž)
// ! - NOT operator

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log('Greeting message')
    console.log('Gain access to paid course')
}else if (isVerified || isGuest) {
    console.log('is allow free previews')
}else {
    console.log('please contact admin')
}