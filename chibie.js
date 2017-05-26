const axios = require('axios');

const clipsDisplay = document.getElementById('clips-display');
var cButton = document.getElementById('clips-button');
cButton.addEventListener('click', getRequest);

const getRequest =  () => axios.get('https://api.twitch.tv/kraken/clips/top?limit=3&game=Overwatch&trending=true',
    { headers: { 'Client-ID': 'hiedo6gilluykn6giasf5g0kvowowa',
                  'Accept': 'application/vnd.twitchtv.v5+json'}
    })
    .then(function (res) {
        for (var i = 0; i < res.data.clips.length; i++) {
            clipsDisplay.innerHTML = res.data.clips[i].embed_html;
            console.log(res.data.clips[i].embed_html);
        }
    })
    .catch(function (err) {
        console.log(err)
    })


