export const parsePrice = (priceStr) => {
  if (typeof priceStr === 'number') return priceStr;
  return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
};

export const formatPrice = (priceNum) => {
  return new Intl.NumberFormat('fr-FR').format(priceNum) + ' FCFA';
};
