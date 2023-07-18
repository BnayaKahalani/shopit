const useCommas = (input: number | string): string => {
  const number = typeof input === "string" ? parseFloat(input) : input

  if (isNaN(number)) {
    throw new Error("Invalid input. Please provide a valid number or numeric string.")
  }

  let numberString = number.toString()

  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return numberString
}

export default useCommas
