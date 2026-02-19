import axios from 'axios';

const SHAREPOINT_FLOW_URL = import.meta.env.VITE_SP_FLOW_URL;

export interface FeedbackData {
  rating: string;
  name: string;
  email: string;
  phone: string;
  comments: string;
}

export const saveFeedbackToSheet = async (data: FeedbackData): Promise<boolean> => {
  try {
    const response = await axios.post(
      SHAREPOINT_FLOW_URL,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.success === true;
  } catch (error) {
    console.error('Error saving to SharePoint:', error);
    return false;
  }
};
