import React, { useState } from 'react'

const WeatherCars = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleClick = () => {
        setIsCelsius(!isCelsius)
    }

    return (
        <article className='card'>
            <header className='card__header'>
                <h2 className='card__title'>Weather App</h2>
                <h3 className='card__subTitle'>{weather?.name}, {weather?.sys.country}</h3>
            </header>
            <main className='card__container-main'>
                <section className='card__icon-container'>
                    <img className='card__icon' src={weather && ` http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt={weather?.name} />
                </section>
                <aside className='card__aside'>
                    <h3 className='card__aside-subTitle'>"{weather.weather[0].description}"</h3>
                    <ul className='card___list'>
                        <li className='card__item'><strong>Wind Speed </strong>{weather?.wind.speed}m/s</li>
                        <li className='card__item'><strong>Clouds </strong>{weather?.clouds.all}%</li>
                        <li className='card__item'><strong>Pressure </strong>{weather?.main.pressure}hPa </li>
                    </ul>
                </aside>
            </main>
            <div className='card__temp'><h3 className='card__temp'>{isCelsius ? `${temp?.celsius} °C` : `${temp?.farengey} °F`}</h3></div>
            <footer className='card__footer'>
                <button className='card__bnt' onClick={handleClick}>Change To {isCelsius ? '°F' : '°C'}</button>
            </footer>
        </article>
    )
}

export default WeatherCars