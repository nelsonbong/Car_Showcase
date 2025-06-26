import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    
    const { manufacturer, year, model, fuel } = filters;
    
    const headers = {
		'x-rapidapi-key': '2542cb4f03mshc2a97d6bc49b59ap15bddcjsn6b5ef2c4c004',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch (`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {
    
    const searchParams = new URLSearchParams(window.location.search);
    
    searchParams.set(type, value)
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    
    return newPathname;
}