export const americanExpress = [
  "34##-######-####L",
  "37##-######-####L"
]

export const dinersClub = [
  "30[0-5]#-######-###L",
  "36##-######-###L",
  "54##-####-####-###L"
]

export const discover = [
  "6011-####-####-###L",
  "65##-####-####-###L",
  "64[4-9]#-####-####-###L",
  "6011-62##-####-####-###L",
  "65##-62##-####-####-###L",
  "64[4-9]#-62##-####-####-###L"
]

export const instapayment = [
  "63[7-9]#-####-####-###L"
]

export const jcb = [
  "3528-####-####-###L",
  "3529-####-####-###L",
  "35[3-8]#-####-####-###L"
]

export const laser = [
  "6304###########L",
  "6706###########L",
  "6771###########L",
  "6709###########L",
  "6304#########{5,6}L",
  "6706#########{5,6}L",
  "6771#########{5,6}L",
  "6709#########{5,6}L"
]

export const maestro = [
  "5018-#{4}-#{4}-#{3}L",
  "5020-#{4}-#{4}-#{3}L",
  "5038-#{4}-#{4}-#{3}L",
  "5893-#{4}-#{4}-#{3}L",
  "6304-#{4}-#{4}-#{3}L",
  "6759-#{4}-#{4}-#{3}L",
  "676[1-3]-####-####-###L",
  "5018#{11,15}L",
  "5020#{11,15}L",
  "5038#{11,15}L",
  "5893#{11,15}L",
  "6304#{11,15}L",
  "6759#{11,15}L",
  "676[1-3]#{11,15}L",
]

export const mastercard = [
  "5[1-5]##-####-####-###L",
  "6771-89##-####-###L"
]

export const solo = [
  "6767-####-####-###L",
  "6767-####-####-####-#L",
  "6767-####-####-####-##L"
]

export const visa = [
  "4###########L",
  "4###-####-####-###L"
]

export enum CreditCardProvider {
  SOLO = 'solo',
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  MAESTRO = 'maestro',
  LASER = 'laser',
  JCB = 'jcb',
  INSTAPAYMENT = 'instapayment',
  DISCOVER = 'discover',
  DINERS_CLUB = 'dinersClub',
  AMERICAN_EXPRESS = 'americanExpress'
}

export default {
  visa,
  solo,
  mastercard,
  maestro,
  laser,
  jcb,
  instapayment,
  americanExpress,
  dinersClub,
  discover
}
