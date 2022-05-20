// Callbacks
function houseOne(){
    console.log('Paper delivered to house1')
 }
function houseTwo(callback){
    setTimeout(() => {
        console.log('Paper delivered to house 2')
        callback()
    } , 3000)
 }
 function houseThree(){
     console.log('Paper delivered to house3')
 }

 houseOne()
 houseTwo(houseThree)