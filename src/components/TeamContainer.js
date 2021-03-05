import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import EmployeeDetail from "./EmployeeDetail"
import SearchForm from "./SearchForm";
import API from "../utils/API";

class TeamContainer extends React.Component {
    state = {
      result: {},
      searchArr: {},
      search: "",
      count: 0
    };

    componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        API.search()
        .then(res => {
            console.log(res.data.results)
            this.setState({ result: res.data.results, searchArr: res.data.results });
        })
        .catch(err => console.log(err));
    }

    searchEmployees = (query) => {
        if (query === "") {
            let emptyQuery = this.state.result;
            this.setState({ searchArr: emptyQuery });
        }
        else {
            let tempArray = this.state.result.filter(person => {
                return ((person.name.first.search(new RegExp(query, "i")) !== -1) || (person.name.last.search(new RegExp(query, "i")) !== -1))
            });
            this.setState({ searchArr: tempArray });
        }
    }

    sortByName = () => {
        let sortedArray = [];
        this.setState({ count: this.state.count + 1 });
        if (this.state.count % 2) {
            sortedArray = this.state.searchArr.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
        }
        else {
            sortedArray = this.state.searchArr.sort((a, b) => a.name.last > b.name.last ? -1 : 1);
        }
        this.setState({ searchArr: sortedArray });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.searchEmployees(value);
        this.setState({
          [name]: value
        });
    };

    // Doesn't really do a thing
    handleFormSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <>
                <header>Employee Directory</header>
                <Container>
                    <Row>
                        <Col size="sm-6">
                            <SearchForm
                                value={ this.state.search }
                                handleInputChange={ this.handleInputChange }
                                handleFormSubmit={ this.handleFormSubmit }
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col size="sm-3">Image</Col>
                        <Col size="sm-3"> <a href="#" onClick={ this.sortByName }>Name</a></Col>
                        <Col size="sm-3">Phone</Col>
                        <Col size="sm-3">Email</Col>
                        <br></br>
                        <br></br>
                    </Row>
                    {
                        this.state.searchArr.length > 0
                        ? this.state.searchArr.map((employee, index) => (
                            <>
                                <div className="row flex">
                                    <EmployeeDetail
                                        picture={ employee.picture.large }
                                        title={ employee.name.first + " " +  employee.name.last }
                                        phone={ employee.phone }
                                        email={ employee.email }
                                        key={ employee.email }
                                    />
                                </div>
                                <br></br>
                            </>    
                        ))
                        : <div></div>
                    }
                </Container>
            </>   
        );
    }
}

export default TeamContainer;