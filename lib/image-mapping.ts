export interface ImageAsset {
  file_name: string;
  model: string;
  product: string;
  kitchen: string;
  clothing: string;
}

export const IMAGE_ASSETS: ImageAsset[] = [
  {
    file_name: "Airfryer_Classic_AfterWork_Zillennial_Emma.png",
    model: "Emma",
    product: "Air Fryer",
    kitchen: "Classic Kitchen",
    clothing: "After Work",
  },
  {
    file_name: "AirFryer_ModernKitchen_AfterWork_Alex_Zillennial.png",
    model: "Alex",
    product: "Air Fryer",
    kitchen: "Ecclectic Kitchen",
    clothing: "After Work",
  },
  {
    file_name: "Blender_PreWorkout_EcclecticKitchen_Mia_Zillennial.png",
    model: "Mia",
    product: "Blender",
    kitchen: "Simple Kitchen",
    clothing: "Pre Workout",
  },
  {
    file_name: "Blender_WeekendCasual_SimpleKitcheN_Alex_Zillennial.png",
    model: "Alex",
    product: "Blender",
    kitchen: "Simple Kitchen",
    clothing: "Before Work",
  },
  {
    file_name: "CofeeMaker_SimpleKitchen_BeforeWork_Marcus_Zillennial.png",
    model: "Marcus",
    product: "Coffee Maker",
    kitchen: "Cozy Kitchen",
    clothing: "Before Work",
  },
  {
    file_name: "CoffeeMaker_BeforeWork_CozyKitchen_Emma_Zillenial.png",
    model: "Emma",
    product: "Coffee Maker",
    kitchen: "Ecclectic Kitchen",
    clothing: "Before Work",
  },
  {
    file_name: "CoffeeMaker_EcclecticKitchen_PreWorkout_Taylor_GenX.png",
    model: "Taylor",
    product: "Coffee Maker",
    kitchen: "Modern Kitchen",
    clothing: "Pre Workout",
  },
  {
    file_name: "PersonalBlender_ModernKitchen_BeforeWork_Taylor_GenX.png",
    model: "Taylor",
    product: "Personal Blender",
    kitchen: "Modern Kitchen",
    clothing: "Before Work",
  },
  {
    file_name: "PersonalBlender_ModernKitchen_PreWorkout_Marcus_Zillennial.png",
    model: "Marcus",
    product: "Personal Blender",
    kitchen: "Retro Kitchen",
    clothing: "Pre Workout",
  },
  {
    file_name: "PersonalBlender_RetroKitchen_WeekendCasual_Marcus_Zillennial.png",
    model: "Marcus",
    product: "Personal Blender",
    kitchen: "Bright Kitchen",
    clothing: "Weekend Casual",
  },
  {
    file_name: "Toaster_BrightKitchen_WeekendCasual_Mia_Zillennial.png",
    model: "Mia",
    product: "Toaster",
    kitchen: "Bright Kitchen",
    clothing: "Weekend Casual",
  },
  {
    file_name: "Toaster_CozyKitchen_PreWork_David_GenX.png",
    model: "David",
    product: "Toaster",
    kitchen: "Cozy Kitchen",
    clothing: "Before Work",
  },
];

export function selectImage(
  productMatch: string,
  clothingContext: string
): string {
  const normalize = (s: string) => s.toLowerCase().trim();

  // Primary: match on product
  const productMatches = IMAGE_ASSETS.filter(
    (img) => normalize(img.product) === normalize(productMatch)
  );

  if (productMatches.length === 1) return productMatches[0].file_name;

  // If multiple product matches, use clothing as tiebreaker
  if (productMatches.length > 1) {
    const exact = productMatches.find(
      (img) => normalize(img.clothing) === normalize(clothingContext)
    );
    if (exact) return exact.file_name;
    // Random pick among product matches for variety
    const idx = Math.floor(Math.random() * productMatches.length);
    return productMatches[idx].file_name;
  }

  // Fallback: try clothing match
  const clothingMatch = IMAGE_ASSETS.find(
    (img) => normalize(img.clothing) === normalize(clothingContext)
  );
  if (clothingMatch) return clothingMatch.file_name;

  // Final fallback: random
  const idx = Math.floor(Math.random() * IMAGE_ASSETS.length);
  return IMAGE_ASSETS[idx].file_name;
}
