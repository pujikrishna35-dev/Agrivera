import { DEALERS_DATA } from '../data/dealers';

export const dealerService = {
  getDealers: async (state = null) => {
    if (!state || state === 'all') return DEALERS_DATA;
    return DEALERS_DATA.filter(d => d.state.toLowerCase() === state.toLowerCase());
  },
  applyDealer: async (applicationData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, message: 'Dealer application submitted! Reference ID: AG-DLR-' + Math.floor(1000 + Math.random() * 9000) };
  }
};
