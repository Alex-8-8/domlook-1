import {
    SORT_TYPE_RENT,
    SORT_TYPE_SELL,
    SORT_STATUS_HOUSE,
    SORT_STATUS_APARTMENT,
    SORT_LOCATION_KIEV,
    SORT_LOCATION_KHARKOV,
    SORT_LOCATION_DNEPR,
    SORT_LOCATION_LVOV,
    SORT_LOCATION_ODESSA,

    FILTER_STATUS_RENT,
    FILTER_STATUS_SALE,
    FILTER_STATUS_DAILYRENT,

    FILTER_TYPE_HOUSE,
    FILTER_TYPE_APPARTMENT,
    FILTER_TYPE_COMMERCE,


    RESET_FILTERS
} from './constants';

const initialState = {
    typeFilter: '',
    statusFilter: '',
    locationFilter: ''
}
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        //сортировка по цене
        case SORT_TYPE_RENT:
            return {
                ...state,
                typeFilter: "rent",
                statusFilter: '',
                locationFilter: ''
            };
        case SORT_TYPE_SELL:
            return {
                ...state,
                typeFilter: "sell",
                statusFilter: '',
                locationFilter: ''
            };

        //сортировка по квартира\дом
        case SORT_STATUS_HOUSE:
            return {
                ...state,
                statusFilter: "house",
                typeFilter: "",
                locationFilter: ''
            };
        case SORT_STATUS_APARTMENT:
            return {
                ...state,
                statusFilter: "apartment",
                typeFilter: "",
                locationFilter: ''
            };


        //сортировка по городам
        case SORT_LOCATION_KIEV:
            return {
                ...state,
                locationFilter: "Kiev",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_LOCATION_KHARKOV:
            return {
                ...state,
                locationFilter: "Kharkov",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_LOCATION_DNEPR:
            return {
                ...state,
                locationFilter: "Dnepr",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_LOCATION_LVOV:
            return {
                ...state,
                locationFilter: "Lvov",
                statusFilter: "",
                typeFilter: "",
            };
        case SORT_LOCATION_ODESSA:
            return {
                ...state,
                locationFilter: "Odessa",
                statusFilter: "",
                typeFilter: "",
            };

        case FILTER_STATUS_RENT:
            return {
                ...state,
                typeFilter: 'rent'
            };
        case FILTER_STATUS_SALE:
            return {
                ...state,
                typeFilter: 'sale'
            };
        case FILTER_STATUS_DAILYRENT:
            return {
                ...state,
                typeFilter: 'dailyRent'
            };


        case FILTER_TYPE_HOUSE:
            return {
                ...state,
                statusFilter: 'house'
            };
        case FILTER_TYPE_APPARTMENT:
            return {
                ...state,
                statusFilter: 'apartment'
            };
        case FILTER_TYPE_COMMERCE:
            return {
                ...state,
                statusFilter: 'commerce'
            };


        case RESET_FILTERS:
            return {
                ...state,
                typeFilter: '',
                statusFilter: '',
                locationFilter: '',
            };


        default:
            return state;
    }
}