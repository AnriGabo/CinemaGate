import React, { useEffect, useRef, useState } from "react";
import "./Poster.css";

// IMPORT IMAGES

import Batman2 from "../../Images/Batman2.jpg";
import NewPeakyBlinder from "../../Images/NewPeakyBlinder.webp";
import NewViking from "../../Images/NewViking.webp";
import Interstellar from "../../Images/Interstellar.webp";


export default function Poster(){


    const scrollContainer = useRef(null)

    const handleScroll = (direction) => {
        const element = scrollContainer.current;
        const maxScrollLeft = element.scrollWidth - element.clientWidth;
    
        if (direction === 'left') {
            if (element.scrollLeft <= 0) {
                element.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
            } else {
                window.requestAnimationFrame(() => {
                    element.scrollBy({ left: -800, behavior: "smooth" }); // შემცირებული სქროლის სიჩქარე
                });
            }
        } else if (direction === 'right') {
            if (element.scrollLeft >= maxScrollLeft - 1) {
                element.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                window.requestAnimationFrame(() => {
                    element.scrollBy({ left: 800, behavior: "smooth" }); // შემცირებული სქროლის სიჩქარე
                });
            }
        }
    };
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleScroll("right");
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, []);


    const [movie, setMovie] = useState([
        {id:1, img:Batman2, alt:"Batman"},
        {id:2, img:Interstellar, alt:"BreakingBad-2"},
        {id:3, img:NewPeakyBlinder, alt:"Viking-3"},
        {id:4, img:NewViking, alt:"PeakyBlinder-4"},
    ])
    return(
       <div className="SlaiderContaienr" ref={scrollContainer}>

        {movie.map((Item) => (
            <div key={Item.id}>
                <img src={Item.img} className="Item-Images " alt={Item.alt} loading="lazy"/>
                <h1 className="MovieDescription">Dive into the World of Unmatched <br></br>Storytelling and Epic Adventures</h1>
                <div className="overlay">
        <button className="WatchNow">Watch Now</button>
        <button className="LearnMore">Learn More</button>
    </div>
            </div>
        ))}
      <button type="button" className="Right" onClick={() => handleScroll("right")}>{">"}</button>
     <button type="button" className="Left" onClick={() => handleScroll("left")}>{"<"}</button>

        
       </div>
    )
}