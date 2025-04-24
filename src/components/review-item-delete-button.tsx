'use client';

import {useActionState, useEffect, useRef} from "react";
import deleteReviewAction from "@/action/delete-review.action";

export default function ReviewItemDeleteButton({
                                                 reviewId,
                                                 movieId,
                                               }
                                               :
                                               {
                                                 reviewId: number,
                                                 movieId: number
                                               }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction}>
      <input hidden readOnly name='reviewId' value={reviewId}/>
      <input hidden readOnly name='movieId' value={movieId}/>
      {
        isPending ?
          <div>...</div>
          :
          <div onClick={() => formRef.current?.requestSubmit()}>🗑️ 리뷰 삭제하기</div>
      }
    </form>
  )
}