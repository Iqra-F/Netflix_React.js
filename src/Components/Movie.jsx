import {UserAuth} from '../Context/AuthContext';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movie = ({item}) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false)
    const user = UserAuth()

    // creating a movie ID reference
    const movieID= doc(db, 'user', `${user?.email}`)//we're referencing the db of users
    //then we're grabbing the user's email

    const saveMovies=async()=>{
      if(user?.email){// this function will run only if user is logged in
          setLike(!like)
          setSaved(true)
          await updateDoc(movieID,{ 
            saveMovies: arrayUnion({//we use array union to update a document in firebase
               id: item.id,   //each movie has a unique ID, to save or delete something in Firebase, it has to have an ID
               title: item.title,
               img: item.backdrop_path
          
            })
          })
      }
      else{
        alert('please log in to save a movie')
      }
    }


  return (
    <div className="w-[160px] sm:w-[200px]  md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
    <img
      className="w-full h-auto block"
      src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
      alt={item?.title}
    />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
      <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
        {item?.title}
      </p>
      <p onClick={saveMovies}>
        {like ? (
          <FaHeart className="absolute top-4 left-4 text-gray-300" />
        ) : (
          <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
        )}
      </p>
    </div>
  </div>
  )
}

export default Movie
