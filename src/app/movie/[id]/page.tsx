import {MovieData, ReviewData} from "@/types";
import style from './page.module.css';
import ReviewEditor from "@/components/review-editor";
import ReviewItem from "@/components/review-item";

export const dynamicParams = false; // 기본값이 true, false로 설정하게되면 아래 generateStaticParams()에 정의해둔 id값들이 아닌 경우 404가 return

export function generateStaticParams() {
  return [
    {id: "1022789"},
    {id: "533535"},
    {id: "1314450"},
    {id: "1275096"},
    {id: "1209217"},

    {id: "872585"},
    {id: "838209"},
    {id: "1007127"},
    {id: "995926"},
    {id: "945961"},

    {id: "787699"},
    {id: "693134"},
    {id: "696047"},
    {id: "919207"},
    {id: "786892"},

    {id: "1017163"},
    {id: "831815"},
    {id: "1091051"}
  ]
}

async function MovieDetail({movieId}: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`
  )

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>
  }

  const movie: MovieData = await response.json();

  const {
    title,
    subTitle,
    description,
    releaseDate,
    company,
    genres,
    runtime,
    posterImgUrl
  }: MovieData = movie;

  return (
    <div className={style.container}>
      <div style={{backgroundImage: `url('${posterImgUrl}')`}} className={style.cover_img_container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={posterImgUrl} alt={title}/>
      </div>
      <div className={style.title}>{title}</div>
      <div>{releaseDate} / {genres.join(', ')} / {runtime}분</div>
      <div>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </div>
  )
}

async function ReviewList({movieId}: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`
  )

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {
        reviews.map((review: ReviewData) => <ReviewItem key={`review-item-${review.id}`} {...review} />)
      }
    </section>
  )
}

export default function Page({params}: { params: { id: string } }) {
  return (
    <div>
      <MovieDetail movieId={params.id}/>
      <ReviewEditor movieId={params.id}/>
      <ReviewList movieId={params.id}/>
    </div>
  )
}