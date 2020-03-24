import React from './node_modules/react';
import Button from './node_modules/@material-ui/core/Button';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import TextField from './node_modules/@material-ui/core/TextField';
import Typography from './node_modules/@material-ui/core/Typography';
import Grid from './node_modules/@material-ui/core/Grid';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Container from './node_modules/@material-ui/core/Container';



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
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography className={classes.font} component="h1" variant="h5" align="center">
                    無 法 登 入 ？
                    </Typography>
                <div className={classes.paper}>
                    <paper>
                        <Typography variant="subtitle1" gutterBottom align="center">
                            abc123, 請重新設定密碼。
                    </Typography>
                        <form className={classes.form} noValidate>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="輸入密碼"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="checkpassword"
                                label="再次輸入密碼"
                                type="password"
                                id="checkpassword"
                                autoComplete="current-password"
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                href="./signinside"
                            >
                                完成設定
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