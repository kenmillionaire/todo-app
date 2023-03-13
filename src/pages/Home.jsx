import React from "react";
import Container from "../components/container/Container";
import Header from "../components/container/header/Header";
import AddTodo from "../components/container/add_todo/AddTodo";
import ListTodo from "../components/container/list_todo/ListTodo";

export default function Home() {
  return (
    <Container>
      <Header />
      <AddTodo />
      <ListTodo />
    </Container>
  );
}
