import RecoMovieItemSkeleton from "@/components/skeleton/reco-movie-item-skeleton";

export default function RecoMovieListSkeleton({count}: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <RecoMovieItemSkeleton key={`reco-movie-item-skeleton-${idx}`}/>)
}