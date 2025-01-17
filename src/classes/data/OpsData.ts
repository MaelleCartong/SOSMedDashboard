import { convert } from "geo-coordinates-parser"

const dataRequestUrl = `https://sheets.googleapis.com/v4/spreadsheets/1opF61Qq2DgrJIP-kQD5-KHzC4xZkp2u_zqigTGk3V0I/values/Data_operations?key=${process.env.VUE_APP_GOOGLE_API_KEY}`

export enum TypeOps {
  rescue = "Rescue",
  transfer = "Transfer"
}

export interface OpsData {
  date : Date
  typeOps : TypeOps
  nbOps : number
  nbSurvivor : number
  male : number
  female : number
  under18 : number
  under18unacc : number
  under5 : number
  pregnantWomen : number
  latitude : number
  longitude : number
  windForce : number
  waveHeight : number
  boatType : string
  nbNationalities : string
  transfertType : string
  imageSrc: string[]
  videoSrc: string[]
  portDisembarkation : string
  testimonyName: string;
  testimonySrc: string;
}

const createDate = function (dateDayFirst: string) {
  const dateSplit = dateDayFirst.split("/")
  return new Date(parseInt(dateSplit[2]), parseInt(dateSplit[1]) - 1, parseInt(dateSplit[0]))
}

export const fetchOpsData = async function (): Promise<OpsData[]> {
  const sheet: { majorDimension: string; range: string; values: string[][] } = await (await fetch(dataRequestUrl)).json()
  const model = sheet.values.splice(0, 1)[0].map(value => {
    let valueFound
    while ((valueFound = /_([a-zA-Z\d])/g.exec(value)) !== null) {
      value = value.replace(valueFound[0], valueFound[1].toLocaleUpperCase())
    }
    return value
  })
  // Remove artefacts like empty lines or empty cells
  sheet.values = sheet.values.filter(x => x.length > 0).filter(x => x[0] !== "")

  return sheet.values.map((value, valueIndex) => {
    const newValue: { [key: string]: string } = {}
    model.forEach((currentProperty, index) => {
      newValue[currentProperty] = value[index]
    })
    return convertOpsData(newValue, `line ${valueIndex}`)
  })
}

const convertOpsData = function (rawOpsData: {[key: string]: string}, metadataErrorLog?: string) {
  const res: OpsData = {} as OpsData
  res.date = createDate(rawOpsData.date)
  res.typeOps = rawOpsData.typeOps as TypeOps
  res.nbOps = parseInt(rawOpsData.nbOps)
  res.nbSurvivor = parseInt(rawOpsData.nbSurvivor)
  res.male = parseInt(rawOpsData.male)
  res.female = parseInt(rawOpsData.female)
  res.under18 = parseInt(rawOpsData.under18)
  res.under18unacc = parseInt(rawOpsData.under18Unacc)
  res.under5 = parseInt(rawOpsData.under5)
  res.pregnantWomen = parseInt(rawOpsData.pregnantWomen)
  const rawCoordinates = rawOpsData.latitude.concat(", ").concat(rawOpsData.longitude)
  try {
    const coordinates = convert(rawCoordinates)
    res.latitude = coordinates.decimalLatitude
    res.longitude = coordinates.decimalLongitude
  } catch {
    console.error(`Invalid coordinates ${rawCoordinates} for operation ${metadataErrorLog}`)
  }
  res.windForce = parseInt(rawOpsData.windForce)
  res.waveHeight = parseInt(rawOpsData.waveHeight)
  res.boatType = rawOpsData.boatType
  res.nbNationalities = rawOpsData.typeNationalities
  res.transfertType = rawOpsData.transfertType
  res.imageSrc = rawOpsData.imageSrc ? rawOpsData.imageSrc.split(";") : []
  res.videoSrc = rawOpsData.videoSrv ? rawOpsData.videoSrv.split(";") : []
  res.portDisembarkation = rawOpsData.PortDisembarkation
  res.testimonyName = rawOpsData.testimony_name
  res.testimonySrc = rawOpsData.testimony_src
  return res
}

export interface OpsPopUpContent {
  typeOps: string;
  date: Date;
  boatName: string;
  portDisembarkation: string;
  nbRescued: number;

}
