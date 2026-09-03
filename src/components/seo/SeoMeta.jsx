import { useEffect } from 'react';
import { updatePageSeo } from '../../utils/seo';

export const SeoMeta = ({ title, description }) => {
  useEffect(() => {
    updatePageSeo({ title, description });
  }, [title, description]);

  return null;
};

export default SeoMeta;
