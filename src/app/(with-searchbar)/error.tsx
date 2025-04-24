"use client";

import {startTransition, useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Error({error, reset}: { error: Error, reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button onClick={() => {
        startTransition(() => {
          router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 넥스트서버측에 다시 실행해줄것을 요구! 그리고 그 결과 RSC Payload를 보내달라고 요청하는 것!
          reset(); // 에러상태를 초기화하고 컴포넌트를 다시 렌더링 하는 역할을 하기 때문에 호출해야한다.
        }) // 하나의 콜백함수를 인수로 받아서 그 안에 있는 UI를 변경하는 로직을 일괄 처리하는 역할
      }}>다시 시도
      </button>
    </div>
  )
}