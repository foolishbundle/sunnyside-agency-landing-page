import GalleryImage from './gallery-image.component';

export default function Gallery() {
  const images = [
    {
      srcSet: '/images/desktop/image-gallery-milkbottles.jpg',
      imgSrc: '/images/mobile/image-gallery-milkbottles.jpg',
      imgAlt: 'bottle milk with sky as background',
    },
    {
      srcSet: '/images/desktop/image-gallery-orange.jpg',
      imgSrc: '/images/mobile/image-gallery-orange.jpg',
      imgAlt: 'orange on plate',
    },
    {
      srcSet: '/images/desktop/image-gallery-cone.jpg',
      imgSrc: '/images/mobile/image-gallery-cone.jpg',
      imgAlt: 'cone with blue background',
    },
    {
      srcSet: '/images/desktop/image-gallery-sugarcubes.jpg',
      imgSrc: '/images/mobile/image-gallery-sugar-cubes.jpg',
      imgAlt: 'sugar cubes with pink background',
    },
  ];

  const galleryImageElements = images.map((image, index) => (
    <GalleryImage
      key={index}
      srcSet={image.srcSet}
      imgSrc={image.imgSrc}
      imgAlt={image.imgAlt}
    />
  ));

  return <article className="gallery">{galleryImageElements}</article>
}
