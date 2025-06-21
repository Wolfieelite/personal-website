interface ImageGroupProps {
  sectionTitle: string;
  images: string[];
}
export default function ImageGroup({ sectionTitle, images }: ImageGroupProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{sectionTitle}</h1>
      {images.map((image, index) => (
        <img key={index} src={image} />
      ))}
    </div>
  );
}
