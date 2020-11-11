import api from './api';
import { handleError } from './error-handler';

interface Memory {
    id: number;
    user_id: number;
    key: string;
    value: string;
    visibility: boolean;
};

export const getMemories = async (): Promise<Memory[] | undefined> => {
  try {
    const response = await api.get('/memories');
    if (response && response.data) {
      return response.data.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export const removeMemory = async (memoryId: number): Promise<Memory[] | undefined> => {
  try {
    const response = await api.delete('/memories/' + memoryId);
    if (response && response.data) {
      return response.data.data;
    }
  } catch (error) {
    handleError(error);
    throw error;
  }
};
