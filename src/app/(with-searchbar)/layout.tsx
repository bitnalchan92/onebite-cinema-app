import {ReactNode, Suspense} from "react";
import Searchbar from "@/components/searchbar";

export default function Layout({children}: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>로딩중 입니다...</div>}>
        <Searchbar/>
      </Suspense>
      {children}
    </div>
  )
}