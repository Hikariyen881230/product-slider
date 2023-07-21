export default function calculateDeliveryDate(type: string) {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }
  let formattedDate

  if (type === 'Prebuilt PC') {
    const estimateDate = new Date(today)
    estimateDate.setDate(today.getDate() + 4)
    formattedDate = estimateDate.toLocaleDateString('en-US', options)
    return `Delivery By ${formattedDate}`
  } else {
    const estimateDate = new Date(today)
    estimateDate.setDate(today.getDate() + 7)
    formattedDate = estimateDate.toLocaleDateString('en-US', options)
    return `Delivery By ${formattedDate}`
  }
}
