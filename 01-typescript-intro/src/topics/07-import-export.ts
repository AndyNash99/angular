import { Product, TaxCalculationOptions, taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const options: TaxCalculationOptions = {
    tax: 0.15,
    products: shoppingCart
};

const [total, tax] = taxCalculation(options);

console.log({ total, tax })
