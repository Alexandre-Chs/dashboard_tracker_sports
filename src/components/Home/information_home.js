import React from 'react'
import Header from './header'
import Description from './Description'
import DailyTasks from './DailyTasks'
import ChartsHome from './ChartsHome'

const HomeInformation = () => {
  return (
    <div className='content_home'>
      <Header />
      <Description/>
      <DailyTasks />
      <ChartsHome />
    </div>
  )
}

export default HomeInformation