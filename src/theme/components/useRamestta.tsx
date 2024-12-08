import React, { useState, useRef } from 'react';
import { Popover, Typography, Box, styled, Grid } from '@mui/material';
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import bnrlogo from '../../icons/rama/bnrlogo.svg'

const Additional_Links = [
  {
    id: 1,
    Title: 'PoS Bridge',
    href: 'https://ramaswap.com/#/swap',
    project:"Live",
    img: bnrlogo,
     color:"#00FF00"
  },
  {
    id: 2,
    Title: 'Plasma Bridge',
    href: '/coming-soon',
    project:"Coming Soon",
    img: bnrlogo,
     color:"#08A2A3"
  },
  {
    id: 3,
    Title: 'Swap',
    href: 'https://ramaswap.com/#/swap',
    project:"Live",
    img: bnrlogo,
     color:"#00FF00"
  },
  {
    id: 4,
    Title: 'Become a Validator',
    href: 'https://validator.ramestta.com/validators',
    project:"Live",
    img: bnrlogo,
     color:"#00FF00"
  },
  {
    id: 5,
    Title: 'Become a Delegator',
    href: 'https://validator.ramestta.com/delegator',
    project:"Live",
    img: bnrlogo,
     color:"#00FF00"
  },
  {
    id: 6,
    Title: 'RAMA Coin',
    href: '',
    project:"",
    img: bnrlogo,
     color:"#00FF00"
  },
  {
    id: 7,
    Title: 'Explorer',
    href: 'https://ramascan.com/',
    project:"Live",
    img: bnrlogo,
    color:"#00FF00"
  },
];



const LinkStyled = styled(Link)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'roboto',
  ':hover': { color: '#1CA7FB' },
}));

const useStyles = makeStyles({
  list: {
    color: '#fff',
    fontFamily: 'Roboto',
    textDecoration: 'none',
    transition: '0.5s',
    padding: '0.5rem',
    fontSize: 14,
    width: '100%',
    borderRadius: '30px',
    display: 'inline-block',
    '&:hover': {
      background: 'linear-gradient(90deg, #1a1e22, #1a1e22)',
    },
    '@media(max-width : 900px)': { textAlign: 'center' },
  },
});

const UseRamestta: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleClickToggle = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      setAnchorEl(null);
      setOpen(false);
    } else {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    }
  };

  return (
    <Box>
      <LinkStyled
        aria-owns={open ? 'popover' : undefined}
        aria-haspopup="true"
        onClick={handleClickToggle}
        href=""
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Typography>Use Ramestta</Typography>
          <Box sx={{
            width:'7px',
            height:'7px',
            backgroundColor:'#fff',
            borderRadius:'30px'
          }} />
        </Box>
      </LinkStyled>
      <Popover
        id="popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(180deg, #000, #000)',
            border: '1px solid #00B2B2',
            boxShadow: '3px 4px 20px -5px #1CA8FA',
            borderRadius: '20px',
            padding: '1rem',


          },
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box component={'ul'} sx={{ padding: 0, color: '#fff', listStyle: 'none' }}>
                {Additional_Links.map((item) => (
                  <Box key={item.id} component={'li'} mt={0.5}>

                    <Link className={classes.list} href={item.href} target='_blank'>
                      <Box sx={{
                        display:'flex',
                        alignItems:'center',
                        gap:'10px'
                      }}>
                        <Image src={item.img} alt={''} width={30} height={30} />
                        <Typography>{item.Title} <Typography component={'span'} fontSize={14} color={item.color}>{item.project}</Typography></Typography>
                      </Box>

                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </Box>
  );
};

export default UseRamestta;
