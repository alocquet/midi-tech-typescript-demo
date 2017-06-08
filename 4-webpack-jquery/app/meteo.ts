export interface CityInfo {
    name: string;
    country: string;
    latitude: string;
    longitude: string;
    elevation: string;
    sunrise: string;
    sunset: string;
}

export interface ForecastInfo {
    latitude?: any;
    longitude?: any;
    elevation: string;
}

export interface CurrentCondition {
    date: string;
    hour: string;
    tmp: number;
    wnd_spd: number;
    wnd_gust: number;
    wnd_dir: string;
    pressure: number;
    humidity: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
}

export interface RootObject {
    city_info: CityInfo;
    forecast_info: ForecastInfo;
    current_condition: CurrentCondition
}