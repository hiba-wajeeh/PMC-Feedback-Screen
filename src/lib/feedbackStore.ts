export interface FeedbackEntry {
  rating: string;
  name: string;
  email: string;
  phone: string;
  comments: string;
  date: string;
}

const STORAGE_KEY = "pmc_feedback";

export function saveFeedback(entry: FeedbackEntry) {
  const existing = getAllFeedback();
  existing.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getAllFeedback(): FeedbackEntry[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function downloadFeedbackAsCSV() {
  const data = getAllFeedback();
  if (data.length === 0) {
    alert("No feedback data to download.");
    return;
  }

  const headers = ["Date", "Rating", "Name", "Email", "Phone", "Comments"];
  const rows = data.map((d) => [
    d.date,
    d.rating,
    `"${d.name.replace(/"/g, '""')}"`,
    d.email,
    d.phone,
    `"${d.comments.replace(/"/g, '""')}"`,
  ]);

  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `pmc_feedback_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
