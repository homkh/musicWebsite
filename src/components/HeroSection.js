import React from 'react'
import style from './hero.module.css'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <>
      <div className={style.bgImage}>
        <div className={style.container}>
          <div className={style.text}>
            <h5 className={style.title}>Book Worm King</h5>
            <h1>Master the art Of Musics</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rem laboriosam excepturi labore nam perferendis laudantium
              blanditiis. Deserunt, labore eos libero maiores optio
              ea nostrum laborum voluptatem quaerat et repellat earum?</p>
            <div className={style.btnsubmit}>
              <Link href="/courses"><button type="button" >Expplore Course</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
