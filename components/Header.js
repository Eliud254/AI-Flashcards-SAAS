"use client";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from 'next/link';

export default function Header() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ color: 'white', textDecoration: 'none' }}>
            Moel AI
          </Link>
        </Typography>
        <SignedIn>
          <Box mr={2}>
            <Link href="/dashboard" passHref style={{ color: 'white', textDecoration: 'none' }}>
              Dashboard
            </Link>
          </Box>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <Link href="/" passHref>
            <Button color="inherit">Login</Button>
          </Link>
        </SignedOut>
      </Toolbar>
    </AppBar>
  );
}