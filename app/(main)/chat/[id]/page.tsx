import { mockChats, mockMessages, currentUser } from "@/lib/mockData";
import { notFound } from "next/navigation";
import ChatArea from "@/components/chat/ChatArea";

export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const chat = mockChats.find((c) => c.id === resolvedParams.id);
  
  if (!chat) {
    notFound();
  }

  const messages = mockMessages[chat.id] || [];

  return <ChatArea chat={chat} initialMessages={messages} currentUser={currentUser} />;
}
