export const updatePageSeo = ({ title, description }) => {
  document.title = title ? `${title} | AGRIVERA Crop Solutions` : 'AGRIVERA Crop Solutions Pvt. Ltd.';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description || 'Advanced crop solutions, innovative technologies and dedicated support for higher yields and sustainable farming.');
  }
};
