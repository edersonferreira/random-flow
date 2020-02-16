const videobox = document.querySelector('div.videobox')
const buttonFlow = document.querySelector('button.buttonFlow')
const video = document.querySelector('iframe#video')
const toggleButton = document.querySelector('a.toggle-button')
const nav = document.querySelector('ul.navlinks')

toggleButton.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})

function random(){
    const key = 'AIzaSyCMUCzezBZv83nGV7OJ9zWWeXjRlwYMgrM'
    const playlistId = 'UU4ncvgh5hFr5O83MH7-jRJg'
    const URL = 'https://www.googleapis.com/youtube/v3/playlistItems'

    const options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        playlistId: playlistId
    }

    $.getJSON(URL, options, function(data){

        video.width = '560'
        video.height = '315'
        video.src = 'https://www.youtube.com/embed/' + data.items[Math.floor(Math.random() * 49)].snippet.resourceId.videoId
        video.frameBorder = '0'
        video.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        video.allowFullscreen = true

        videobox.parentNode.insertBefore(video,videobox)
    })
}
