import React, { useEffect, useState } from 'react'
import { clear, cloudy, haze, rain, snow } from '../assets';
import axios from 'axios';

const Hero = () => {

    const myAPIKey = `d65ab4ad6d72aabe5a578a572644d951`

    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState('');
    const [data, setData] = useState({})

    const fetching = (city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myAPIKey}`).then((response) => {
            setData(response.data)
        })
    }
    // const fetching = async (city) => {
    //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d65ab4ad6d72aabe5a578a572644d951`);
    //     return response.json();
    // }

    const btnHandler = () => {
        const weather = fetching(search)
        setCities([...cities, data]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(cities)
    }

    const deleteCity = (city) => {
        setCities(cities.filter(c => c.name !== city.name));
    };


    return (
        <section className='h-full w-full flex flex-col items-center justify-center p-8 gap-16'>
            <div className='min-h-[100vh] w-[90%] glassbg flex flex-col gap-4 items-center py-8'>

                {/* city input div */}
                <form
                    className='flex items-center justify-center font-poppins min-w-[90%] p-2 mb-8 gap-2'
                    onSubmit={handleSubmit}>
                    <input
                        type="text" autoComplete='off' name='city' value={search} onChange={e => setSearch(e.target.value)}
                        placeholder='enter city name'
                        className='w-[50%] outline-none px-[0.9rem] py-[0.7rem] rounded-[25px] font-[500] text-[1.2rem] border-[1px] border-solid border-gray-50 bg-gray-200 opacity-[0.7] text-gray-700 placeholder:text-gray-500'
                    />
                    <button
                        onClick={btnHandler}
                        className='w-[3rem] h-[3rem] bg-gray-200 hover:bg-gray-400 rounded-full'
                    >Go</button>
                </form>

                {/* output div */}
                <div className='flex flex-col items-center justify-center gap-12 min-w-[90%] p-2'>

                    {
                        data.name ? <h1 className='font-poppins font-[600] text-4xl text-gray-800 pointer-events-none'>{data.name}</h1> : <h1 className='font-poppins font-[600] text-4xl text-gray-800 pointer-events-none'> City name</h1>
                    }



                    {/* lon and lat */}
                    {
                        data.coord ? <h2 className='font-poppins font-[500] pointer-events-none'>lon: {data.coord.lon}, lat: {data.coord.lat}</h2> : <h2 className='font-poppins font-[500] pointer-events-none'>lon: longitude, lat: latitude</h2>
                    }



                    {/* main weather */}
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex flex-col items-center gap-8'>

                            {
                                data.weather &&
                                (data.weather[0].main == "Clouds" ?
                                    <img
                                        src={cloudy} alt='cloudy'
                                        className='w-[4rem] pointer-events-none select-none'
                                    /> : (data.weather[0].main == "Haze" ?
                                        <img
                                            src={haze} alt='haze'
                                            className='w-[4rem] pointer-events-none select-none'
                                        /> :
                                        (data.weather[0].main == "Clear" ?
                                            <img
                                                src={clear} alt='clear'
                                                className='w-[4rem] pointer-events-none select-none'
                                            /> :
                                            (data.weather[0].main == "Drizzle" ?
                                                <img
                                                    src={rain} alt='rain'
                                                    className='w-[4rem] pointer-events-none select-none'
                                                /> :
                                                (data.weather[0].main == "Clouds" ?
                                                    <img
                                                        src={snow} alt='snow'
                                                        className='w-[4rem] pointer-events-none select-none'
                                                    /> :
                                                    (data.weather[0].main == "Clouds" ?
                                                        <img
                                                            src={sun} alt='sun'
                                                            className='w-[4rem] pointer-events-none select-none'
                                                        /> :
                                                        (data.weather[0].main == "Rain" ?
                                                            <img
                                                                src={rain} alt='rain'
                                                                className='w-[4rem] pointer-events-none select-none'
                                                            /> :
                                                            null)))))))
                            }

                            <div className='flex items-center justify-center gap-4'>
                                {
                                    data.main ? <h1 className='font-poppins font-[700] text-3xl md:text-6xl cursor-default text-gray-800 hover:text-gray-900'>{data.main.temp.toFixed()}°F</h1> : <h1 className='font-poppins font-[700] text-2xl cursor-default text-gray-800 hover:text-gray-900'>temp°F</h1>
                                }
                                <h1 className='font-poppins font-[800] text-4xl'>|</h1>

                                {
                                    data.main ? <h1 className='font-poppins font-[700] text-3xl md:text-6xl cursor-default text-gray-800 hover:text-gray-900'>{((data.main.temp - 32) * (5 / 9)).toFixed()}°C</h1> : <h1 className='font-poppins font-[700] text-2xl cursor-default text-gray-800 hover:text-gray-900'>temp°C</h1>
                                }
                            </div>

                        </div>

                        {
                            data.weather ? <h2 className='font-poppins font-[600] text-2xl text-gray-800 pointer-events-none'>{data.weather[0].main}</h2> : <h2 className='font-poppins font-[600] text-2xl text-gray-800 pointer-events-none'>weather</h2>
                        }

                    </div>

                    {/* sub weather */}
                    <div className='flex items-center justify-center gap-8'>
                        <div className='flex flex-col items-center justify-center gap-1'>
                            <p className='font-poppins text-sm font-[300] text-gray-700 pointer-events-none'>Humidity</p>

                            {
                                data.main ? <h3 className='font-poppins text-gray-800 pointer-events-none'>{data.main.humidity}%</h3> : <h3 className='font-poppins text-gray-800 pointer-events-none'>humidity%</h3>
                            }
                        </div>

                        <div className='flex flex-col items-center justify-center gap-1'>
                            <p className='font-poppins text-sm font-[300] text-gray-700 pointer-events-none'>windSpeed</p>
                            {
                                data.main ? <h3 className='font-poppins text-gray-800 pointer-events-none'>{data.wind.speed}km/j</h3> : <h3 className='font-poppins text-gray-800 pointer-events-none'>windSpeedkm/j</h3>
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* oupput */}
            <section className='w-[100vw] flex gap-4 overflow-x-scroll scrollbar-hide'>
                {

                    cities.map((city, index) => (
                        <div key={index} className='h-[22rem] min-w-[80%] sm:min-w-[22%] bg-gray-700 text-gray-200 font-poppins font-[600] text-lg p-6 rounded-xl  flex flex-col items-start justify-center gap-2 py-8 relative'>
                            <p
                                onClick={() => { deleteCity(city) }}
                                className='h-6 w-6 bg-gray-400 hover:bg-gray-600 duration-200 text-gray-900 font-[700] text-lg absolute top-2 right-2 cursor-default md:cursor-pointer rounded-full text-center align-middle'
                            >X</p>
                            <h1>Name: {city.name}</h1>
                            {
                                city.main && <h2>Temp: {city.main.temp}</h2>
                            }
                            {
                                city.main && <h3>Humidity: {city.main.humidity}</h3>
                            }
                            {
                                city.weather && <h4>Weather: {city.weather[0].main}</h4>
                            }


                        </div>
                    ))
                }
            </section>
        </section>
    )
}

export default Hero