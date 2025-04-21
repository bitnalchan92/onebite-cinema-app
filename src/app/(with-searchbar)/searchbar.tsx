"use client";

import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const [search, setSearch] = useState("");
  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  const onSubmit = () => {
    if (!search || q === search) return;

    router.push(`/search?q=${search}`);
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        placeholder={'검색어를 입력하세요...'}
      />
      <button onClick={onSubmit}>검색</button>
    </div>
  )
}