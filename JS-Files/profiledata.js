import {name} from '/index.js'
class ProfileData{
    constructor(data){
        Object.assign(this,data)
    }

    getMainContent(){
        return`
        <div class="main-content" >
            <img class="photo" id="photo" src="${this.avatar}" alt="doggie">
            <h2>
            ${this.name}
            </h2>
            <p>
                ${this.bio}
            </p>
            <img id='liked' src="/photos/like-image.png" alt = 'like'>
            <img id='dislike' src="/photos/dislike.png" alt= 'dislike'>
        </div>
        `
    }
    getLike(){
        document.getElementById('dislike').style.visibility = 'hidden'
        document.getElementById('liked').style.visibility = 'visible'
        const image = document.getElementById("circle2");
        image.style.display = "inline";
        image.style.display = "none";
        setTimeout(()=>{image.style.display = "inline"},500)
        
        this.hasBeenLiked = true
        name.getMainContent()
    }
    getDislike(){

        
        document.getElementById('liked').style.visibility = 'hidden'
        document.getElementById('dislike').style.visibility = 'visible'
        const image = document.getElementById("circle");
        image.style.display = "inline";
        image.style.display = "none";
        setTimeout(()=>{image.style.display = "inline"},500)
        

        
        this.hasBeenLiked = true
        name.getMainContent()
       
    }
    

}
export default ProfileData