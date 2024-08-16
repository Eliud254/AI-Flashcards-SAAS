import { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

export default function Flashcard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card sx={{ minWidth: 275, m: 2, cursor: 'pointer' }} onClick={() => setIsFlipped(!isFlipped)}>
      <CardContent>
        <Typography variant="h5" component="div">
          {isFlipped ? back : front}
        </Typography>
      </CardContent>
      <Button size="small" onClick={(e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
      }}>
        {isFlipped ? 'Show Question' : 'Show Answer'}
      </Button>
    </Card>
  );
}