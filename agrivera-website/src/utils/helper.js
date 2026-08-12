export const filterBySearch = (items, query, keys = ['name', 'title', 'description']) => {
  if (!query) return items;
  const q = query.toLowerCase().trim();
  return items.filter(item =>
    keys.some(key => item[key] && item[key].toString().toLowerCase().includes(q))
  );
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
