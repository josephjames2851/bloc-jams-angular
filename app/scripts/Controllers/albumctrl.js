(function() {
    function AlbumCtrl() {
        this.albumData = angular.copy(albumPicasso);
//        this.index = 
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();