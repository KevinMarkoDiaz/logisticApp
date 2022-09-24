import React from 'react'
import './Home.css'
import { List } from './List';
import { Title } from './Title';

const Home = () => {
  return (
    <div className='container-home'>
      <section className='home'>
        <div className='container-home_title'>
            <Title/>
        </div>
        <section className='container-home_buttons'>
          <button className='--btn button-history'>Travel History</button>
          <button className='--btn button-newTrip'>Add New Trip</button>
        </section>
        <section className='container-home_finishedTrip'>
            <ul className='finishedTrip-title'>Finished Trips
              <List/>
            </ul>
        </section>
      </section>
    </div>
  )
}

export default Home;
