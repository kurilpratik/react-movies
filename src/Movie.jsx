import React from 'react'
import { useNavigate } from "react-router-dom";

const MovieImgUrl = `${import.meta.env.BASE_URL}/movie-poster.jpg`;
const backIcon = `${import.meta.env.BASE_URL}/back.png`;

const Movie = () => {

    const navigate = useNavigate();

    return (
        <>  
            <div className="pattern"></div>
            <div className="wrapper max-w-6xl">
                <div className="movie-card flex gap-5 items-start">
                    <img src={MovieImgUrl} alt="Movie Banner" className='h-[24rem] w-auto'/>
                    <div className="content">
                        <img src={backIcon} alt="Back Icon" className='h-8 w-auto inline-block cursor-pointer' onClick={()=> navigate(-1)}/>
                        <h2>The Godfather</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movie