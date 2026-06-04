import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "rehoboth",
  title: "Rehoboth Ethiopian Coffee",
  projectId: process.env.SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.SANITY_DATASET ?? "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
});
