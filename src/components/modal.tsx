'use client';

import {ReactNode, useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import {useRouter} from "next/navigation";
import style from './modal.module.css';

export default function Modal({children}: { children: ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      })
    }
  }, []);

  return createPortal(
    <dialog
      onClose={() => router.back()}
      className={style.modal}
      ref={dialogRef}
      onClick={(e) => {
        // 모달의 배경이 클릭이 된거면 => 뒤로가기
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((e.target as any).nodeName === 'DIALOG') {
          router.back();
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  )
}