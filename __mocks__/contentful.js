import { mockData } from '../utils/mockData';

const mockContentfulClient = {
  getEntries: jest.fn().mockResolvedValue(mockData),
};

export const createClient = jest.fn(() => mockContentfulClient);
