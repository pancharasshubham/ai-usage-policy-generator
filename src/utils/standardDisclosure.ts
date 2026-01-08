import type { PolicyInput } from "../types/policy";

export const standardAIDisclosure: PolicyInput = {
  projectName: "AI-Powered Application",
  organization: "Organization / Developer Name",

  aiUsage:
    "This application uses artificial intelligence to assist users by providing automated suggestions, insights, or content. AI functionality is designed to support user actions and operates within defined constraints.",

  dataHandling:
    "User data is processed only for the intended functionality of the application. No data is used beyond its stated purpose, and reasonable measures are taken to ensure data privacy and security.",

  restrictions:
    "AI-generated outputs are advisory in nature and should not be used as the sole basis for critical decisions. Users are encouraged to apply independent judgment where appropriate."
};
