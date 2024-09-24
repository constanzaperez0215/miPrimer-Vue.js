import axios from "axios"

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-33.0475&longitude=-71.4425&current=temperature_2m&timezone=auto&forecast_days=1'

export const getTemperatura = async () => {
  const res = await axios.get(API_URL)
  const nuevaTemperatura = res.data.current.temperature_2m
  return nuevaTemperatura
}