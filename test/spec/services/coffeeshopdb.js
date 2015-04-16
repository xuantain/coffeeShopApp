'use strict';

xdescribe('Service: coffeeShopDB', function () {

  // load the service's module
  beforeEach(module('coffeeShopApp'));

  // instantiate service
  var coffeeShopDB, dataList, $httpBackend, appInfo;

  beforeEach(inject(function (_appInfo_, $injector, _coffeeShopDB_) {
    dataList = [
      {
        'id': 'abczyzitem1',
        'title': 'Highland',
        'address': 'Bach Dang',
        'phone': '0905xxxyyy',
        'country': 'vn',
        'city': 'Da Nang',
        'district': 'Hai Chau',
        'mainImage' : 0,
        '_attachments': {},
        'menu': {
          'cafe sua': {},
          'tra da': {}
        },
        'dateCreate': '2015-04-01',
        'isOperational': 'true',
        'rate': '3'
      },{
        'id': 'abczyzitem2',
        'title': 'Evelyn',
        'address': 'Tran Phu',
        'phone': '0905xxxyyy',
        'country': 'vn',
        'city': 'Da Nang',
        'district': 'Hai Chau',
        'mainImage' : 0,
        '_attachments': {},
        'menu': {
          'cafe sua': {},
          'tra da': {}
        },
        'dateCreate': '2015-04-01',
        'isOperational': 'true',
        'rate': '3'
      },{
        'id': 'abczyzitem3',
        'title': 'Cherry',
        'address': 'Nguyen Chi Thanh',
        'phone': '0905xxxyyy',
        'country': 'vn',
        'city': 'Da Nang',
        'district': 'Hai Chau',
        'mainImage' : 0,
        '_attachments': {},
        'menu': {
          'cafe sua': {},
          'tra da': {}
        },
        'dateCreate': '2015-04-01',
        'isOperational': 'true',
        'rate': '3'
      },{
        'id': 'abczyzitem4',
        'title': 'Say coffee',
        'address': 'Ly Tu Trong',
        'phone': '0905xxxyyy',
        'country': 'vn',
        'city': 'Da Nang',
        'district': 'Hai Chau',
        'mainImage' : 0,
        '_attachments': {},
        'menu': {
          'cafe sua': {},
          'tra da': {}
        },
        'dateCreate': '2015-04-01',
        'isOperational': 'true',
        'rate': '3'
      }
    ];
    coffeeShopDB = _coffeeShopDB_;
    appInfo = _appInfo_;
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET(appInfo.servicePath + '/' + appInfo.dbName).respond(dataList);
  }));

  describe('Method: getAll', function () {

    it('should be return not null', function() {
      var results = coffeeShopDB.getAll();
      expect(results).not.toBeNull();
    });

  });

  describe('Method: getAllByCountry', function () {
    
    it('should be return coffeeShops in country=vn', function() {
      var results = coffeeShopDB.getAllByCountry('vn');
      expect(results).not.toBeNull();
    });

  });

  describe('Method: getAllByCity', function () {

  });

  describe('Method: getAllByDistrict', function () {

  });

  describe('Method: getAllByLocation', function () {

  });

  describe('Method: getByName', function () {
    
    beforeEach(function() {

    });

    it('should be return not null', function() {
      var results = coffeeShopDB.getByName('Evalyn');
      expect(results).not.toBeNull();
    });

    // it('should be return not null', function() {
    //   var results = coffeeShopDB.getByName('Evalyn');
    //   expect(results).not.toBeNull();
    // });

  });

  describe('Method: put', function () {

  });

  describe('Method: update', function () {

  });

  describe('Method: delete', function () {

  });

  describe('Method: deleteById', function () {

  });

});
