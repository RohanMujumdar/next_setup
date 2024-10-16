import React from 'react'


async function fetchMovie(id){
  const movie=await fetch(`https://freetestapi.com/api/v1/movies/${id}`)
  const data=await movie.json();
  return data;
}

async function page(props) {
  const id=props.params.movieId
  console.log(id)
  const movieObject=await fetchMovie(id)
  console.log(movieObject)
  return (
    <div>
      {movieObject.id}
    </div>
  )
}

export default page
