import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function findRealImages() {
  const hospitals = [
    "Jaramogi Oginga Odinga Teaching & Referral Hospital Kisumu",
    "Thika Level 5 Hospital Kiambu",
    "Mbagathi Hospital Nairobi",
    "Coast General Teaching & Referral Hospital Mombasa",
    "Nyeri Provincial General Hospital",
    "Sabatia Eye Hospital Vihiga",
    "Mama Lucy Kibaki Hospital Nairobi",
    "Kakamega County General Teaching & Referral Hospital",
    "Nakuru Level 6 Hospital",
    "Kitale County Referral Hospital Eye Unit"
  ];

  const results = [];
  for (const hospital of hospitals) {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Find a publicly accessible, high-quality image URL for ${hospital}. Return only the URL.`,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });
    results.push({ hospital, url: response.text });
  }
  console.log(JSON.stringify(results, null, 2));
}

// This is a conceptual script, I will actually just use the tool directly in my thought process or via a single call if possible.
// But I can't run this script here. I will use the tool via the model.
