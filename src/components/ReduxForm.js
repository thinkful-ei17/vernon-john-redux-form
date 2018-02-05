import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required,nonEmpty,exactLength,onlyNumbers} from '../validate';


export default class Form extends React.Component {
    render() {
        return (
            <div class='delivery-form'>
                <h2>Report a problem with your delivery</h2>
                <form>
                    <div class="form-input">
                        <label for="trackingNumber">Tracking number</label>
                        <input name="trackingNumber" value="" id="trackingNumber">
                        </input>
                    </div>
                    <div class="form-input">
                        <label for="issue">What is your issue?</label>
                        <select name="issue" id="issue">
                            <option value="not-delivered">My delivery hasn't arrived</option>
                            <option value="wrong-item">The wrong item was delivered</option>
                            <option value="missing-part">Part of my order was missing</option>
                            <option value="damaged">Some of my order arrived damaged</option>
                            <option value="other">Other (give details below)</option>
                        </select>
                    </div>
                    <div class="form-input">
                        <label for="details">Give more details (optional)</label>
                        <textarea name="details" id="details"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}