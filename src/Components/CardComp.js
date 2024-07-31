import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { keyframes } from '@mui/system';

const colorChange = keyframes`
  0% {
    border-image-source: linear-gradient(45deg, #FF5733, #FFBD33);
  }
  50% {
    border-image-source: linear-gradient(45deg, #33FF57, #33FFBD);
  }
  100% {
    border-image-source: linear-gradient(45deg, #FF5733, #FFBD33);
  }
`;

const CardComp = ({ item }) => {
    return (
        <Container
            sx={{
                textAlign: 'center',
                height: '100%',
                padding: 2,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '4px solid #FF5733',
                borderImageSlice:1,
                animation: `${colorChange} 2s linear infinite`,
            }}
        >
            <Box>
                <Box
                    component='img'
                    src={item.imgUrl}
                    alt={item.name}
                    sx={{
                        maxWidth: '80%',
                        height: '50%'
                    }}
                />
                <Typography textTransform='capitalize' variant="h6" sx={{ mt: 1, mb: 0.5 }}>
                    {item.name}
                </Typography>
                <Typography textTransform='capitalize' variant="h6" sx={{ mt: 1, mb: 0.5 }}>
                    {item.desc}
                </Typography>
            </Box>
        </Container>
    );
}

export default CardComp;
