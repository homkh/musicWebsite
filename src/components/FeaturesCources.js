'use client'
import React from 'react'
import { music } from '@/data/books'
import style from './features.module.css'
import Link from 'next/link'
import Image from 'next/image'
import musicPc from '../../public/music_courses.jpg'
const FeaturesCources = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.text}>
                    <div className={style.heading}>
                        <h2>FEATURES COURSES</h2>
                        <p>Learn with the best</p>
                    </div>
                </div>
                <div className={style.courses}>
                    <div className={style.cardSection}>
                        {music.map((item, index) => (
                            <div key={index} className={style.card}>
                                <Image
                                    src={musicPc}
                                    alt='course_Images'
                                    width={100}
                                    height={70}
                                />
                                <p>{item.title}</p>
                                <p>Instructor: {item.instructor}</p>
                                <p>Level: {item.level}</p>
                                <p>Duration: {item.duration}</p>
                                <p>{item.description}</p>
                                <Link href={`/course/${index}`}>Learn More</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.viewCourse}>
                    <Link href='/course'>
                        <button type="button" className={style.btn}>View All Courses</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FeaturesCources
