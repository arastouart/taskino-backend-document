export type Conversation = {
  title: string;
  sessionNumber: number;
  conversationCount: number;
  isReviewed: boolean;
  score: number;
  requester: {
    fullName: string;
    avatar: string | null;
    averageScore: number;
    level: string;
  };
  history: {
    type: 'requester' | 'responder';
    fullName: string;
    timestamp: string;
    text: string;
    file: string | null;
    voice: string | null;
    role: string;
  }[];
};
