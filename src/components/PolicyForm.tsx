import type { PolicyInput } from "../types/policy";

interface Props {
  data: PolicyInput;
  onChange: (data: PolicyInput) => void;
}

const PolicyForm = ({ data, onChange }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="space-y-4">
      <input
        name="projectName"
        placeholder="Project Name"
        value={data.projectName}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 border border-slate-700"
      />

      <input
        name="organization"
        placeholder="Organization / Author"
        value={data.organization}
        onChange={handleChange}
        className="w-full p-3 rounded bg-slate-800 border border-slate-700"
      />

      <textarea
        name="aiUsage"
        placeholder="Describe how AI is used in this project"
        value={data.aiUsage}
        onChange={handleChange}
        rows={3}
        className="w-full p-3 rounded bg-slate-800 border border-slate-700"
      />

      <textarea
        name="dataHandling"
        placeholder="How is user data handled?"
        value={data.dataHandling}
        onChange={handleChange}
        rows={3}
        className="w-full p-3 rounded bg-slate-800 border border-slate-700"
      />

      <textarea
        name="restrictions"
        placeholder="Any restrictions or limitations?"
        value={data.restrictions}
        onChange={handleChange}
        rows={3}
        className="w-full p-3 rounded bg-slate-800 border border-slate-700"
      />
    </form>
  );
};

export default PolicyForm;
