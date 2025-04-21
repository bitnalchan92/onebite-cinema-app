import {MovieData} from "@/types";
import style from './page.module.css';

export default async function Page({params}: { params: Promise<{ id: number }> }) {
  const response = await fetch(`
    ${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${(await params).id}`,
    {cache: 'no-cache'}
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