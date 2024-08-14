"use client";
import getStripe from "../utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <Title>FlashCard Saas</Title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typogrophy variant="h6"> Flashcard Saas</Typogrophy>
          <SignedOut>
            <Button>Login</Button>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
