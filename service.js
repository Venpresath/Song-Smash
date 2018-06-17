"use strict";
{
    let service = function ($http) {
        let vm = this;
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";


        let getAPI = function(){
            let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/artist.search?format=json&q_artist=kanye&apikey=${APIKey}`;
            return $http.get(url).then(function(response) {  
            console.log(response.data.message.body.artist_list[0].artist);
        
        })
    }
        
return {
    getAPI
}

    }
    angular
        .module("app")
        .factory("service", service);
}

