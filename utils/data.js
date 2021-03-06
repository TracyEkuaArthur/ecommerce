import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

        products: [
          {
            name: 'Free Shirt',
            category: 'Shirts',
            image: '/images/ver1.png',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
          },
          {
            name: 'Fit Shirt',
            category: 'Shirts',
            image: '/images/ver2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 4.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
          },
          {
            name: 'Slim Shirt',
            category: 'Shirts',
            image: '/images/ver3.jpg',
            price: 90,
            brand: 'Raymond',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular shirt',
          },
          {
            name: 'Golf Pants',
            category: 'Pants',
            image: '/images/ver4.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Smart looking pants',
          },
          {
            name: 'Fit Pants',
            category: 'Pants',
            image: '/images/ver5.jpg',
            price: 95,
            brand: 'Zara',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },
          {
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver7.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },
          {
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver8.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },
          {
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver9.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },
          {
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver10.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver11.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver12.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver13.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver14.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver15.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver6.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/nike1.jpg',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },{
            name: 'Classic Pants',
            category: 'Pants',
            image: '/images/ver2.png',
            price: 75,
            brand: 'Casely',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular pants',
          },
        ],
      };
      export default data;