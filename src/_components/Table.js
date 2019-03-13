import React, {Component} from 'react';
import TableHeader from './TableHeader';
import TableInput from './TableInput';
import TableBody from './TableBody';
import PageNumber from './PageNumber';


class Table extends Component {
    constructor(props){
        super(props);
        this.state={
            rows:[],
            start:0,
            p:[1],
            end:props.numRow
            
            }
    
    }
    
        // onChange= (event) =>{
           
        //     const {type, name, value, checked}=event.target;
        //     const {addNew}=this.state;
        //     if(type==="checkbox"){
                
        //         addNew[name]=checked;
        //         this.setState({addNew});
        //         // this.setState({sex:checked});
        //         // this.setState({[name]:checked})
                
        //     }
        //     else{
        //         // this.setState({[name]:value})
               
        //         addNew[name]=value;
        //         this.setState({addNew})
        //         // this.setState({addNew:{...addNew,[name]: value}})

        //     }
        //     // console.log(addNew)
        // }

        addRow=(addN) => {
            let {rows,p,start,end}=this.state;
            const {numRow}=this.props;
            // if(addN['sex']===undefined){
            //     addN['sex']=false;
            // }
            addN['id']=uuidv4();

            // addN['boolean']=changeDataBoolean;
            rows.push(addN);
            this.setState({rows})
            if((rows.length%numRow)===1 && rows.length>1){
                p.push((p.length)+1);
                start=start+numRow;
                end=start+numRow;
                this.setState({end,start});
            }

        }

        deleteRow=(i) => {
            let {rows}=this.state;
            rows=rows.filter(value=>value.id!==i);
            this.setState({rows});

         
        }
       

        saveRow=(addN,id) => {
            let {rows}=this.state;
            rows=rows.map(row=>{
                if(row['id']===id){
                   
                   return addN;
                }
                return row;
            })
            this.setState({rows});
            console.log(rows);
        }
        pageChange=(i)=>{
            const {numRow}=this.props;
            let {start,end}=this.state;
            start=(i-1)*numRow;
            end=i*numRow;
            this.setState({end,start});
        }
    render() {
        let {schema, num,numRow}=this.props;
        let {rows,start,p,end}=this.state;
        let data=[];
        end=Math.min(end,rows.length)
        data=rows.slice(start,end);
     
        return <table style={{backgroundColor:'white', padding:20, borderRadius:30, boxShadow:"5px 5px 8px 0px rgb(158, 150, 150)" }}>
            <thead>
                <tr>
                    {/*روش بدون استفاده از کامپوننت */}
                    {/* {Object.keys(schema).map(key=>{
                        return <th style={{padding:'30px'}}>{schema[key].displayName}</th>
                    })} */}

                    {Object.keys(schema).map(_key=>{
                        return <TableHeader key={_key} displayName={schema[_key].displayName}/>
                    })}
                    <th>Action</th>
                    </tr>
                    <TableInput schema={schema} add={this.addRow}/>
                    {/* <tr> */}
                    {/* {Object.keys(schema).map(_key=>{ */}
                        {/* return <TableInput key={_key} name={_key}  value={this.state.addNew[_key] || ''} displayName={schema[_key].displayName} type={schema[_key].type} required={schema[_key].required}/> */}
                    {/*  })} */}
                   
                        {/* </tr> */}
                </thead>
                <tbody>
                       
                       {data.map(row => {
                            return <TableBody key={row.id} row={row} schema={schema} delet={this.deleteRow} save={this.saveRow}/>

                           
                      
                       })}
                    </tbody>
                    {/* <div className="paginate">
                        {
                            
                           p.map(pag=>{
                            //    console.log(pag+"  "+start/numRow + "  " +start);
                               if(p.length>1){
                                // return <PageNumber i={pag}  pageChange={this.pageChange} num={num}/>
                                   if(pag<=((start)/numRow)+num)
                                   {
                                   
                                    return <PageNumber i={pag}  pageChange={this.pageChange} num={num}/>

                                   }
                                // else if(pag>((start)/numRow)-(num) )
                                // {
                                //     return <PageNumber i={pag}  pageChange={this.pageChange} num={num}/>

                                // }
                                

                                else
                                return "";

                               }
                           })
                        }
            </div> */}
            </table>
           
    }
    
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }
// const TableHeader = ({displayName}) => {
//         return <th>
//             {displayName}
//         </th>
// }

// const TableInput = ({type, displayName}) => {
//     // switch(type){
//     //     case String:
//     //     return <td><input type="text" placeholder={`${displayName}`}/></td>

//     // }
// }

export default Table;