import React, {Component} from 'react';

class TableInput extends Component {
        state={
          addN:{}
        }
        onChange=(event)=>{
          let {addN}=this.state;
          const {type,value,name,checked}=event.target;
          if(type==="checkbox"){
            addN[name]=checked;
            this.setState({addN});
          }
          else{
            addN[name]=value;
            this.setState({addN});
          }
        }
        add=()=>{
          const {addN}=this.state;
          const {add}=this.props;
          add(addN);
          this.setState({addN:{}});
        }
            render() {
              const {schema}=this.props;
              const {addN}=this.state;
              return <tr>
                {Object.keys(schema).map(sch=>{
                  if (schema[sch].type===String)  
                    return <td ><input name={sch} value={addN[sch] || ''} type="text" placeholder={`${schema[sch].displayName} ${schema[sch].required?'*':''}`} onChange={this.onChange}/></td>
                   if(schema[sch].type===Number)
                    return <td ><input name={sch} value={addN[sch] || ''} type="number" placeholder={`${schema[sch].displayName} ${schema[sch].required?'*':''}`} onChange={this.onChange}/></td>
                  if(schema[sch].type===Boolean)
                    return <td ><input name={sch} checked={addN[sch] || false} type="checkbox" onChange={this.onChange}/></td>
                })}
              <td><button onClick={this.add}>Add</button></td></tr>
              
                
            }
           
       
    }



export default TableInput;