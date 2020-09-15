import * as React from 'react';
import HeaderSpecialColumn from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputRow from './InputRow'
import {ASSET_CLASS_SORT_ORDER} from './config'


interface ArrowLogic {
  [index: string]: any ;
  assetClass: string;
  price: string;
  ticker: string;
}

interface State {
  arrowLogic: ArrowLogic;
  inputData: any
};

interface Props {
  getTableData: any
}

export default class Table extends React.Component<Props, State> {
  state: State = {
    inputData: [],
    arrowLogic: {
      assetClass: 'NEUTRAL',
      price: 'NEUTRAL',
      ticker: 'NEUTRAL'
    }
  };

  componentDidMount(){
    let inputData = this.props.getTableData();
    this.setState({
      inputData: inputData
    })
  }

  getArrowLogic = (attribute: string, direction: string) => {
    let localArrowLogic = {...this.state.arrowLogic}
    Object.keys(localArrowLogic).forEach(v => localArrowLogic[v] = 'NEUTRAL')
    localArrowLogic[attribute] = direction;
    console.log(localArrowLogic)
    return localArrowLogic;
  }

  sortAttributeDescendingOrder = (attribute: string) => {
    let data = [].concat(this.state.inputData).sort((a: any, b: any) => a[attribute] >= b[attribute] ? 1 : -1)
    this.setState({
        inputData: data,
        arrowLogic: this.getArrowLogic(attribute, "DOWN"),
    })
  }

  sortAttributeAscendingOrder = (attribute: string) => {
    let data = [].concat(this.state.inputData).sort((a: any, b: any) => a[attribute] < b[attribute] ? 1 : -1)
    this.setState({
        inputData: data,
        arrowLogic: this.getArrowLogic(attribute, "UP"),
    })

  }

  sortAssetClassDescendingOrder = (attribute: string) => {
    let data = [].concat(this.state.inputData).sort((a: any, b: any) => ASSET_CLASS_SORT_ORDER[a.assetClass] - ASSET_CLASS_SORT_ORDER[b.assetClass])
    this.setState({
      inputData: data,
      arrowLogic: this.getArrowLogic(attribute, "DOWN"),
    })
  }

  sortAssetClassAscendingOrder = (attribute: string) => {
    let data = [].concat(this.state.inputData).sort((a: any, b: any) => ASSET_CLASS_SORT_ORDER[b.assetClass] - ASSET_CLASS_SORT_ORDER[a.assetClass])
    this.setState({
      inputData: data,
      arrowLogic: this.getArrowLogic(attribute, "UP"),
    })
  }

  sortAttribute = (attribute: string) => {

    if ((this.state.arrowLogic[attribute]) === "NEUTRAL" || this.state.arrowLogic[attribute] === "UP"){
      console.log('descending')
      if( attribute === 'assetClass'){
        console.log('descending asset')
        this.sortAssetClassDescendingOrder(attribute)
      }
      else {
        console.log('descending attr')
        this.sortAttributeDescendingOrder(attribute)}
      }
      
    else if (this.state.arrowLogic[attribute] === "DOWN"){
      if(attribute === 'assetClass'){
        console.log('descending asset')
        this.sortAssetClassAscendingOrder(attribute)
      }
      else {
        console.log('ascending attr')
        this.sortAttributeAscendingOrder(attribute)
      }
    }
  }


  render () {
    console.log(this.state.arrowLogic['price'])
    return (
      <div>
        <table className="table table-bordered">
          <tr>
            <HeaderSpecialColumn sortAttribute={() => {this.sortAttribute('assetClass')}} attributeName={'AssetClass'} sortIcon={this.state.arrowLogic['assetClass']}/>
            <HeaderSpecialColumn sortAttribute={() => {this.sortAttribute('price')}} attributeName={'price'} sortIcon={this.state.arrowLogic['price']}/>
            <HeaderSpecialColumn sortAttribute={() => {this.sortAttribute('ticker')}} attributeName={'ticker'} sortIcon={this.state.arrowLogic['ticker']}/>
          </tr>
        <tbody>
          {this.state.inputData.map((item: any, index: number) => 
            <InputRow assetClass={item.assetClass} price={item.price} ticker={item.ticker} key={index}/>)}
        </tbody>
        </table>
      </div>
    );
  }
}