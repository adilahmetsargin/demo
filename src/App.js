import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import DataList from "./HomePage";

class App extends React.Component {
  state = {
    datas: [],
    searchQuery: "",
    searchAllQuery: "",
  };

  //Json get with axios
  async componentDidMount() {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ datas: response.data });
  }

  searchData = (e) => {
    this.setState({ searchQuery: e.target.value, searchAllQuery: "" });
  };

  filteredAllData = (e) => {
    this.setState({ searchAllQuery: e.target.value, searchQuery: "" });
  };
  render() {
    let filteredData = this.state.datas.filter((data) => {
      return this.state.searchQuery.length > 0
        ? data.capital
            .toLowerCase()
            .includes(this.state.searchQuery.toLowerCase())
        : data.capital
            .toLowerCase()
            .includes(this.state.searchAllQuery.toLowerCase()) ||
            data.name
              .toLowerCase()
              .includes(this.state.searchAllQuery.toLowerCase()) ||
            data.region
              .toLowerCase()
              .includes(this.state.searchAllQuery.toLowerCase());
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar
              placeholder={"Search Capital"}
              searchDataProp={this.searchData}
            />
            <SearchBar
              placeholder={"Search All"}
              searchDataProp={this.filteredAllData}
            />
          </div>
        </div>
        <DataList datas={filteredData} />
      </div>
    );
  }
}

export default App;
