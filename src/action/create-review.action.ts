"use server";
import {revalidatePath} from "next/cache";

export default async function createReviewAction(formData: FormData) {

  const movieId = formData.get('movieId')?.toString();
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!movieId || !content || !author) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: 'POST',
        body: JSON.stringify({movieId, content, author})
      }
    )

    console.log(response.status);
    revalidatePath(`/movie/${movieId}`);  // 이 페이지를 다시 렌더링
  } catch (err) {
    console.error(err);
    return;
  }
}