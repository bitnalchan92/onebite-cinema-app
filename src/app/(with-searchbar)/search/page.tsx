import style from './page.module.css';
import movies from '@/dummy.json';
import MovieItem from "@/components/movie-item";

export default async function Page({searchParams}: { searchParams: Promise<{ q: string }> }) {
  const {q} = await searchParams;

  return (
    <div className={style.container}>
      {movies.map((movie) => <MovieItem key={movie.id} {...movie} />)}
    </div>
  )
}