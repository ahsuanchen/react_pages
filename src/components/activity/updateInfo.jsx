import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from './header3.jsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
//import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//下拉式選單
import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
//import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
//以上
import Container from '@material-ui/core/Container';
import blue from '@material-ui/core/colors/blue';


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
    space: {
        marginTop: theme.spacing(5),
    },

    paper: {
        marginTop: theme.spacing(5),
        flexDirection: 'column',
        alignItems: 'center',
        background: '#dcedc8',
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(3),
            width: theme.spacing(40),
            height: theme.spacing(50),
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
        width:'40%'
    },


}));

export default function DenseAppBar() {
    const classes = useStyles();

    
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
            <Header/>
            <Grid className={classes.space}>
                <Container component="main" maxWidth="md">
                    <CssBaseline />
                    <Typography component="h1" variant="h5" align="center">
                        修改基本資訊
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
                                    variant="outlined"
                                    placeholder="請填寫活動名稱"
                                />


                                <TextField 
                                    margin="normal"
                                    width="70%"
                                    label="活動開始日期" 
                                    type="date" 
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                />

                                <TextField 
                                    margin="normal"
                                    Width='60'
                                    label="活動開始時間" 
                                    type="time" 
                                    InputLabelProps={{shrink: true,}} 
                                />

                                <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="活動結束日期" 
                                    type="date" 
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                />

                                <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="活動結束時間" 
                                    type="time" 
                                    defaultValue="07:00"
                                    InputLabelProps={{shrink: true,}} 
                                />

                                <TextField 
                                    margin="normal"
                                    width="70%"
                                    label="報名開始日期" 
                                    type="date" 
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                />

                                <TextField 
                                    margin="normal"
                                    Width='60'
                                    label="報名開始時間" 
                                    type="time" 
                                    InputLabelProps={{shrink: true,}} 
                                />


                                <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="報名結束日期" 
                                    type="date" 
                                    defaultValue={new Date().getFullYear()}
                                    InputLabelProps={{shrink: true,}} 
                                />

                                <TextField 
                                    margin="normal"
                                    Width="50%"
                                    label="報名結束時間" 
                                    type="time" 
                                    InputLabelProps={{shrink: true,}} 
                                />

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

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="地址"
                                    name="adress"
                                    variant="outlined"
                                />


                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="參考網站名稱（例：Facebook）"
                                    name="name"
                                    variant="outlined"
                                />

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="url"
                                    id="link"
                                    label="參考網站連結"
                                    name="link"
                                    variant="outlined"
                                />

                                <IconButton color="primary" aria-label="next step" href="./updatePic">
                                    <ArrowBackIcon />
                                </IconButton>
                                <IconButton color="primary" aria-label="next step" href="./updateDetails">
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
