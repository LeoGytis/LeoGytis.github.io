export function hexToNumericColor(
  hexColor: string | undefined,
  defaultColor: string = "#000000"
): number {
  if (hexColor) {
    const colorWithoutHash = hexColor.replace("#", "");
    const numericColor = parseInt(colorWithoutHash, 16);
    return numericColor;
  }

  // If bgColor is undefined, return a default color.
  const defaultColorWithoutHash = defaultColor.replace("#", "");
  const defaultNumericColor = parseInt(defaultColorWithoutHash, 16);
  return defaultNumericColor;
}
