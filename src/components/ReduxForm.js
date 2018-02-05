import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required,nonEmpty,exactLength,onlyNumbers} from '../validate';
import { connect } from 'react-redux';

export class ReduxForm extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  onSubmit(value) {
    console.log('-------This ran!---------');
  }

  getErrMessage(keyName) {
    if (this.props.errorMessage) {
      return this.props.submitFailed ? <p> {keyName} : {this.props.errorMessage[keyName]} </p> : '';
    }

    return '';
  }

    render() {
      console.log(this.props);
        return (
            <div className='delivery-form'>
                <h2>Report a problem with your delivery</h2>
                <form onSubmit={this.props.handleSubmit(() => this.onSubmit())}>
                    <div className="form-input">
                    {this.getErrMessage('trackingNumber')}
                        <label htmlFor="trackingNumber">Tracking number</label>
                        <Field name="trackingNumber" value="" id="trackingNumber" component='input' validate={[required,nonEmpty,exactLength,onlyNumbers]}/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="issue">What is your issue?</label>
                        <Field name="issue" id="issue" component='select'>
                            <option value="not-delivered">My delivery hasn't arrived</option>
                            <option value="wrong-item">The wrong item was delivered</option>
                            <option value="missing-part">Part of my order was missing</option>
                            <option value="damaged">Some of my order arrived damaged</option>
                            <option value="other">Other (give details below)</option>
                        </Field>
                    </div>
                    <div className="form-input">
                        <label htmlFor="details">Give more details (optional)</label>
                        <Field name="details" id="details" component='textarea'/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
  console.log('logging reduxform');

  return {
    errorMessage: state.form.ReduxForm ? state.form.ReduxForm.syncErrors : {}
  };
}

ReduxForm = reduxForm({
    form: 'ReduxForm'
})(ReduxForm)

ReduxForm = connect(mapStateToProps)(ReduxForm);
export default ReduxForm;
