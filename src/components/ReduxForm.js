import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required,nonEmpty,exactLength,onlyNumbers} from '../validate';


export class ReduxForm extends React.Component {
    render() {
        return (
            <div class='delivery-form'>
                <h2>Report a problem with your delivery</h2>
                <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
                    <div class="form-input">
                        <label for="trackingNumber">Tracking number</label>
                        <Field name="trackingNumber" value="" id="trackingNumber" component='input'/>
                    </div>
                    <div class="form-input">
                        <label for="issue">What is your issue?</label>
                        <Field name="issue" id="issue" component='select'>
                            <option value="not-delivered">My delivery hasn't arrived</option>
                            <option value="wrong-item">The wrong item was delivered</option>
                            <option value="missing-part">Part of my order was missing</option>
                            <option value="damaged">Some of my order arrived damaged</option>
                            <option value="other">Other (give details below)</option>
                        </Field>
                    </div>
                    <div class="form-input">
                        <label for="details">Give more details (optional)</label>
                        <Field name="details" id="details" component='textarea'/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({ 
    form: 'ReduxForm',

})(ReduxForm)