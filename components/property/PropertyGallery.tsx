export default function PropertyGallery({
  images,
}: {
  images: { url: string }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.url}
          alt="Property image"
          className="h-56 w-full object-cover rounded-lg"
        />
      ))}
    </div>
  );
}
