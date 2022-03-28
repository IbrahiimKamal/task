import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Order from './components/Order/Order';
import MediaFile from './components/MediaFile/MediaFile';
import DonutChart from './components/DonutChart/DonutChart';

import './App.scss';

function App() {
  return (
    <div className="main-container">
      <div className="main-container__sidebar">
        <Sidebar />
      </div>
      <div className="container main-container__content">
        <Navbar />
        <div className="main-container__area">
          <div className="main-container__area-col-1">
            <div className="main-container__area-navbar">
              <h3>My Files</h3>
              <Button title="Add New" isIcon />
            </div>
            <div className="main-container__card">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="main-container__footer">
              <div className="main-container__dash">
                <Order />
              </div>
              <div className="main-container__chart"></div>
            </div>
          </div>
          <div className="main-container__area-col-2">
            <MediaFile />
            <MediaFile />
            <MediaFile />
            <MediaFile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
