import { DateTime } from "luxon";

export const mapCards = (data) => {
  return data.map((value) => {
    return {
      id: value.iniciativeId,
      title: value.name,
      description: `${value.resume.slice(0, 150)}...`,
      objective: value.objective,
      percentage: value.percentage,
      daysLeft: value.daysLeft,
      profit: `${(value.percentage * 100).toFixed(2)}%`,
      achieved: value.investPercentage,
      img: value.imageUrl,
    };
  });
};

const converTime = time => DateTime.fromISO(time).toLocaleString()

export const mapTableInvesment = (data, navigate, lang) => {
  const dataMapped = data.iniciativesSupported && data.iniciativesSupported.length > 0
    ? data.iniciativesSupported.map((item) => {
        return {
          name: item.translations[lang].name,
          quantity: item.quantity,
          date: converTime(item.investmentDate),
          onClick: () => navigate('/initiative', {
            state: {
              id: item.iniciative,
              didInvest: true,
            }
          }),
        };
      })
    : [];
  
    return dataMapped.sort((a,b) => new Date(b.date) -  new Date(a.date))
};


export const getDocumentPerCountry = country => {
  const objDoc = {
    CO: ['C.C.', 'C.E.', 'Pasaporte'],
    MX: ['INE/IFE', 'Pasaporte'],
    OTHER: ['Pasaporte'],
  }
  return objDoc[country]
  
}
