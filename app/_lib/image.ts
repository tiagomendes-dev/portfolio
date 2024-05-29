import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
