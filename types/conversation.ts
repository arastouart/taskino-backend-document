import type { Role } from "./role";

export type ConversationRequester = {
  id: string;
  type: "requester";
  fullName: string;
  timestamp: string;
  text: string;
  role: Pick<Role, 'role'>;
  file: File | null;
};

export type ConversationResponder = {
  id: string;
  type: "responder";
  fullName: string;
  timestamp: string;
  text: string;
  score: number | null;
  role: Pick<Role, 'role'>;
  file: File | null;
  voice: string | null;
};

export type Conversation = {
  id: string;
  conversationCount: number;
  isReviewed: boolean;
  score: number;
  starter: {
    title: string;
    sessionNumber: number;
    text: string;
    file: File | null;
  };
  requester: {
    fullName: string;
    avatar: string | null;
    averageScore: number;
    level: string;
  };
  history: (ConversationRequester | ConversationResponder)[];
};
