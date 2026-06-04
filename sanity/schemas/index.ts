import { event } from "./event";
import { contentTemplate } from "./contentTemplate";
import { founderStory } from "./founderStory";
import { homepage } from "./homepage";
import { location } from "./location";
import { gallery } from "./objects/gallery";
import { mediaAsset } from "./objects/mediaAsset";
import { page } from "./page";
import { product } from "./product";
import { testimonial } from "./testimonial";

export const schemaTypes = [
  mediaAsset,
  gallery,
  homepage,
  page,
  product,
  event,
  testimonial,
  founderStory,
  location,
  contentTemplate
];
