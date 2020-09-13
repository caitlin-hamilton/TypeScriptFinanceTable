import * as React from 'react';
import HeaderSpecialColumn from './Header';


interface ArrowLogic {
  assetClass: boolean;
  price: boolean;
  ticker: boolean;
}

interface State {
  arrowLogic: ArrowLogic;
};

interface Props {
}

export default class Table extends React.Component<Props, State> {
  state: State = {
    arrowLogic: {
      assetClass: false,
      price: false,
      ticker: false,
    }
  };

  sortAttributeName(attributeName: string){
    console.log(attributeName)
  }

  render () {
    return (
      <div>
        <HeaderSpecialColumn sortIcon="DOWN" attributeName="hello" sortAttribute={() => {this.sortAttributeName("hello")}}/>
      </div>
    );
  }
}