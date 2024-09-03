import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "bqol8hk6",
  dataset: "production",
  title: "Testing my sanity with Sanity CMS and Next.js",

  apiVersion: "2024-09-03",
  basePath: "/admin",
  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
