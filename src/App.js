import { React, useEffect, useMemo } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from "react-redux";
import './App.scss';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { SalePage } from './components/SalePage/SalePage';
import { RentPage } from './components/RentPage/RentPage';
import { DailyRentPage } from './components/DailyRentPage/DailyRentPage';
import { NewsPage } from './components/NewsPage/NewsPage';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Footer } from './components/Footer/Footer';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import { Favourites } from './components/Favourites/Favourites';
import {
  NewsDetailsPage,
} from './components/NewsPage/NewsDetailsPage/NewsDetailsPage';
import { handleLoadAds } from "./redux/actionCreators";

function App({ loadData }) {
  useEffect(() => {
    loadData();
  }, []);
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sale" exact component={SalePage} />
        <Route path="/rent" exact component={RentPage} />
        <Route path="/dailyRent" exact component={DailyRentPage} />
        <Route path="/news" exact component={NewsPage} />
        <Route path="/favourites" exact component={Favourites} />
        <Route path="/news/:id" exact component={NewsDetailsPage} />
        <Route path="/sale/:id" component={DetailsPage} />
        <Route path="/rent/:id" component={DetailsPage} />
        <Route path="/dailyRent/:id" component={DetailsPage} />
        <Route path="/favourites/:id" component={DetailsPage} />
        <Route path="/:id" component={DetailsPage} />
        <Route path="/404" component={ErrorPage} />
        <Redirect from="*" to="/404" />
      </Switch>

      <Footer />
    </React.Fragment>
  );
}
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(handleLoadAds()),
});

const Enhanced = connect(null, mapDispatchToProps)(App);

export { Enhanced as App };
// export default App;
