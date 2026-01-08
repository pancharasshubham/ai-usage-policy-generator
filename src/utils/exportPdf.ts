import jsPDF from "jspdf";

export function exportPolicyPdf(text: string) {
  if (!text.trim()) return;

  const pdf = new jsPDF({
    unit: "mm",
    format: "a4",
  });

  const marginLeft = 15;
  const marginTop = 20;
  const maxWidth = 180;

  const lines = pdf.splitTextToSize(text, maxWidth);

  pdf.text(lines, marginLeft, marginTop);
  pdf.save("ai-usage-policy.pdf");
}
