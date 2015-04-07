'use strict';

describe('Filter: firstLetterFilter', function () {

  // load the filter's module
  beforeEach(module('coffeeShopApp'));

  // initialize a new instance of the filter before each test
  var firstLetterFilter, mockCoffeeShops, stringArray;

  beforeEach(inject(function ($filter) {
    firstLetterFilter = $filter('firstLetterFilter');
    mockCoffeeShops = [
      {
        'title': 'HighLand',
        'address': 'Bach Dang',
        'phone': '1234567890'
      },
      {
        'title': 'Billiard 34',
        'address': 'Thai Phien',
        'phone': '1230987456'
      },
      {
        'title': 'Cherry',
        'address': 'Nguyen Chi Thanh',
        'phone': '0123654789'
      },
      {
        'title': 'Coc',
        'address': 'Quang Trung',
        'phone': '0123654789'
      }
    ];
    stringArray = ['abc', 'xyz', 'coc coffee', 'nemo'];
  }));

  it('should return 0 object prefixed with "firstLetterFilter filter: bad"', function () {
    var queryText = 'bad';
    var queryShops = firstLetterFilter(mockCoffeeShops, queryText);

    expect(queryShops.length).toBe(0);
  });

  it('should return 1 object with "firstLetterFilter filter: hi"', function () {
    var queryText = 'hi';
    var queryShops = firstLetterFilter(mockCoffeeShops, queryText);

    expect(queryShops.length).toBe(1);
    expect(queryShops[0].title).toEqual('HighLand');
  });

  it('should return 2 object prefixed with "firstLetterFilter filter: c"', function () {
    var queryText = 'c';
    var queryShops = firstLetterFilter(mockCoffeeShops, queryText);

    expect(queryShops.length).toBe(2);
    expect(queryShops[0].title).toEqual('Coc');
    expect(queryShops[1].title).toEqual('Cherry');
  });

  it('should return 0 string prefixed with "firstLetterFilter filter: not"', function () {
    var queryText = 'not';
    var resultArr = firstLetterFilter(stringArray, queryText);

    expect(resultArr.length).toBe(0);
  });

  it('should return 1 string prefixed with "firstLetterFilter filter: c"', function () {
    var queryText = 'c';
    var resultArr = firstLetterFilter(stringArray, queryText);

    expect(resultArr.length).toBe(1);
    expect(resultArr[0]).toEqual('coc coffee');
  });
  
});
