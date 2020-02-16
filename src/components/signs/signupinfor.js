import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';
//單選
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//下拉式
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

//日期的部分import Birthday from './birthday.js';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardTimePicker,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
//以上

import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            background: 'linear-gradient(45deg, #009688 30%, #b2ff59 90%)',
            //backgroundColor: theme.palette.common.white,
        },
    },

    root: {
        height: '100vh',
        margin: theme.spacing(10, 15),
        color: 'white',
        //borderRadius: 10,
        //borderColor: ,
        //background: 'linear-gradient(45deg, #00796b 30%, #00acc1 90%)',

    },


    paper: {
        marginTop: theme.spacing(8),

        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #81c784 30%, #9ad29c 90%)',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(20),
        },
    },


    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    font: {
        color: theme.palette.grey,
    },

    //下拉式
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

//radio 顏色設定
const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);




export default function SignUp() {
    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    }




    return (
        <Grid className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography className={classes.font} component="h1" variant="h5" align="center">
                    註 冊
                    </Typography>
                <div className={classes.paper}>
                    <paper>
                        <form className={classes.form} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="姓名"
                                name="name"
                                autoComplete="name"
                            //autoFocus
                            />

                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">性別</FormLabel>
                                <RadioGroup aria-label="性別" name="gender1" value={value} onChange={handleChange} >
                                    <FormControlLabel value="female" control={<GreenRadio size="small" />} label="女性" />
                                    <FormControlLabel value="male" control={<Radio size="small" />} label="男性" />
                                    <FormControlLabel value="other" control={<Radio size="small" />} label="其他" />
                                </RadioGroup>
                            </FormControl>

                            {/* <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                                <Select
                                    native
                                    value={state.age}
                                    onChange={handleChange('age')}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-simple',
                                    }}
                                >
                                    <option value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl> */}


                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                            </MuiPickersUtilsProvider> */}


                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                label="聯絡電話"
                                type="phone"
                                id="phone"
                            //autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="address"
                                label="聯絡地址"
                                type="address"
                                id="address"
                            //autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                width="50"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                href="./signup"
                            >
                                <ChevronLeftIcon />
                                上一步
                    </Button>

                            <Button
                                type="submit"
                                Width="50"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                href="./settingface"
                            >
                                <ChevronRightIcon />
                                下一步
                    </Button>

                        </form>
                    </paper>
                    <Grid align-items-xs-flex-end>
                    </Grid>

                </div>

            </Container>
        </Grid>
    );
}