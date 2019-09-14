function FilteredBands() {
    this.bands = new BandsApi();
    this.allBands = {};
    this.allBandAlbumCovers = {};


    this.getBandsDetails = async () => {
        this.allBands = await this.bands.getBands();
    }

    this.getAllBands = () => {
        return this.allBands;
    }


    this.setBandAlbumCovers = async (artistName) => {
        this.allBandAlbumCovers = await this.bands.getBandAlbumCover(artistName);
    }

    this.getBandAlbumCovers = () => {
        return this.allBandAlbumCovers;
    }
}