type GalleryImageProps = {
  srcSet: string;
  imgSrc: string;
  imgAlt: string;
};

export default function GalleryImage({
  srcSet, imgSrc, imgAlt,
}: GalleryImageProps) {
  return (
    <picture className="gallery__picture">
      <source media="(min-width: 768px)" srcSet={srcSet} />
      <img src={imgSrc} alt={imgAlt} />
    </picture>
  );
}
