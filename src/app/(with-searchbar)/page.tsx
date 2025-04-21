import style from "./page.module.css";
import movies from '@/dummy.json';
import {MovieData} from "@/types";
import MovieItem from "@/components/movie-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_movie_container}>
          {
            movies
              .sort(() => Math.random() - 0.5) // 배열을 랜덤하게 섞고
              .slice(0, 3) // 앞에서 3개만 잘라서
              .map((movie: MovieData) => (
                <MovieItem key={movie.id} {...movie} />
              ))
          }
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.movie_container}>
          {
            movies.map((movie: MovieData) => (
              <MovieItem key={movie.id} {...movie} />
            ))
          }
        </div>
      </section>
    </div>
  );
}
