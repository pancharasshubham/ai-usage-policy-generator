import { useState } from "react";
import PolicyForm from "../components/PolicyForm";
import PolicyPreview from "../components/PolicyPreview";
import type { PolicyInput } from "../types/policy";
import { generatePolicy } from "../utils/generatePolicy";
import { standardAIDisclosure } from "../utils/standardDisclosure";

const PolicyGenerator = () => {
  const [policyData, setPolicyData] = useState<PolicyInput>({
    projectName: "",
    organization: "",
    aiUsage: "",
    dataHandling: "",
    restrictions: "",
  });

  const policyText = generatePolicy(policyData);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">
        Generate AI Usage Policy
      </h1>
    <button
        onClick={() => setPolicyData(standardAIDisclosure)}
      className="mb-6 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm">
        Apply Standard AI Disclosure
    </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Policy Inputs</h2>
          <PolicyForm data={policyData} onChange={setPolicyData} />
        </div>

        {/* Right: Preview */}
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
          <PolicyPreview policyText={policyText} />
        </div>
      </div>
    </div>
  );
};

export default PolicyGenerator;
