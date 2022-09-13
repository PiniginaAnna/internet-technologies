let name = 'pyaterochka';

let myStore = {
    'products': {
        'kolbasa': {'price': 500, 'amount': 10},
        'pechenyushki': {'price': 1000, 'amount': 100}
    }
};

myStore['open'] = true;

myStore['products']['pechenyushki']['amount'] = 1;

console.log('budget',
    myStore['products']['pechenyushki']['amount'] * myStore['products']['pechenyushki']['price'] +
    myStore['products']['kolbasa']['amount'] * myStore['products']['kolbasa']['price']);
