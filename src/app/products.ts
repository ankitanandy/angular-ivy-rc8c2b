export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Max',
    price: 299,
    description: 'max desc',
  },
  {
    id: 4,
    name: 'Phone Pro Max',
    price: 1299,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 5,
    name: 'Phone Pro Max 3',
    price: 2299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license

Add more items in products.
Only show products worth more than Rs, 300/-
*/
