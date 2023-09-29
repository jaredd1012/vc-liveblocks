/* Framework */
import {
  Avatar,
    Box,
    Burger,
    Flex,
    Grid,
    Group,
    Portal,
    SimpleGrid,
    Text,
    Title,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { Dispatch, SetStateAction } from 'react';
  import logo from '../../assets/safe_logo.svg'


  const AppHeader = () => {
  
    const theme = useMantineTheme();
  
    return (
          <header style={{background: theme.colors.yellow[0], height: 100}}>
              <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                  <Title style={{fontSize: 40, padding: '20px 50px'}}> SAFe VC </Title>
                  <Avatar style={{
                    marginRight: 100, 
                    marginTop: 30, 
                    background: theme.colors.yellow[2], 
                    width: 50, height: 50, 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}>MK</Avatar>
              </Box>
          </header>
    );
  };
  
  export default AppHeader;