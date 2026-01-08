import type { PolicyInput } from "../types/policy";

export function generatePolicy(data: PolicyInput): string {
  const today = new Date().toISOString().split("T")[0];

  return `
AI USAGE POLICY
Version: 1.0
Last Updated: ${today}

--------------------------------------------------

Project Name:
${data.projectName || "Not specified"}

Organization / Author:
${data.organization || "Not specified"}

--------------------------------------------------

1. AI Usage Disclosure

This project uses artificial intelligence to support specific application features.
The AI functionality is designed to assist users and does not operate autonomously
without defined constraints.

AI Usage Description:
${data.aiUsage || "Not specified"}

--------------------------------------------------

2. Data Handling & Privacy

This project follows responsible data handling practices.
User data is processed only for intended functionality and is not used beyond
the defined scope of the application.

Data Handling Description:
${data.dataHandling || "Not specified"}

--------------------------------------------------

3. Trust & Transparency

Users are informed whenever AI-driven functionality is involved in generating
outputs or recommendations. The system aims to maintain transparency by clearly
documenting AI usage, limitations, and safeguards.

AI-generated outputs should not be interpreted as authoritative or final decisions.

--------------------------------------------------

4. Human Oversight & Limitations

Human oversight is maintained over AI-assisted features.
AI outputs may contain inaccuracies and should be reviewed when used for
decision-making purposes.

This system does not replace professional, legal, or expert judgment.

--------------------------------------------------

5. Restrictions & Limitations

${data.restrictions || "No additional restrictions specified"}

--------------------------------------------------

This policy is intended to promote responsible AI usage, transparency, and user trust.
It may be updated as the system evolves or regulatory requirements change.
`;
}
