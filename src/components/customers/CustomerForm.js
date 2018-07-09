import React from 'react';

export default class CustomerForm extends React.Component {
  state = {
    number: '18-05-24',
    hourlyRate: '70,00',
    name: 'Service Partner ONE GmbH',
    streetName: 'Winsstraße',
    streetNumber: '62',
    zip: '10405',
    city: 'Berlin'
  };

  handleChangeNumber = e => {
    e.persist();
    this.setState(() => ({ number: e.target.value }));
  };

  handleChangeName = e => {
    e.persist();
    this.setState(() => ({ name: e.target.value }));
  };

  handleChangeStreetName = e => {
    e.persist();
    this.setState(() => ({ streetName: e.target.valute }));
  };

  handleChangeStreetNumber = e => {
    e.persist();
    this.setState(() => ({ streetNumber: e.target.valute }));
  };

  handleChangeZip = e => {
    e.persist();
    this.setState(() => ({ zip: e.target.valute }));
  };

  handleChangeCity = e => {
    e.persist();
    this.setState(() => ({ city: e.target.valute }));
  };

  handleChangeHourlyRate = e => {
    const hourlyRate = e.target.value;
    if (hourlyRate.match(/^\d+(,\d{0,2})?$/)) {
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
        <form className="form">
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
                onFocus
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
        </form>
      </div>
    );
  }
}
