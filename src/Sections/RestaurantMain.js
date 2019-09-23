import React from 'react';
import MainScreen from '../Screens/Main'
import SummaryBox from '../Components/SummaryBox';


class SaleSummary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todayValue: 0,
      yesterdayValue: 0,
      aWeekValue:0,
      aMonthValue: 0
    }
  }
  render() {
    return(
      <div>
        <div className="row">
          <div className="col-12 mt-3">
            <h3>ยอดขาย</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>วันนี้</p>
          </div>
          <div className="col-6 text-right">
            <p>{this.state.todayValue} บาท</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>เมื่อวาน</p>
          </div>
          <div className="col-6 text-right">
            <p>{this.state.yesterdayValue} บาท</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>1 อาทิตย์</p>
          </div>
          <div className="col-6 text-right">
            <p>{this.state.aWeekValue} บาท</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>1 เดือน</p>
          </div>
          <div className="col-6 text-right">
            <p>{this.state.aMonthValue} บาท</p>
          </div>
        </div>
      </div>
    )
  }
}

const RestaurantMain = () => {
  return(
    <MainScreen>
      <div className="col-sm col-12">
        <div className="row">
          <div className="col-12 text-right">
            <div className="btn-group">
              <button className="btn btn-link">รายการอาหาร</button>
              <button className="btn btn-link">บัญชี Staffs</button>
            </div>
          </div>
        </div>
        <div className="row">
      <SummaryBox label="ยอดขาย" backgroundColor='linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%)'>
        <SaleSummary />
      </SummaryBox>
      <SummaryBox label="จำนวนลูกค้า" backgroundColor='linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)' />
      <SummaryBox label="โต๊ะ" backgroundColor='linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%)' />
      <div className="col-3">
        <div className="col-12 my-3 shadow rounded text-center" style={{backgroundImage: 'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)', height: '230px'}}>
          <h3 style={{paddingTop: '70px'}}>Average: </h3>
          <p>504 บาท/คน</p>
        </div>
      </div>
      <SummaryBox label="Staffs" backgroundColor='linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)' />
      </div>
    </div>
    </MainScreen>
  )
}

export default RestaurantMain;
