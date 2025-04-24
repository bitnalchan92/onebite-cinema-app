import style from './page.module.css';
import MovieItem from "@/components/movie-item";
import {MovieData} from "@/types";
import {delay} from "@/util/delay";
import {Suspense} from "react";
import RecoMovieListSkeleton from "@/components/skeleton/reco-movie-list-skeleton";

async function SearchList({q}: { q: string }) {
  await delay(2000);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    {cache: 'force-cache'}
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.container}>
      {movies.map((movie) => <MovieItem key={movie.id} {...movie} />)}
    </div>
  )
}

export default async function Page({
                                     searchParams
                                   }: {
  searchParams: Promise<{ q: string }>
}) {
  return (
    <Suspense
      key={(await searchParams).q || ""}
      fallback={
        <div className={style.search_movie_skeleton_container}>
          <RecoMovieListSkeleton count={2}/>
        </div>
      }
    >
      <SearchList q={(await searchParams).q || ""}/>
    </Suspense>
  )
}