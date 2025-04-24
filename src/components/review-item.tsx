import style from './review-item.module.css'
import {ReviewData} from "@/types";

export default function ReviewItem({
                                     content,
                                     author,
                                     createdAt,
                                   }: ReviewData) {
  const formattedDate = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date(createdAt))

  return (
    <div className={style.container}>
      <div className={style.top_container}>
        <div className={style.author}>{author}</div>
        <div className={style.date}>{formattedDate}일 작성됨</div>
      </div>
      <div className={style.content}>{content}</div>
      <div className={style.delete_btn}>🗑️ 리뷰 삭제하기</div>
    </div>
  )
}
