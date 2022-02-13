import { OpsData } from "./OpsData"
import { reactiveStore, store } from "@/Store"

const numberToString = function (n: number) {
  if (isNaN(n)) {
    return "0"
  } else {
    return n.toString()
  }
}

const setInnerText = function (elemId: string, textToAdd: string) {
  const elem = document.getElementById(elemId)
  if (elem) {
    elem.innerText = textToAdd
  }
}

const fillPopUp = function (data: OpsData) {
  setInnerText("popUpTypeOps", data.typeOps)
  setInnerText("popUpDate", data.date.toDateString())
  setInnerText("popUpBoatType", data.boatType)
  setInnerText("popUpPort", data.portDisembarkation)
  setInnerText("popUpNbSurvivor", numberToString(data.nbSurvivor))
  setInnerText("popUpFemale", numberToString(data.female))
  setInnerText("popUpMale", numberToString(data.male))
  setInnerText("popUpMinor", numberToString(data.under18))
  setInnerText("popUpPregnant", numberToString(data.pregnantWomen))
  setInnerText("popUpUnaccompagnied", numberToString(data.under18unacc))
  setInnerText("popUpChildren", numberToString(data.under5))
  setInnerText("popUpNationalities", numberToString(data.nbNationalities))
  setInnerText("popUpWind", numberToString(data.windForce))
  setInnerText("popUpWave", numberToString(data.waveHeight))
  setInnerText("popUpLat", numberToString(data.latitude))
  setInnerText("popUpLon", numberToString(data.longitude))
}

export const showPopUp = function (data: OpsData): void {
  reactiveStore.updatePopUpVisibility()
  fillPopUp(data)
  reactiveStore.setVideoAndPicturePopUpVisibility(data.imageSrc.length > 0 || data.videoSrc.length > 0)
  reactiveStore.setPopUpVideoUrls(data.videoSrc)
  reactiveStore.setPopUpImageUrls(data.imageSrc)
}

export const updateStats = function (minDate: Date, maxDate: Date, timeFilteredData: OpsData[]): void {
  setInnerText("statsMinDate", minDate.toDateString())
  setInnerText("statsMaxDate", maxDate.toDateString())
  let nbSurvivor = 0
  let female = 0
  let male = 0
  let under18 = 0
  let pregnantwomen = 0
  let under18unacc = 0
  let under5 = 0
  let nbNationalities = 0
  const days = new Set()
  const nbRescueOps = store.allData.filter(el => el.typeOps === "Rescue").length
  const nbPeopleAssisted = store.allData.filter(el => el.nbSurvivor).map(
    el => el.nbSurvivor).reduce((partialSum, a) => partialSum + a, 0)
  for (const data of timeFilteredData) {
    nbSurvivor = data.nbSurvivor ? nbSurvivor + data.nbSurvivor : nbSurvivor
    female = data.female ? female + data.female : female
    male = data.male ? male + data.male : male
    under18 = data.under18 ? under18 + data.under18 : under18
    pregnantwomen = data.pregnantWomen ? pregnantwomen + data.pregnantWomen : pregnantwomen
    under18unacc = data.under18unacc ? under18unacc + data.under18unacc : under18unacc
    under5 = data.under5 ? under5 + data.under5 : under5
    nbNationalities = data.nbNationalities ? Math.max(nbNationalities, data.nbNationalities) : nbNationalities
    days.add(data.date)
  }
  setInnerText("statsNbSurvivor", numberToString(nbSurvivor))
  setInnerText("statsFemale", numberToString(female))
  setInnerText("statsMale", numberToString(male))
  setInnerText("statsMinor", numberToString(under18))
  setInnerText("statsPregnant", numberToString(pregnantwomen))
  setInnerText("statsUnaccompagnied", numberToString(under18unacc))
  setInnerText("statsChildren", numberToString(under5))
  setInnerText("statsNationalities", numberToString(nbNationalities))
  setInnerText("statsNbDays", numberToString(days.size))
  setInnerText("statsNbOperations", numberToString(nbRescueOps))
  setInnerText("statsNbPeopleAssisted", numberToString(nbPeopleAssisted))
  // Mobile view
  setInnerText("statsMinDate2", minDate.toDateString())
  setInnerText("statsMaxDate2", maxDate.toDateString())
  setInnerText("statsNbSurvivor2", numberToString(nbSurvivor))
  setInnerText("statsNbDays2", numberToString(days.size))
}
