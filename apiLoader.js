function BandsApi() {

    this.getBands = () => {
      return new Promise((resolve, reject) => {
        $.ajax({
          url:
            "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=mettalica&api_key=7a28abe059d0d55f7545bc2939cbf74d&format=json",
          type: "GET",
          success: function(data) {
            resolve(data);
          },
          error: function(error) {
            reject(error);
          }
        });
      });
    };

    this.getBandAlbumCover = (artistName) => {
      return new Promise((resolve, reject) => {
        $.ajax({
          url:
            "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist="+artistName+"&api_key=7a28abe059d0d55f7545bc2939cbf74d&format=json",
          type: "GET",
          success: function(data) {
            resolve(data);
          },
          error: function(error) {
            reject(error);
          }
        });
      });
    };

}