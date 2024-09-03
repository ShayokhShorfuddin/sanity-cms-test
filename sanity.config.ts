import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "bqol8hk6",
  dataset: "production",
  title: "Testing my sanity with Sanity CMS and Next.js",
  apiVersion: "09-03-2024",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
