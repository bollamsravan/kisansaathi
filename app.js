(function () {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });
    
    app.controller('TabController',function(){
        this.tab=1;
        
        this.setTab=function(newvalue){
            this.tab=newvalue;
        };
        
        this.isSet=function(checktab) {
          return this.tab === checktab;
        };
    });

    var gems = [{
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their lusture",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: []
    }, {
        name: 'Blodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
            "email.jpg"
        ]
    }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
            "email-support.jpg"
        ]
    }];
})();