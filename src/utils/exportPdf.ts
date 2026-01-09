import jsPDF from "jspdf";

export function exportPolicyPdf(text: string) {
  if (!text.trim()) return;

  const pdf = new jsPDF({
    unit: "mm",
    format: "a4",
  });

  const marginLeft = 15;
  const marginTop = 20;
  const lineHeight = 8;
  const pageHeight = pdf.internal.pageSize.getHeight();
  const maxWidth = 180;

  const lines = pdf.splitTextToSize(text, maxWidth);

  let y = marginTop;

  lines.forEach((line: string) => {
    const isSectionHeader =
        line.match(/^\d+\.\s[A-Z\s&]+$/) ||
        line.includes("PROJECT INFORMATION");

    const isParagraphStart =
        !isSectionHeader &&
        line.trim().length > 0 &&
        !line.includes("====");

    // Ensure section headers are not orphaned at page bottom
    if (
        isSectionHeader &&
        y + lineHeight * 4 > pageHeight - marginTop
    ) {
        pdf.addPage();
        y = marginTop;
    }
    
    // Protect paragraphs from splitting awkwardly
    if (
        isParagraphStart &&
        y + lineHeight * 3 > pageHeight - marginTop
    ) {
        pdf.addPage();
        y = marginTop;
    }

    // Normal page overflow protection
    if (y + lineHeight > pageHeight - marginTop) {
        pdf.addPage();
        y = marginTop;
    }

    pdf.text(line, marginLeft, y); 
    // Add extra spacing after section separators
    if (line.includes("====")) {
        y += lineHeight * 1.5;
    } else {
        y += lineHeight;
    }
  });

  pdf.save("ai-usage-policy.pdf");
}
