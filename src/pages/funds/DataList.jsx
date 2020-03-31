import React, {Component} from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class DataList extends Component {
	
	static defaultProps = {
	    data: [],
	    emptyText: "No records found",
	    loadingMessage: "Loading...",
	    showLoadingMask: false,
	    sortAsc: true,
	    onRowClick: () => {},
	    noHeader: false,
	    isFilterable: false,
	    enableAutoMode: false
  	};

	onRowClick(index, e) {
    	// this..propsonRowClick(e, index);
    	console.log("clicked on row");
  	 }

	getColumns(){
		return [{
		       header: "Name",
		       columnKey: "firstName",
		       isResizable: false,
		       minWidth: 100,
		       maxWidth: 200,
		       width: 100,
		       cell: (props) => {
		       	 return <div>{props.firstName}</div>
		       }
		     }, {
		       columnKey: "email",
		       cell: "link",
		       header: "E-mail",
		       minWidth: 100
		     }]
		 }

	render() {
		/*const data = [{lastName: "Smith", firstName: "Bob", city: "Paris", country: "France", email: "bob@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Patrick", city: "New York", country: "USA",  email: "patrick@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Steve", city: "Redwood City", country: "USA", email: "steve@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Bill", city: "Indianapolis", country: "USA", email: "bill@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Michael", city: "Houston", country: "USA", email: "michael@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Jared", city: "Boston", country: "USA", email: "jared@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Bob", city: "Paris", country: "France", email: "bob@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Patrick", city: "New York", country: "USA",  email: "patrick@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Steve", city: "Redwood City", country: "USA", email: "steve@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Bill", city: "Indianapolis", country: "USA", email: "bill@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Michael", city: "Houston", country: "USA", email: "michael@qualys.com", postCode: "12345"},
		       {lastName: "Smith", firstName: "Jared", city: "Boston", country: "USA", email: "jared@qualys.com", postCode: "12345"}
		     ]*/
		return (<div>
				<ReactTable />
		    </div>);
	}
}

export default DataList;