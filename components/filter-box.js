import styles from './filter-box.module.css'
import Link from 'next/link' 
import Card from '@material-ui/core/Card';
import { Component } from 'react';
import { CardContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import fs from 'fs';

export default class FilterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            area: '',
            day: '',
            startTime: '',
            endTime: '',
            features: ''
        }

        this.options = {
            "days": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "hours": [
                "1am",
                "2am",
                "3am",
                "4am",
                "5am",
                "6am",
                "7am",
                "8am",
                "9am",
                "10am",
                "11am",
                "12am",
                "1pm",
                "2pm",
                "3pm",
                "4pm",
                "5pm",
                "6pm",
                "7pm",
                "8pm",
                "9pm",
                "10pm",
                "11pm",
                "12pm"
            ]
        }
         
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        console.log(event)
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log(this.props)
    }

    getSearchLink() {
        var urlLink = ['/search?'];
        var urlLinkString;
        if (this.state.area !== '') {
            urlLink.push(`area=${this.state.area}`);
        }
        if (this.state.day !== '') {
            urlLink.push(`day=${this.state.day}`);
        }
        if (this.state.startTime !== '') {
            urlLink.push(`startTime=${this.state.startTime}`);
        }
        if (this.state.endTime !== '') {
            urlLink.push(`endTime=${this.state.endTime}`);
        }
        if (this.state.features !== '') {
            urlLink.push(`features=${this.state.features}`);
        }
        urlLinkString = urlLink.join('&');
        console.log(urlLinkString);
        return urlLinkString
    }

    getMenuItems(target) {
        const menuList = [];
        for (const [ind, value] of target.entries()) {
            menuList.push(<MenuItem key={value} value={ind}>{value}</MenuItem>)
        }
        return menuList
    }

    render() {
        this.handleInputChange = this.handleInputChange.bind(this);
        return (
            <div className={styles.container}>
                <Card className={styles.parent_card}>
                    <CardContent>
                        Tell Us What You're Looking For
                    </CardContent>
                    <CardContent className={styles.menus_container}>
                        <div className={styles.menus_row}>
                            <FormControl className={styles.selector}>
                                <InputLabel id='area-label'>Area</InputLabel>
                                <Select defaultValue="" name="area" labelId="area-label" id='area-selector' onChange={this.handleInputChange}>
                                    {this.getMenuItems(this.props.inputs.areas)}
                                </Select>
                            </FormControl>
                            <FormControl className={styles.selector}>
                                <InputLabel>Day</InputLabel>
                                <Select defaultValue="" name="day" onChange={this.handleInputChange}>
                                    {this.getMenuItems(this.options.days)}
                                </Select>
                            </FormControl>
                        </div>
                        <div className={styles.menus_row}>
                            <div className={styles.timebox}>
                                <FormControl className={styles.selector}>
                                    <InputLabel>Time</InputLabel>
                                    <Select defaultValue="" name="Time" onChange={this.handleInputChange}>
                                        {this.getMenuItems(this.options.hours)}
                                    </Select>
                                </FormControl>
                            </div>
                            <FormControl className={styles.selector}>
                                <InputLabel>Features</InputLabel>
                                <Select defaultValue="" name="features" onChange={this.handleInputChange}>
                                    {this.getMenuItems(this.props.inputs.features)}
                                </Select>
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardContent>
                        <Link href={this.getSearchLink()}>
                            <Button variant="contained" color="primary">Search</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
