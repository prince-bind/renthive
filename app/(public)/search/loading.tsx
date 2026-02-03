import PropertyCardSkeleton from "@/components/search/PropertyCardSkeleton";

export default function SearchLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <PropertyCardSkeleton key={i} />
      ))}
    </div>
  );
}
