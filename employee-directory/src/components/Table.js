import React, { Component } from "react";
import DataTable from "./DateTable";
import Nav from "./Nav";
import API from "../utils/API";

class Table extends Component {
  state = {
    users: [],
    order: "descend",
    filteredUsers: [],
  };

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" },
  ];

  sortingHandler = (heading) => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend",
      });
    } else {
      this.setState({
        order: "descend",
      });
    }

    const compare = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
            console.log(a[heading].first.localeCompare(b[heading].first))
          return a[heading].first.localeCompare(b[heading].first);
        } else {
            if ( a[heading] < b[heading]) {
                return -1;
              }
              if ( a[heading] > b[heading]) {
                return 1;
              }

              return 0;
          
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
            if ( a[heading] > b[heading]) {
                return -1;
              }
              if ( a[heading] < b[heading]) {
                return 1;
              }

              return 0;
        }
      }
    };
    const sortedUsers = this.state.filteredUsers.sort(compare);
    this.setState({ filteredUsers: sortedUsers });
  };

  searchHandler = (e) => {
    console.log(e.target.value);
    const filter = e.target.value;
    const filteredList = this.state.users.filter((item) => {
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  };

  componentDidMount() {
    API.getUsers().then((results) => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <Nav searchHandler={this.searchHandler} />
        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
            sortingHandler={this.sortingHandler}
          />
        </div>
      </>
    );
  }
}

export default Table;
