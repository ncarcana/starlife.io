import React, { useState, useEffect } from "react";


export function useHoroscope() {
  const [date, setDate] = useState({ })  
  const userDate = async(date:any)=> {
    
    const res = await fetch("http://horoscope-api.herokuapp.com/horoscope/today/Libra");
    const data = await res.json()
    setDate(data)
}

  useEffect(() => {
    userDate(date);
  }, [])

  return (
    userDate(date)
  )
}
