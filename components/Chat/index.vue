<template lang="">
  <div class="flex h-[calc(100vh-110px)]">
    <ChatConversations />
    <ChatMessages />
    <ChatDetails />
  </div>
</template>
<script setup lang="ts">
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("connected");
});

socket.on("disconnect", () => {
  console.log("disconnected");
});

socket.on("message", (message) => {
  console.log(message);
});
</script>
plugins
