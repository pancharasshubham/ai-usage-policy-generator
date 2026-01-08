import type { PolicyInput } from "../types/policy";

export function generatePolicy(data: PolicyInput): string {
  return `
AI USAGE POLICY

Project Name:
${data.projectName || "N/A"}

Organization / Author:
${data.organization || "N/A"}

AI Usage:
${data.aiUsage || "Not specified"}

Data Handling:
${data.dataHandling || "Not specified"}

Restrictions & Limitations:
${data.restrictions || "Not specified"}

This document describes how artificial intelligence is used in this project.
It is intended to improve transparency and responsible usage of AI systems.
`;
}
