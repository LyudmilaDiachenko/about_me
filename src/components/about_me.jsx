import React from 'react'
import s from "../style/about_me.module.css"
import "../style/App.css"
import circle from "../assets/circle.png"
import square from "../assets/square.png"
import triangle from "../assets/triangle.png"
import square2 from "../assets/square2.png"
import photo_me from "../assets/photo_me.jpg"

export default function About_me(props) {
  return (
    <div className='container'>
        <div className={s.text_container}>
            <h1>Про мене</h1>
            <p className={s.text}>Прізвище: <span className={s.min_text}>{props.lastName}</span></p>
            <p className={s.text}>Ім'я: <span className={s.min_text}>{props.name}</span></p>
            <p className={s.text}>По-батькові: <span className={s.min_text}>{props.middleName}</span></p>
            <p className={s.text}>Номер телефону: <span className={s.min_text}>{props.tel}</span></p>
            <p className={s.text}>Електронна пошта: <span className={s.min_text}>{props.email}</span></p>
            <p className={s.text}>Місце проживання: <span className={s.min_text}>{props.city}</span></p>
            <p className={s.text}>Досвід роботи: <span className={s.min_text}>{props.experience}</span></p>
            <p className={s.text}>Навики: <span className={s.min_text}>{props.skill}</span></p>
        </div>
        <div className={s.img_container}>
            <img src={photo_me} alt="" className={s.photo} />
            <img src={circle} alt="" className={s.circle} />
            <img src={square} alt="" className={s.square} />
            <img src={triangle} alt="" className={s.triangle} />
            <img src={square2} alt="" className={s.square2} />
        </div>
    </div>
  )
}
