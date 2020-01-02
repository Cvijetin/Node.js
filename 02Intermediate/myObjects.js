let myYoutubeVideo2 = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Cvijetin Vidaković',
    videoDescription: 'this is video description and a long one'
}

let myYoutubeVideo1 = {
    title: 'Functions in javascript',
    videoLength: 10,
    videoCreator: 'Cvijetin Vidaković',
    videoDescription: 'this is video description and a long one'
}

// console.log(myYoutubeVideo)

// console.log(`New video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

let javaScriptTutorial = {
    title: 'Node.js',
    author: 'Cvele',
    price: '600 kuna',
    description: 'Neš novo ođe radimo'
}

//console.log(`There is a new tutorial from ${javaScriptTutorial.author} on ${javaScriptTutorial.title} and it costs ${javaScriptTutorial.price}`)

javaScriptTutorial.title = 'angular.js'
//console.log(javaScriptTutorial.title)

// Functions

let changeVideoLength = function (myObject) {
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
}

let adOne = changeVideoLength(myYoutubeVideo2)

console.log(adOne.formatOne)
