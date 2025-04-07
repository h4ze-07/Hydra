import { useEffect, useState } from 'react';

const useCreateSider = (arr, prevLimit, nextLimit) => {

    const [slider, setSlider] = useState(1)
    const [data, setData] = useState(arr[0])

    const nextSlider = () => {
        slider > nextLimit - 1 ? setSlider(prevLimit) : setSlider(prev => prev + 1)
    }

    const prevSlider = () => {
        slider < prevLimit + 1 ? setSlider(nextLimit) : setSlider(prev => prev - 1)
    }

    useEffect(() => {
        const el = arr.filter(card => card.id === slider)
        setData(el[0])
    }, [slider])


    return [data, nextSlider, prevSlider]
}

export default useCreateSider;
