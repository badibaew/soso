import React from 'react';
import './window.css'
import imgBg1 from '../img/Rectangle 1.png'
import imgBg2 from '../img/Rectangele 2.png'
import imgBg3 from '../img/Rectangle 3.png'


const Window = () => {
    const cards = [
        { id: 1, url: "#", text: "First" },
        { id: 2, url: "#", text: "Second" },
        { id: 3, url: "#", text: "Third" }
    ];
    return (
        <div>
            <div className='box'>
                <h1>
                    Тренировки для всех уровней подготовки
                </h1>
                <div className='windowBg'>
                    {cards.map(({ id, url, text }, index) => {
                        return (
                            <a key={id} href={url} className={`card link card-${index + 1}`}>
                                <span className="link-text">{text}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Window;