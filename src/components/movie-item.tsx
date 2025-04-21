import style from './movie-item.module.css';
import Link from "next/link";
import {MovieData} from '@/types';

export default function MovieItem({
                                    id,
                                    title,
                                    posterImgUrl
                                  } : MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt={title}/>
    </Link>
  )
}