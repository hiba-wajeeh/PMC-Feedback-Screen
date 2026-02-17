import axios from 'axios';

// Use environment variables (loaded from .env file)
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export interface FeedbackData {
  rating: string;
  name: string;
  email: string;
  phone: string;
  comments: string;
}

export const saveFeedbackToSheet = async (data: FeedbackData): Promise<boolean> => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, {
      ...data,
      secretKey: SECRET_KEY
    }, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    
    return response.data.success === true;
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return false;
  }
};
