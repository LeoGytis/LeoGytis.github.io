export const generateImagePaths = (
  gallerySrc: string,
  imageCount: number = 1
) => {
  if (imageCount === 1) {
    return [
      {
        src: `/images/projects/${gallerySrc}.jpg`,
        alt: `${gallerySrc} image`,
      },
    ];
  } else {
    return Array.from({ length: imageCount }, (_, i) => ({
      src: `/images/projects/${gallerySrc}/${gallerySrc}${(i + 1)
        .toString()
        .padStart(2, '0')}.jpg`,
      alt: `Image ${i + 1}`,
    }));
  }
};
