import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Modal from "./components/Modal";

export default class App extends React.Component {
	
	constructor(){
		super();
		this.state = {
			fundsData: [],
      showDetails: false,
      details: []
		};
	}

  componentDidMount(){
  	fetch("https://api.kuvera.in/api/v3/funds.json").then((response) => {
  		response.json().then((data) => {
  			this.setState({
  			fundsData: data
  		})
  		})
  	})
  }

  showDetails = (props) => {
  	const code = props.original.code;
    fetch(`https://api.kuvera.in/api/v3/funds/${code}.json`).then((response)=>{
      response.json().then((data)=> {
        this.setState({details: data, showDetails: true});
      })
    })
  }

  getColumns() {
  	return [{
  		Header: "Name", 
  		accessor: "name",
  		sortable: true,
  		width: 250,
  		filterable: true
  	},
  	{
  		Header: "Category", 
  		accessor: "category",
  		sortable: true,
  		filterable: true
  	},
  	{
  		Header: "Type", 
  		accessor: "fund_type",
  		sortable: true,
  		filterable: true
  	},
  	{
  		Header: "Plan", 
  		accessor: "plan",
  		sortable: true
  	},
  	{
  		Header: "Year_1", 
  		accessor: "returns.year_1",
  		sortable: true
  	},
  	{
  		Header: "Year_3", 
  		accessor: "returns.year_3",
  		sortable: true
  	},
  	{
  		Header: "Actions",
      width: 100,
      sortable: false,
      filterable: false,
  		Cell: props => {
  			return <button onClick={() => {
  				this.showDetails(props	)
  			}}>Show Details</button>
  		}
  	}];
  }

  closeModal = () => {
    this.setState({
      showDetails: false,
      details: []
    })
  }

  showDetailsModal = () => {
    return (<Modal closeModal={this.closeModal}>
      <div>{this.state.details.map((ele) => {
        return (<div>
          <ul>
            <li>{"short_name: " + ele.short_name}</li>
            <li>{"lump_available: "+ ele.lump_available}</li>
            <li>{"sip_available: "+ ele.sip_available}</li>
          </ul>
        </div>)
      })}</div>
    </Modal>)
  }

  render(){
    return <div>
      <ReactTable 
      columns={this.getColumns()} 
      data= {this.state.fundsData}
      defaultPageSize={100}
      noDataText={"Please wait, funds data is loading..."}
    />
    {this.state.showDetails && this.showDetailsModal()}
    </div>
  }
};
