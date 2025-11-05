import { defineConfig } from "sanity";
import { schemaTypes } from "./schemas";
import { structureTool } from "sanity/structure";

const projectId =
  (import.meta as any).env?.SANITY_STUDIO_PROJECT_ID ?? "your-project-id";
const dataset = (import.meta as any).env?.SANITY_STUDIO_DATASET ?? "production";

export default defineConfig({
  name: "portfolio-studio",
  title: "Lukas Pscheidt Portfolio Studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
