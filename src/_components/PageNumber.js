import React, {Component} from 'react';

class PageNumber extends Component {
    show=()=>{
        const { i,pageChange}=this.props;
        pageChange(i);
        
    }
render(){
    const {i}=this.props;
    return <button className="pagin" onClick={this.show}>{i}</button>
}
}

export default PageNumber;