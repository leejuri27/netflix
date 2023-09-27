import React from 'react';

const MovieCard = ({list, type}) => {
    let url = 'https://www.themoviedb.org/t/p/w355_and_h200_multi_faces' + list.poster_path
    
  return (
    <div style={{backgroundImage : "url(" + `${url}` + ")"}} className='card-item'>
        {/* <img src={url} className="carousel-img"></img> */}

        <div className='overlay'>
            <h1>제목</h1>
            <span>평점</span>
            <span>
                {/* react-bootstrap Badge */}
                전체관람가능
            </span>

        </div>
    </div>
  )
}

export default MovieCard;