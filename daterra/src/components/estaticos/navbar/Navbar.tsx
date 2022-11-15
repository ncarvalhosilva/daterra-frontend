import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Badge, Box, Button, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            }
        },
    },
    )
);

function Navbar() {

    const classes = useStyles();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuário deslogado", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "light",
          progress: undefined,
        });
        navigate("/login");
      }

      var navbarComponent;

    if (token !==''){
        navbarComponent = (<AppBar position="static">
        <Toolbar variant="dense" className='corFundo'  >
            <Box className={classes.title}>
                <Box display="flex" justifyContent="space-between">
                    <Toolbar>
                        <Link to='/home' className='texto-decorator-none'><img src="https://i.imgur.com/vUHcakQ.png" alt="Logotipo" height={50} width={100} /></Link>

                    </Toolbar>
                </Box>

            </Box>
            <Box className='navbarbox1'>

                <Box mx={1} className='cursor'>
                    <Typography variant="h6" className="corTexto tamTexto">
                        <Link to='/about' className='text-decorator-none'>
                            Quem Somos
                        </Link>
                    </Typography>
                </Box>

                <Divider orientation="vertical" flexItem />

                {/* <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                    <Typography variant="h6" className="corTexto tamTexto">
                        Como Comprar |
                    </Typography>
                </Box> */}

                <Box mx={1} className='cursor'>
                    <Typography className="corTexto tamTexto">
                        Meu Perfil
                    </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box mx={1} className='cursor'>
                    <Typography className="corTextoProdutos tamTexto">
                        Todos Produtos
                    </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                {/* <Box mx={1} className='cursor' style={{ paddingRight: "1rem" }}>
                    <Typography variant="h6" className="corTexto tamTexto">
                        Cadastrar Produto |
                    </Typography>
                </Box> */}

                <Link to='/login' className='text-decorator-none'>
                    <Box display="flex" mx={1} className='cursor'>
                        <Typography className="corTexto tamTexto">
                            Sair
                        </Typography>
                    </Box>
                </Link>

            </Box>
            <Box className='cursor'>
                <Toolbar>
                    <Badge showZero={true} badgeContent={0} color='primary' >
                        <img src="https://i.imgur.com/OQRGLtB.png" alt="sacola de compras" height={40} width={40} />
                    </Badge>
                </Toolbar>
            </Box>
        </Toolbar>
    </AppBar>

        )
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}


export default Navbar;

