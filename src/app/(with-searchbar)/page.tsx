import style from "./page.module.css";
import {MovieData} from "@/types";
import MovieItem from "@/components/movie-item";

async function AllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    {cache: 'force-cache'} // 변경사항이 적고, 캐시된 데이터를 사용하는게 적절하다고 판단!
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.movie_container}>
      {
        movies.map((movie: MovieData) => (
          <MovieItem key={movie.id} {...movie} />
        ))
      }
    </div>
  )
}

async function RecoMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    {
      next: {revalidate: 3} // 자주바뀌는게 좋지만 실시간느낌까진 필요 없을듯해, 3초가 지나면 캐시를 업데이트하는게 적절하다고 판단
    }
  )

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const recoMovies: MovieData[] = await response.json();

  return (
    <div className={style.recommend_movie_container}>
      {
        recoMovies.map((movie: MovieData) => (
          <MovieItem key={movie.id} {...movie} />
        ))
      }
    </div>
  )
}

export default function Home() {

  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <RecoMovies/>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <AllMovies/>
      </section>
    </div>
  );
}
