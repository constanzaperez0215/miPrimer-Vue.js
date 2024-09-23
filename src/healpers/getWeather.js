import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-33.4569&longitude=-70.6483&hourly=temperature_2m&timezone=auto'

export const getTemperatura = async () => {
  const res = await axios.get(API_URL)
  const nuevaTemperatura = res.data.hourly.temperature_2m[0]
  return nuevaTemperatura
}