export function checkQuantity (option, quantity) {
  switch (option) {
    case ('kmAmiles'):
      return ((quantity * 0.621371).toFixed(2))
    case ('milesAkm'):
      return ((quantity * 1.60934).toFixed(2))
    case ('piesAmetros'):
      return ((quantity * 0.3048).toFixed(2))
    case ('metrosApies'):
      return ((quantity * 3.28084).toFixed(2))
    case ('cmApulgadas'):
      return ((quantity * 0.393701).toFixed(2))
    case ('pulgadasAcm'):
      return ((quantity * 2.54).toFixed(2))
  }
}

export function checkMeasurement (option) {
  switch (option) {
    case ('kmAmiles'):
      return ({ firstUnity: 'km', secondUnity: 'miles' })

    case ('milesAkm'):
      return ({ firstUnity: 'miles', secondUnity: 'km' })

    case ('piesAmetros'):
      return ({ firstUnity: 'feet', secondUnity: 'meters' })

    case ('metrosApies'):
      return ({ firstUnity: 'meters', secondUnity: 'feet' })

    case ('cmApulgadas'):
      return ({ firstUnity: 'cm', secondUnity: 'inches' })

    case ('pulgadasAcm'):
      return ({ firstUnity: 'inches', secondUnity: 'cm' })
  }
}

export function getReverseConversion (firstUnity) {
  switch (firstUnity) {
    case 'km':
      return ('kmAmiles')
    case 'miles':
      return ('milesAkm')
    case 'pies':
      return ('piesAmetros')
    case 'metros':
      return ('metrosApies')
    case 'cm':
      return ('cmApulgadas')
    case 'pulgadas':
      return ('pulgadasAcm')
  }
}
