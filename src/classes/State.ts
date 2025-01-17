import { OpsData } from "./data/OpsData"
import { FeatureCollection } from "geojson"
import { OtherData } from "./data/OtherData"

export enum SwitchType {
  harbor = "harbor",
  rescue = "rescue",
  medEvac = "medEvac",
  srr = "srr",
  transfer = "transfer",
  incident = "incident",
  death = "death",
  shipwreck = "shipwreck"
}

export enum PopUpType {
  OPS = "OPS",
  DEAD = "DEAD",
  INCIDENT = "INCIDENT",
  SHIPWRECK = "SHIPWRECK"
}
export interface ApplicationState {
  isMenuVisible: boolean;
  isPopUpVisible: boolean;
  popUpType: PopUpType | null;
  popUpData: OpsData | OtherData | null;
  virtualVisitAlreadyOpened: boolean;
  minDate: Date;
  maxDate: Date;
  switch: { [key in SwitchType]: boolean }
}

export interface DataState {
  OpsData: OpsData[]
  otherData: {
    incidents: FeatureCollection
    deaths: FeatureCollection
    shipwrecks: FeatureCollection
  }
  harbors: FeatureCollection
  sar: FeatureCollection
  sarCenters: FeatureCollection
  dataLoaded: boolean
}
