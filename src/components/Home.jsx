import React from 'react';
import { Image, Icon } from 'semantic-ui-react'

const Home = () => (
  <div className='ui container'>
    <br/><br/>
    <Image className='ui container ' src='https://www.kingsoftstore.co.uk/wp-content/uploads/2017/05/Bug.png' alt='bug pic' size='huge' centered/>
    {/* <Image className='ui container ' src='https://lh4.ggpht.com/_S0f-AWxKVdM/SZA_B1bIlOI/AAAAAAAAGow/9rDam4OlcS4/noscript3%5B4%5D.png' alt='bug pic' size='large' centered/> */}

    <div>
    <Icon color='blue' size='large' name='facebook'  />
    <Icon color='blue' size='large' name='twitter' />
    <Icon color='blue' size='large' name='linkedin square' />
  </div>
  </div>
);
export default Home;
