import React, { Component } from "react";
import API from "../../utils/API";

const schoolsMap = [
    {
        name: "U of I Urbana-Champaign",
        count: 38
    },
    {
        name: "Illinois Institute of Technology",
        count: 32
    },
    {
        name: "Walter Payton College Prep",
        count: 29
    },
    {
        name: "Northside College Prep High School",
        count: 27
    },
    {
        name: "Adlai E. Stevenson High School",
        count: 26
    },
    {
        name: "Illinois Math and Science Academy",
        count: 24
    },
    {
        name: "Young Magnet High School",
        count: 23
    },
    {
        name: "New Trier Township High School",
        count: 23
    },
    {
        name: "Hindsdale Central High School",
        count: 22
    },
    {
        name: "Glenbrook South High School",
        count: 17
    },
    {
        name: "Jones College Prep High School",
        count: 16
    },
    {
        name: "Lane Tech Prep High School",
        count: 15
    }
]

class SchoolsBox extends Component {

    state = {
		schools: schoolsMap
    };

    // componentDidMount() {
    //     this.loadSchools();

    // }

    // loadSchools = () => {
    //     API.getActschools()
    //         .then(res => {
    //         console.log(res)
    //         this.setState({ schools: res.data  || []  })
    //         })
    //         .catch(err => console.log(err));
    // };

    renderSchools(){
        return (
            this.state.schools.map(function(school, i){
                return (
                    <li key = {i}>{school.name} <a>{school.count}</a></li>
                )
            })
        )
    }

    render () {
        return (
            <div id="schoolsBox" className="animated fadeInUp col-sm-6">
                <div className="boxContent">
                    <h3>SCHOOLS</h3>
                    <div id="schoolRankings" className="container-fluid">
                        <h3>School</h3> <h4>User Count</h4>
                        <ol>
                            {this.renderSchools()}
                        </ol>
                    </div>
                </div>
            </div>
        )
    };
};

export default SchoolsBox;
