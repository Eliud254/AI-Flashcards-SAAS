"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { Container, Typography, Button, Box } from "@mui/material";
import LoginForm from '../components/LoginForm';

export default function Home() {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Box mt={4} textAlign="center">
        <Typography variant="h2" gutterBottom>
          Welcome to Moel AI
        </Typography>
        <Typography variant="h5" gutterBottom>
          Create and study flashcards powered by AI
        </Typography>
        <SignedIn>
          <Button variant="contained" color="primary" onClick={() => router.push('/dashboard')}>
            Go to Dashboard
          </Button>
        </SignedIn>
        <SignedOut>
          {showLogin ? (
            <LoginForm />
          ) : (
            <Button variant="contained" color="primary" onClick={() => setShowLogin(true)}>
              Get Started
            </Button>
          )}
        </SignedOut>
      </Box>
    </Container>
  );
}