import jsPDF from "jspdf";

export function exportPolicyPdf(text: string) {
  if (!text.trim()) return;

  const pdf = new jsPDF({
    unit: "mm",
    format: "a4",
  });

  const marginLeft = 15;
  const marginTop = 20;
  const lineHeight = 7;
  const pageHeight = pdf.internal.pageSize.getHeight();
  const maxWidth = 180;

  const lines = pdf.splitTextToSize(text, maxWidth);

  let y = marginTop;

  lines.forEach((line: string) => {
    if (y + lineHeight > pageHeight - marginTop) {
      pdf.addPage();
      y = marginTop;
    }

    pdf.text(line, marginLeft, y);
    y += lineHeight;
  });

  pdf.save("ai-usage-policy.pdf");
}
