import React from "react";
import Container from "../components/container/Container";
import Header from "../components/container/header/Header";
import AddTodo from "../components/container/add_todo/AddTodo";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
    </Container>
  );
}
