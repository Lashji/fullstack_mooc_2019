import React, { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ data }) => {
	let [temp, setTemp] = useState(0)
	let [wind, setWind] = useState(0)
	let [icon, setIcon] = useState("")

	useEffect(() => {
		axios
			.get(
				"http://api.openweathermap.org/data/2.5/weather?q=" +
					data.capital +
					"&units=metric" +
					"&appid=8afa7acb945ba2a65c41cb3ca3b0a92b"
			)
			.then(res => {
				console.log(res)
				setTemp(res.data.main.temp)
				setWind(res.data.wind.speed)
				setIcon(res.data.weather[0].icon)
			})
	}, [])

	return (
		<div>
			{console.log("icon", icon)}
			<h1>Weather in {data.capital}</h1>
			<p>Temperature: {temp} Celcius</p>
			<img
				src={
					icon !== ""
						? "https://openweathermap.org/img/w/" + icon + ".png"
						: "#"
				}
				alt={"icon"}
			/>
			<p>Wind {wind} kph</p>
		</div>
	)
}

export default Weather
