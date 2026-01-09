import { exportPolicyPdf } from "../utils/exportPdf";
import CopyButton from "./CopyButton";


interface Props {
  policyText: string;
}

const PolicyPreview = ({ policyText }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-slate-400">
          Generated Policy
        </span>

        <div className="flex gap-2">
          <CopyButton text={policyText} />
          <button
            onClick={() => exportPolicyPdf(policyText)}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded text-sm"
          >
            Export PDF
          </button>
        </div>
      </div>

      {/* Policy Preview */}
      <div className="max-w-full overflow-x-hidden">
        <pre
          className="
            min-h-[300px]
            p-4
            bg-slate-900
            border
            border-slate-700
            rounded
            whitespace-pre-wrap
            break-all
            overflow-x-auto
            text-xs sm:text-sm
            leading-relaxed
            text-slate-100
          "
        >
        {policyText.trim()
          ? policyText
          : "Start filling the form to generate the policy preview."}
        </pre>
      </div>
    </div>
  );
};

export default PolicyPreview;
