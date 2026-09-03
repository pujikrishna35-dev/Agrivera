export const contactService = {
  submitContactForm: async (formData) => {
    // Simulate network API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, message: 'Thank you! Our agricultural expert will get in touch with you shortly.' };
  },
  subscribeNewsletter: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return { success: true, message: 'Subscribed successfully to Agrivera updates!' };
  }
};
