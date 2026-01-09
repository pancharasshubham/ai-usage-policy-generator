// interface Props {
//   text: string;
// }

// const CopyButton = ({ text }: Props) => {
//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(text);
//       alert("Policy copied to clipboard");
//     } catch {
//       alert("Copy failed");
//     }
//   };

//   return (
//     <button
//       onClick={handleCopy}
//       className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm"
//     >
//       Copy Policy
//     </button>
//   );
// };

// export default CopyButton;

import { useState } from "react";

interface Props {
  text: string;
}

const CopyButton = ({ text }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;

    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="relative px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded text-sm"
    >
      {copied ? "Copied" : "Copy"}

      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-900 border border-slate-700 px-2 py-1 rounded text-slate-100">
          Copied to clipboard
        </span>
      )}
    </button>
  );
};

export default CopyButton;
