import React from './node_modules/react';
import { makeStyles, withStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import IconButton from './node_modules/@material-ui/core/IconButton';
import TextField from './node_modules/@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ChevronLeftIcon from './node_modules/@material-ui/icons/ChevronLeft';
import ArrowBackIcon from './node_modules/@material-ui/icons/ArrowBack';
import ArrowForwardIcon from './node_modules/@material-ui/icons/ArrowForward';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import Grid from './node_modules/@material-ui/core/Grid';
//下拉式選單
import InputLabel from './node_modules/@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormControl from './node_modules/@material-ui/core/FormControl';
import FormHelperText from './node_modules/@material-ui/core/FormHelperText';
//import Select from '@material-ui/core/Select';
import NativeSelect from './node_modules/@material-ui/core/NativeSelect';
import InputBase from './node_modules/@material-ui/core/InputBase';
//以上
import Container from './node_modules/@material-ui/core/Container';


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    paper: {
        marginTop: theme.spacing(8),

        flexDirection: 'column',
        alignItems: 'center',
        background: 'lightgrey',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(5),
            //margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(40),
        },
    },


    form: {
        width: '100%',
        height: theme.spacing(1),


    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    margin: {
        margin: theme.spacing(2),
    },


}));

export default function DenseAppBar() {
    const classes = useStyles();


    const [startdate, setStartDate] = React.useState('');
    const handleChange1 = event => {
        setStartDate(event.target.value);
    };

    const [starttime, setStartTime] = React.useState('');
    const handleChange2 = event => {
        setStartTime(event.target.value);
    };

    const [enddate, setEndDate] = React.useState('');
    const handleChange3 = event => {
        setEndDate(event.target.value);
    };

    const [endtime, setEndTime] = React.useState('');
    const handleChange4 = event => {
        setEndTime(event.target.value);
    };

    const [city, setCity] = React.useState('');
    const handleChange5 = event => {
        setCity(event.target.value);
    };

    const [area, setArea] = React.useState('');
    const handleChange6 = event => {
        setArea(event.target.value);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        返回首頁
          </Typography>
                </Toolbar>
            </AppBar>
            <Grid >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Typography component="h1" variant="h5" align="center">
                        基本資訊
                    </Typography>
                    <div className={classes.paper}>
                        <paper>
                            <form className={classes.form} noValidate>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="活動名稱"
                                    name="name"
                                    autoFocus
                                    variant="outlined"
                                    placeholder="請填寫活動名稱"
                                />


                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                                    <FormHelperText>開始日期</FormHelperText>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={startdate}
                                        onChange={handleChange1}
                                        input={<BootstrapInput />}
                                    >
                                        <option value="" />
                                        <option value={1}>01/11</option>
                                        <option value={2}>01/12</option>
                                        <option value={3}>01/13</option>
                                    </NativeSelect>

                                </FormControl>

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                                    <FormHelperText>開始時間</FormHelperText>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={starttime}
                                        onChange={handleChange2}
                                        input={<BootstrapInput />}
                                    >
                                        <option value="" />
                                        <option value={1}>01:00</option>
                                        <option value={2}>02:00</option>
                                        <option value={3}>03:00</option>
                                    </NativeSelect>

                                </FormControl>

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                                    <FormHelperText>結束日期</FormHelperText>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={enddate}
                                        onChange={handleChange3}
                                        input={<BootstrapInput />}
                                    >
                                        <option value="" />
                                        <option value={1}>01/12</option>
                                        <option value={2}>01/13</option>
                                        <option value={3}>01/14</option>
                                    </NativeSelect>

                                </FormControl>

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                                    <FormHelperText>結束時間</FormHelperText>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={endtime}
                                        onChange={handleChange4}
                                        input={<BootstrapInput />}
                                    >
                                        <option value="" />
                                        <option value={1}>01:00</option>
                                        <option value={2}>02:00</option>
                                        <option value={3}>03:00</option>
                                    </NativeSelect>

                                </FormControl>

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                                    <FormHelperText>縣市</FormHelperText>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={city}
                                        onChange={handleChange5}
                                        input={<BootstrapInput />}
                                    >
                                        <option value="" />
                                        <option value={1}>台北市</option>
                                        <option value={2}>新北市</option>
                                        <option value={3}>桃園市</option>
                                        <option value={4}>台中市</option>
                                        <option value={5}>台南市</option>
                                        <option value={6}>高雄市</option>
                                    </NativeSelect>

                                </FormControl>

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
                                    <FormHelperText>區/鄉/鎮</FormHelperText>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        value={area}
                                        onChange={handleChange6}
                                        input={<BootstrapInput />}
                                    >
                                        <option value="" />
                                        <option value={1}>新莊區</option>
                                        <option value={2}>板橋區</option>
                                        <option value={3}>三重區</option>
                                    </NativeSelect>

                                </FormControl>

                                <FormControl className={classes.margin}>

                                    <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
                                    <FormHelperText>地址</FormHelperText>
                                    <BootstrapInput id="demo-customized-textbox" />

                                </FormControl>


                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="參考網站名稱（例：Facebook）"
                                    name="phone"
                                    autoFocus
                                    variant="outlined"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="參考網站連結"
                                    name="phone"
                                    autoFocus
                                    variant="outlined"
                                />



                                <IconButton color="primary" aria-label="next step" href="./signup.js">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./signup.js">
                                    <ArrowForwardIcon />
                                </IconButton>

                            </form>
                        </paper>
                        <Grid align-items-xs-flex-end>
                        </Grid>

                    </div>

                </Container>
            </Grid>
        </div>



    );
}
