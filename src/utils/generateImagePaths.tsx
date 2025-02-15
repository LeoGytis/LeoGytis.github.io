export const generateImagePaths = (title: string, imageCount: number) => {
  return imageCount === 1
    ? [
        {
          src: `/images/projects/${title.toLowerCase()}.jpg`, // No numbering for a single image
          alt: `${title} image`,
        },
      ]
    : Array.from({ length: imageCount }, (_, i) => ({
        src: `/images/projects/${title.toLowerCase()}/${title.toLowerCase()}${(
          i + 1
        )
          .toString()
          .padStart(2, '0')}.jpg`, // For multiple images, with numbering
        alt: `Image ${i + 1}`,
      }));
};
