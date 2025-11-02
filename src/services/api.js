const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatientData = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();

    const jessica = data.find(
      (p) => p.name && p.name.toLowerCase() === "jessica taylor"
    );

    return jessica;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
