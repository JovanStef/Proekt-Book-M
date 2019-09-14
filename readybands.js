function ReadyBands() {
    this.readyBands = new FilteredBands;

    this.getReadyBands = async () => {
        await this.readyBands.getBandsDetails();

        var someBands = this.readyBands.getAllBands();
        var bandList = [];
        var listBands = someBands.similarartists.artist;

        for (var i = 0; i < 21; i++) {
            var items = {
                name: listBands[i].name,
                imgSrc: listBands[i].image[2]['#text']
            }
            bandList.push(items);
        }
        // localStorage.setItem("bandData", JSON.stringify(bandList));
        return bandList
        
        

    }

    
    this.getReadyAlbumCover = async (artistName)=>{
        await this.readyBands.setBandAlbumCovers(artistName);

        var someAlbumCover = this.readyBands.getBandAlbumCovers();

        var albumCover = {ImgSrc: someAlbumCover.topalbums.album[0].image[3]['#text']};
        
        localStorage.setItem("albumCover", JSON.stringify(albumCover));
        return albumCover.ImgSrc


    }







}

// function Bands(){
//     this.finalBands = new ReadyBands();

//     var firstband = JSON.parse(localStorage.getItem("bandsData"));

//     this.getFinalistOfBands = async ()=>{
//         for(var i=0 ;i <firstband.length; i++){
//             // console.log(firstband[i].imgSrc);
//             // console.log(firstband[i].name);


//         }
//         console.log(firstband.length);
//         return firstband
//     }

// }
