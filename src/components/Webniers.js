'use client'
import React from 'react'
import style from './webniers.module.css'
const Webniers = () => {
    const clientFeedback = [
        {
            id: 1,
            name: 'John Doe',
            company: 'ABC Inc.',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            company: 'XYZ Corp.',
            feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 3,
            name: 'Alex Johnson',
            company: '123 Co.',
            feedback: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        }
    ];
    return (
        <>
            <div className={style.conainer}>
                <div className={style.overlay}>
                    <div className={style.textContain}>
                        <h1>Hear Our Harmoney: <i>Voice Of Success</i></h1>
                    </div>
                    <div className={style.cardSection}>
                        <div className={style.card}>
                            {clientFeedback.map(feedback => (
                                <div key={feedback.id} className={style.feedbackitem}>
                                    <h3>{feedback.name}</h3>
                                    <p>{feedback.company}</p>
                                    <p>{feedback.feedback}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Webniers
