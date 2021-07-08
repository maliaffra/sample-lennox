import React from 'react';
import './Items.css';
import ItemList from './ItemList';

function Items() {
  return (
    <div className='cards'>
      <h1>Check out our amazing services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ItemList
              src='images/reserve.jpg'
              text='Make your reservation online or in person!'
              label='Reservation'
              path='/reservation'
            />
            <ItemList
              src='images/deliver.jpg'
              text='Order online and we will deliver to your door'
              label='Home Delivery'
              path='/reservation'
            />
          </ul>
          <ul className='cards__items'>
            <ItemList
              src='images/pizza.jpg'
              text='Explore our pizza and you can pick your own toppings!'
              label='Pizza'
              path='/menu'
            />
            <ItemList
              src='images/pasta.jpg'
              text='Enjoy our pasta that that you can customize however you want it!'
              label='Spegetti with Meatballs'
              path='/menu'
            />
            <ItemList
              src='images/rice.jpg'
              text='Check out our stuffed rice balls deliciously filled with meat!'
              label='Italian Rice Balls'
              path='/menu'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Items;
