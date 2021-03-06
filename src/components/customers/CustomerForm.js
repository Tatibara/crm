import React from 'react';
import moment from 'moment';
//import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);

    this.createdAt = moment();

    this.state = {
      number: props.customer ? props.customer.number : this.createdAt.format('YY-MM-DD'),
      createdAt: props.customer ? moment(props.customer.createdAt) : this.createdAt,
      hourlyRate: props.customer ? (props.customer.hourlyRate / 100).toString() : '80,00',
      name: props.customer ? props.customer.name : '',
      streetName: props.customer ? props.customer.streetName : '',
      streetNumber: props.customer ? props.customer.streetNumber : '',
      zip: props.customer ? props.customer.zip : '',
      city: props.customer ? props.customer.city : '',
      error: '',
      datePickerFocused: false
    };
  }

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.number || !this.state.hourlyRate || !this.state.name) {
      this.setState(() => ({
        error: 'Error! The fields Number, Name and Hourly Rate are required'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      console.log('streeName on Submit', this.state.streetName);
      this.props.onSubmit({
        number: this.state.number,
        createdAt: this.state.createdAt.valueOf(),
        hourlyRate: parseFloat(this.state.hourlyRate.replace(',', '.'), 10) * 100,
        name: this.state.name,
        streetName: this.state.streetName,
        streetNumber: this.state.streetNumber,
        zip: this.state.zip,
        city: this.state.city
      });
    }
  };

  handleChangeNumber = e => {
    e.persist();
    this.setState(() => ({ number: e.target.value }));
  };

  handleChangeDatePicker = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  handleChangeDatePickerFocus = ({ focused }) => {
    this.setState(() => ({ datePickerFocused: focused }));
  };

  handleChangeName = e => {
    e.persist();
    this.setState(() => ({ name: e.target.value }));
  };

  handleChangeStreetName = e => {
    e.persist();
    console.log('streetName', e.target.value);
    this.setState(() => ({ streetName: e.target.value }));
  };

  handleChangeStreetNumber = e => {
    e.persist();
    this.setState(() => ({ streetNumber: e.target.value }));
  };

  handleChangeZip = e => {
    e.persist();
    this.setState(() => ({ zip: e.target.value }));
  };

  handleChangeCity = e => {
    e.persist();
    this.setState(() => ({ city: e.target.value }));
  };

  handleChangeHourlyRate = e => {
    const hourlyRate = e.target.value;
    if (!hourlyRate || hourlyRate.match(/^\d+(,\d{0,2})?$/)) {
      this.setState(() => ({ hourlyRate }));
    }
  };

  /* const customerEx = {
  id: 'jhhghjghjg65765756757',
  hourlyRate: '7000'
  number: '18-05-24',
  name: 'Service Partner ONE GmbH',
  streetName: 'Winsstraße 62',
  streetNumber: '62',
  zip: '10405',
  city: 'Berlin'
}; */

  render() {
    return (
      <div>
        <h3>Customer Form</h3>
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <div>{this.state.error}</div>}
          <div className="form__group">
            <label htmlFor="number" className="form__label">
              Number:
              <input
                type="text"
                id="number"
                value={this.state.number}
                onChange={this.handleChangeNumber}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="createdAt" className="form__label">
              Created at:
              <SingleDatePicker
                isRTL
                date={this.state.createdAt} // momentPropTypes.momentObj or null
                onDateChange={this.handleChangeDatePicker} // PropTypes.func.isRequired
                focused={this.state.datePickerFocused} // PropTypes.bool
                onFocusChange={this.handleChangeDatePickerFocus} // PropTypes.func.isRequired
                id="createdAt" // PropTypes.string.isRequired,
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="hourlyRate" className="form__label">
              Hourly Rate:
              <input
                type="text"
                id="hourlyRate"
                value={this.state.hourlyRate}
                onChange={this.handleChangeHourlyRate}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="name" className="form__label">
              Name:
              <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="streetName" className="form__label">
              Street Name:
              <input
                id="streetName"
                type="text"
                value={this.state.streetName}
                onChange={this.handleChangeStreetName}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="streetNumber" className="form__label">
              Street Number:
              <input
                id="streetNumber"
                type="text"
                value={this.state.streetNumber}
                onChange={this.handleChangeStreetNumber}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="zip" className="form__label">
              Zip:
              <input
                id="zip"
                type="text"
                value={this.state.zip}
                onChange={this.handleChangeZip}
              />
            </label>
          </div>
          <div className="form__group">
            <label htmlFor="city" className="form__label">
              City:
              <input
                id="city"
                type="text"
                value={this.state.city}
                onChange={this.handleChangeCity}
              />
            </label>
          </div>
          <div className="form__group">
            <button className="btn btn--green">Add Customer</button>
          </div>
        </form>
      </div>
    );
  }
}
