import './node_modules/date-fns';
import React from './node_modules/react';
import Grid from './node_modules/@material-ui/core/Grid';
import DateFnsUtils from './node_modules/@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from './node_modules/@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date().getDate);

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}