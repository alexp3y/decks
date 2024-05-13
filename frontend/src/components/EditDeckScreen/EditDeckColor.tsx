import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { amber, green, indigo, orange, pink } from '@mui/material/colors';
import React, { useState } from 'react';
import { DeckColor } from '../../services/decks.service';
import { getCardImage } from '../../utils/get-card-image';
import { useDecks } from '../../DeckContext';

interface Props {}

const EditDeckColor: React.FC<Props> = () => {
  const decks = useDecks();
  const [color, setColor] = useState<DeckColor>(decks.deck!.color);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value as DeckColor);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 5,
        gap: 3,
      }}
    >
      <Paper
        sx={{
          ...getCardImage(color, false),
          backgroundSize: 'cover',
          width: '280px',
          height: '150px',
        }}
      >
        <Box
          sx={{
            height: '101%',
            width: '100%',
            backgroundColor:
              theme.palette.mode === 'dark' ? 'rgba(0,0,0,.4)' : '',
          }}
        />
      </Paper>
      <FormControl>
        <RadioGroup row value={color} onChange={handleChange}>
          <FormControlLabel
            sx={{
              mx: '12px',
            }}
            value={DeckColor.DEFAULT}
            control={<Radio size="small" />}
            label={<Typography variant="overline">Default</Typography>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            sx={{
              mx: '12px',
            }}
            value={DeckColor.YELLOW}
            control={
              <Radio
                size="small"
                sx={{
                  '&.Mui-checked': {
                    color: amber[400],
                  },
                }}
              />
            }
            label={<Typography variant="overline">Yellow</Typography>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            sx={{
              mx: '12px',
            }}
            value={DeckColor.GREEN}
            control={
              <Radio
                size="small"
                sx={{
                  '&.Mui-checked': {
                    color: green[400],
                  },
                }}
              />
            }
            label={<Typography variant="overline">Green</Typography>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            sx={{
              mx: '12px',
            }}
            value={DeckColor.ORANGE}
            control={
              <Radio
                size="small"
                sx={{
                  '&.Mui-checked': {
                    color: orange[400],
                  },
                }}
              />
            }
            label={<Typography variant="overline">Orange</Typography>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            sx={{
              mx: '12px',
            }}
            value={DeckColor.BLUE}
            control={
              <Radio
                size="small"
                sx={{
                  '&.Mui-checked': {
                    color: indigo[300],
                  },
                }}
              />
            }
            label={<Typography variant="overline">Blue</Typography>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            sx={{
              mx: '12px',
            }}
            value={DeckColor.PINK}
            control={
              <Radio
                size="small"
                sx={{
                  '&.Mui-checked': {
                    color: pink[200],
                  },
                }}
              />
            }
            label={<Typography variant="overline">Pink</Typography>}
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default EditDeckColor;
