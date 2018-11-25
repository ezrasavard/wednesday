import * as React from 'react';
import { SingleDatePicker } from 'react-dates';
import * as moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

interface IDateNavBarProps {};

interface IDateNavBarState {
    date: moment.Moment | null,
    focusedInput: {
        focused: boolean | null,
    },
};

export default class DateNavBar extends React.Component<IDateNavBarProps, IDateNavBarState> {
    constructor(props: IDateNavBarProps) {
        super(props);
        this.state = {
            date: moment(),
            focusedInput: {focused: false},
        }
    }

    public render() {
        return (
            <div className='DateNavBar'>
                <div onClick={() => console.log('prev!')}>PREV</div>
                <SingleDatePicker
                        id='1'
                        date={this.state.date}
                        focused={this.state.focusedInput.focused as boolean}
                        onDateChange={(date: moment.Moment | null) => this.setState({date})}
                        onFocusChange={focusedInput => this.setState({focusedInput})}
                        numberOfMonths={1}
                        enableOutsideDays
                    />
                <div onClick={() => console.log('next!')}>NEXT</div>
            </div>
        )

    }
}
