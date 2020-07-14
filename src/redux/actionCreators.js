import {
  SET_ADS,
  SET_IS_LOADED,
  SET_IS_LOADING,
  SET_VERTICAL_ORIENTATION,
  SET_HORIZONTAL_ORIENTATION,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SET_FAVOURITES,
  SET_ABOUT_TEXT,
  SET_NEWS,

  PAGINATE_SALE,
  PAGINATE_RENT,
  PAGINATE_DAILYRENT,
  PAGINATE_NEWS,
  PAGINATE_COMMON,

  // SORT_LOW_PRICE,
  // SORT_HIGHT_PRICE,
  SORT_PRICE,

  SORT_BY_TODAY,
  SORT_BY_WEEK,
  SORT_BY_MOUNTH,
  ACTIVE_TOP_FILTER_PRICE,
  ACTIVE_TOP_FILTER_DATE,
  FILTER_CATEGORY_NEWS,
  ACTIVE_CATEGORY_NEWS
} from './constants';
// import { loadAds } from '../api/loadAds';
import adsData from '../api/testData.json';
import newsData from '../api/testNewsData.json';

export const setAdsCreator = ads => ({
  type: SET_ADS,
  payload: ads,
});

export const startLoadingCreator = () => ({
  type: SET_IS_LOADING,
  payload: true,
});

export const stopLoadingCreator = () => ({
  type: SET_IS_LOADING,
  payload: false,
});

export const setIsLoadedCreator = () => ({
  type: SET_IS_LOADED,
  payload: true,
});

//покзать вид плиткой 
export const setVerticalOrientationCreator = () => ({
  type: SET_VERTICAL_ORIENTATION,
});
//покзать вид списком
export const setHorizontalOrientationCreator = () => ({
  type: SET_HORIZONTAL_ORIENTATION,
});



export const sortPriceCreator = selectedOption => ({
  type: SORT_PRICE,
  payload: selectedOption
});


//сортировка за сегодня 
export const sortByTodayCreator = () => ({
  type: SORT_BY_TODAY,
})

//сортировка за неделю
export const sortByWeekCreator = () => ({
  type: SORT_BY_WEEK,
})

//сортировка за месяц
export const sortByMounthCreator = () => ({
  type: SORT_BY_MOUNTH,
})



//активный фильтр "по цене"
export const activeTopFilterPriceCreator = () => ({
  type: ACTIVE_TOP_FILTER_PRICE,
})
//активный фильтр "по дате"
export const activeTopFilterDateCreator = () => ({
  type: ACTIVE_TOP_FILTER_DATE,
})



////новости

//фильтры по категориям
export const filterCategoryNewsCreator = selectedOption => ({
  type: FILTER_CATEGORY_NEWS,
  payload: selectedOption
})
export const activeCategoryNewsCreator = selectedOption => ({
  type: ACTIVE_CATEGORY_NEWS,
  payload: selectedOption
})


//добавление в избранное
export const addFavouriteCreator = ad => ({
  type: ADD_FAVOURITE,
  payload: ad,
});

//удаление из избранного
export const removeFavouriteCreator = ad => ({
  type: REMOVE_FAVOURITE,
  payload: ad,
});

export const setFavouritesCreator = ads => ({
  type: SET_FAVOURITES,
  payload: ads,
});


export const setAboutTextCreator = () => ({
  type: SET_ABOUT_TEXT,
});

export const setNewsCreator = news => ({
  type: SET_NEWS,
  payload: news,
});

//пагинация
export const paginateSaleCreator = number => ({
  type: PAGINATE_SALE,
  payload: number,
});
export const paginateRentCreator = number => ({
  type: PAGINATE_RENT,
  payload: number,
});
export const paginateDailyRentCreator = number => ({
  type: PAGINATE_DAILYRENT,
  payload: number,
});
export const paginateNewsCreator = number => ({
  type: PAGINATE_NEWS,
  payload: number,
});
export const paginateCommonCreator = number => ({
  type: PAGINATE_COMMON,
  payload: number,
});
// export const handleLoad = () => {
//   return (dispatch) => {
//     dispatch(startLoadingCreator());
//     loadAds(info).then((ads) => {
//       console.log(info)
//       dispatch(setAdsCreator(ads));
//       dispatch(setIsLoadedCreator());
//       dispatch(stopLoadingCreator());
//     });
//   };
// };

export const handleLoadAds = () => {
  return (dispatch) => {
    dispatch(startLoadingCreator());
    // fetch(info).then((ads) => {
    //   console.log(info)
    //   dispatch(setAdsCreator(ads));
    //   dispatch(setIsLoadedCreator());
    //   dispatch(stopLoadingCreator());
    // });
    dispatch(setAdsCreator(adsData));
    dispatch(setIsLoadedCreator());
    dispatch(stopLoadingCreator());
  };
};

export const handleLoadNews = () => {
  return (dispatch) => {
    dispatch(startLoadingCreator());
    // fetch(info).then((ads) => {
    //   console.log(info)
    //   dispatch(setAdsCreator(ads));
    //   dispatch(setIsLoadedCreator());
    //   dispatch(stopLoadingCreator());
    // });
    dispatch(setNewsCreator(newsData));
    dispatch(setIsLoadedCreator());
    dispatch(stopLoadingCreator());
  };
};

export const handleLoadNewsAds = () => {
  return (dispatch) => {
    dispatch(startLoadingCreator());
    // fetch(info).then((ads) => {
    //   console.log(info)
    //   dispatch(setAdsCreator(ads));
    //   dispatch(setIsLoadedCreator());
    //   dispatch(stopLoadingCreator());
    // });
    dispatch(setNewsCreator(newsData));
    dispatch(setAdsCreator(adsData));
    dispatch(setIsLoadedCreator());
    dispatch(stopLoadingCreator());
  };
};

// export const loadSingleAd = (id) => {

//   return (dispatch) => {
//     dispatch(startLoadingCreator());
//     loadAds('http://localhost:5000/testData').then((ads) => {
//       const ad = ads.find(item => item.id === id);

//       dispatch(setAdsCreator(ad));
//       dispatch(setIsLoadedCreator());
//       dispatch(stopLoadingCreator());
//     });
//   };
// }


