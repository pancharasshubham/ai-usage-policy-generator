import { useState } from "react";
import PolicyForm from "../components/PolicyForm";
import type { PolicyInput } from "../types/policy";

const PolicyGenerator = () => {
  const [policyData, setPolicyData] = useState<PolicyInput>({
    projectName: "",
    organization: "",
    aiUsage: "",
    dataHandling: "",
    restrictions: "",
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Generate AI Usage Policy
      </h2>

      <PolicyForm data={policyData} onChange={setPolicyData} />
    </div>
  );
};

export default PolicyGenerator;
