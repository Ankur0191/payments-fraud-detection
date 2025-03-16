"use client";

import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

export default function HomePage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4">{message || "Loading..."}</Typography>
    </Container>
  );
}
