import React, {Component} from 'react';

class TableBody extends Component {
   
    state={
        editMode: false,
        addN:this.props.row
    }
   
    d=()=>{
        const {delet,row}=this.props;
        delet(row.id);
    }
    e=()=>{
        let {editMode}=this.state;
        editMode=!editMode;
        this.setState({editMode});
    }

   ch=(event)=>{
        const {addN}=this.state;
        const {type, name,checked, value}=event.target;
        if(type==="checkbox"){
            addN[name]=checked;
            this.setState({addN});
            
        
        }
        else{
            
            this.setState({addN:{...addN,[name]: value}});
           
        }
    }

    s=()=>{
        let {addN,editMode}=this.state;
        editMode=!editMode;
        this.setState({editMode});
        const {save}=this.props;
        save(addN,addN['id']);

    }
       render() {
        const {row, schema, onChange}=this.props;
        let {editMode,addN}=this.state;
       
       
        if(!editMode){
           
            return <tr>{Object.keys(schema).map(sch=>{
                if(schema[sch].type===Boolean){
                          return <td><input type="checkbox" checked={row[sch]} onChange={onChange}/></td>
                      }

                      else if(sch!=='id'){
                          return <td>{row[sch]}</td>
                      }
               
            
           })}<td><button style={{marginRight:'7px' ,marginBottom:'7px'}} onClick={this.d}>Delete</button><button onClick={this.e}>Edit</button></td></tr>
        }
        else {
            return <tr>{
                   
                        Object.keys(schema).map(sch=>{
                            if(schema[sch].type===Boolean){
                                return <td><input type="checkbox" name={sch} checked={addN[sch]} onChange={this.ch}/></td>
                            }  
                            else if(schema[sch].type===Number){
                                    return <td><input type="number" name={sch} value={addN[sch]} onChange={this.ch}/></td>
                                }
                                else{
                        
                                    return <td><input type="string" name={sch} value={addN[sch]} onChange={this.ch}/> </td>
                                }
                        })
                     
                   
                  
               
                }<td><button style={{marginRight:'7px' ,marginBottom:'7px'}} onClick={this.d}>Delete</button><button onClick={this.s}>Save</button></td></tr>
        }
        }
    
    }


export default TableBody;