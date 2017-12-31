import React, { Component } from "react";
import API from "../../utils/API";
import Map from "./LocationBox/LocationMap";


const countriesArr = [
    {name: 'USA', count: '4952'},
    {name: 'UK', count: '959'}, 
    {name: 'Canada', count: '694'}, 
    {name: 'Australia', count: '482'}, 
    {name: 'France', count: '473'}, 
    {name: 'China', count: '403'},  
    {name: 'Japan', count: '307'},  
    {name: 'Brazil', count: '298'}, 
    {name: 'Germany', count: '187'}, 
    {name: 'South Korea', count: '169'},
    {name: 'Italy', count: '162'}, 
    {name: 'South Africa', count: '85'}, 
]

class LocationBox extends Component {

    state = {
		countries: countriesArr
    };

    //  componentDidMount() {
    //     this.loadLocation();

    // }

    // loadLocation = () => {
    //     API.getLocation()
    //         .then(res => {
    //         console.log(res.data)
    //         this.setState({ countries: res.data || [] })
    //         })
    //         .catch(err => console.log(err));
    // };



     renderLocation(){
        return (
            this.state.countries.map(function(countries, i ){
                return (
                    <li key= {i}>{countries.name} <a>{countries.count}</a></li>
                )
            })
        )
    }



    render () {
        return (
            <div id="locationBox" className="animated fadeInUp col-sm-12">
                <div className="boxContent">
                    <h3>USER LOCATIONS</h3>
                    <div id="locationContent">
                        <div id="countryRankings">
                            <h3>Location</h3> <h4>User Count</h4>
                            <ol>
                                {this.renderLocation()}
                            </ol>
                        </div>
                        <Map />
                    </div>
                </div>
            </div>
        )
    };
};

export default LocationBox;
