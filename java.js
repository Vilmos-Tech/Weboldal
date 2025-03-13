let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  
const apiKey = "AIzaSyAbTebFjvWfVL3LL3iyATytz3jvE_kgVcQ";
        const channelId = "UCWWWljSeKIiu5mI7U9aDocg";
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=1`;

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const video = data.items[0];
            const videoId = video.id.videoId; 
            const thumbnails = video.snippet.thumbnails;
    
            
            const thumbnailUrl = thumbnails.maxres?.url || thumbnails.high.url;
            const title = video.snippet.title;
    
            
            document.getElementById("thumbnail").src = thumbnailUrl;
            document.getElementById("title").textContent = title;
            document.getElementById("videoLink").href = `https://www.youtube.com/watch?v=${videoId}`;
        })
        .catch(error => console.error("Hiba történt:", error));

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const video = data.items[0];
            const videoId = video.id.videoId; 
            const thumbnails = video.snippet.thumbnails;
    
            
            document.getElementById("thumbnail").src = thumbnailUrl;
            document.getElementById("title").textContent = title;
            document.getElementById("videoLink").href = `https://www.youtube.com/watch?v=${videoId}`;
        })
        .catch(error => console.error("Hiba történt:", error));
        
        