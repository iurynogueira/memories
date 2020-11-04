import api from './api';
import { handleError } from './error-handler';

interface Memorie {
    id: number;
    user_id: number;
    key: string;
    value: string;
    visibility: boolean;
};

export const getMemories = async (): Promise<Memorie[] | undefined> => {
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

export const removeMemorie = async (memoryId: number): Promise<Memorie[] | undefined> => {
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
