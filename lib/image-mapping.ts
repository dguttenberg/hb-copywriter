export interface ImageAsset {
  file_name: string;
  model: string;
  product: string;
  kitchen: string;
  clothing: string;
}

export const IMAGE_ASSETS: ImageAsset[] = [
  {
    file_name: "david_coffee.jpg",
    model: "David",
    product: "Coffee",
    kitchen: "Modern Kitchen",
    clothing: "Weekend at Home",
  },
  {
    file_name: "mia_toaster.jpg",
    model: "Mia",
    product: "Toaster",
    kitchen: "Bright Kitchen",
    clothing: "Leaving for Work",
  },
  {
    file_name: "marcus_blender.jpg",
    model: "Marcus",
    product: "Blender",
    kitchen: "Ecclectic Kitchen",
    clothing: "Before a Workout",
  },
  {
    file_name: "ladies_airfryer.jpg",
    model: "Martha",
    product: "Airfryer",
    kitchen: "Cozy Kitchen",
    clothing: "Weekend at Home",
  },
];

export function selectImage(
  productMatch: string,
  clothingContext: string
): string {
  // Primary: match on product
  const productMatches = IMAGE_ASSETS.filter(
    (img) => img.product.toLowerCase() === productMatch.toLowerCase()
  );
  if (productMatches.length === 1) return productMatches[0].file_name;

  // If multiple product matches, use clothing as tiebreaker
  if (productMatches.length > 1) {
    const exact = productMatches.find(
      (img) => img.clothing.toLowerCase() === clothingContext.toLowerCase()
    );
    if (exact) return exact.file_name;
    return productMatches[0].file_name;
  }

  // Fallback: try clothing match
  const clothingMatch = IMAGE_ASSETS.find(
    (img) => img.clothing.toLowerCase() === clothingContext.toLowerCase()
  );
  if (clothingMatch) return clothingMatch.file_name;

  // Final fallback: rotate based on hash of product string
  const idx =
    Math.abs(
      productMatch.split("").reduce((a, c) => a + c.charCodeAt(0), 0)
    ) % IMAGE_ASSETS.length;
  return IMAGE_ASSETS[idx].file_name;
}
