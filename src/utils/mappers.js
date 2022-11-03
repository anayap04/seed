export const mapCards = data => {
  return data.map(value => {
    return {
      title: value.name,
      description: `${value.resume.slice(0, 150)}...`,
      objective: value.objective,
      percentage: value.percentage,
      daysLeft: value.daysLeft,
      profit: `${(value.percentage * 100).toFixed(2)}%`,
      img: value.imageUrl,
    }
  })
}