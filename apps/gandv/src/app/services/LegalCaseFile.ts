import axios from 'axios';
import { LegalMatterType } from '../types/Enums';

export const fetchLegalCaseFiles = async (): Promise<Expediente[]> => {
  try {
    const response = await axios.get<Expediente[]>('/api/caseFiles/');
    console.log('API Response:', response.data);

    if (Array.isArray(response.data)) {
      return response.data.map(expediente => ({
        ...expediente,
        matter: LegalMatterType[expediente.matterType], 
      }));
    } else {
      console.error('Invalid response format');
      return [];
    }
  } catch (error: any) {
    console.error('Error fetching case files:', error.message || error);
    return [];
  }
};
