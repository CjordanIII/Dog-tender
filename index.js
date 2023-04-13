import dogs from './JS-Files/data.js'
import ProfileData from './JS-Files/profiledata.js'

const greenCircle=document.getElementById('heart')
const redCross = document.getElementById('x-icon')
redCross.addEventListener('click',()=>{name.getDislike()
    getNewdog()
 name.hasBeenLiked})
greenCircle.addEventListener('click',()=>{name.getLike() 
    getNewdog()
    name.hasBeenLiked
    
})



function htmlRender(){
    document.getElementById('main-content').innerHTML= name.getMainContent()
    
    
}
function noMoreDogs(){
    document.getElementById('body').innerHTML = '<h1> There are no more<br> dogs in your area 😨</h1>'
}
let currentDogIndex = 0
function getNewdog(){
    setTimeout(currentDogIndex +=1,500)
   name=new ProfileData(dogs[currentDogIndex])
   if(currentDogIndex>dogs.length-1){
    noMoreDogs()
   }
   console.log(currentDogIndex)
   setTimeout(htmlRender,500)
   
}

    
   

let name = new ProfileData(dogs[0])
 htmlRender()

 export  {name}



