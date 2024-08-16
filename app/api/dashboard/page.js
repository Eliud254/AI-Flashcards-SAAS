"use client";
import { useState } from 'react';
import { useAuth } from "@clerk/nextjs";
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Flashcard from '../../components/Flashcard';

export default function Dashboard() {
  const { isLoaded, userId } = useAuth();
  const [input, setInput] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  if (!isLoaded || !userId) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would call your API to generate flashcards
    // For now, we'll just create a dummy flashcard
    const newFlashcard = { front: input, back: "AI-generated answer would go here" };
    setFlashcards([...flashcards, newFlashcard]);
    setInput('');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          fullWidth
          label="Enter a topic or question"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          margin="normal"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Generate Flashcard
        </Button>
      </Box>
      {flashcards.map((card, index) => (
        <Flashcard key={index} front={card.front} back={card.back} />
      ))}
    </Container>
  );
}