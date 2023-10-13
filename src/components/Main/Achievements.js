import React from 'react'
import './achievements.scss'

const Achievements = () => {
  return (
    <div className='achievements'>
        <div className="achievements__container container d-flex justify-content-around ">
            <div className="row list d-flex justify-content-between align-items-center flex-wrap">
                <div className="col align-items-center d-flex flex-column items">
                    <img src="/hastam/img/icons/members.svg" alt="" />
                    <h1>50+</h1>
                    <p>Team Members</p>
                </div>
                <div className="col align-items-center d-flex flex-column items">
                    <img src="/hastam/img/icons/project-done.svg" alt="" />
                    <h1>200+</h1>
                    <p>Project done</p>
                </div>
                <div className="col align-items-center d-flex flex-column items">
                    <img src="/hastam/img/icons/customers.svg" alt="" />
                    <h1>500+</h1>
                    <p>Happy customers</p>
                </div>
                <div className="col align-items-center d-flex flex-column items">
                    <img src="/hastam/img/icons/award.svg" alt="" />
                    <h1>75+</h1>
                    <p>Award Winning </p>
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default Achievements