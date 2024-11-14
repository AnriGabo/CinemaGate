import React, { useRef, useState } from "react";
import "./Poster.css";

import Batman2 from "../../Images/Batman2.jpg";


export default function Poster(){


    const scrollContainer = useRef(null)

    const handleScroll = (direction) => {
        const element = scrollContainer.current;
        const maxScrollLeft = element.scrollWidth - element.clientWidth;


        if (direction === 'left') {
            if (element.scrollLeft > 0) {
                scrollContainer.current.scrollBy({ left: -5000, behavior: "smooth" })
            } else {
                element.scrollTo({ left: maxScrollLeft, behavior: "smooth" })
            }
        } else {
            if (element.scrollLeft < maxScrollLeft) {
                element.scrollBy({ left:1500, behavior: "smooth" })
            }
            else {
                element.scrollTo({ left: 0, behavior: "smooth" })
            }
        }
    }



    const [movie, setMovie] = useState([
        {id:1, img:Batman2, alt:"Batman"},
        {id:2, img:Batman2, alt:"Batman-2"},
        {id:3, img:Batman2, alt:"Batman-3"},
        {id:4, img:Batman2, alt:"Batman-4"},
    ])
    return(
       <div className="batmanimage" ref={scrollContainer}>
        <img src={Batman2} alt={movie.alt} />
        {movie.map((Item) => (
            <div key={Item.id}>
                <img src={Item.img} className="Item-Images " alt={Item.alt}/>
            </div>
        ))}
        <button type="button" className="Right" onClick={() => handleScroll("Right")}>{">"}</button>
        <button type="button" className="Left" onClick={() => handleScroll("Left")}>{"<"}</button>
        
       </div>
    )
}