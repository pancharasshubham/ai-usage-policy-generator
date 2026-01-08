interface Props {
  text: string;
}

const CopyButton = ({ text }: Props) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Policy copied to clipboard");
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm"
    >
      Copy Policy
    </button>
  );
};

export default CopyButton;
