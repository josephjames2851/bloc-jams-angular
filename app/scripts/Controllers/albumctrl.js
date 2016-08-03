(function() {
    function AlbumCtrl() {
        for (var i=0; i < 12; i++) {
         this.albumData(angular.copy(albumPicasso));
        this.index = 
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();