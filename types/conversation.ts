export type Conversation = {
  title: string;
  sessionNumber: number;
  conversationCount: number;
  isReviewed: boolean;
  score: number;
  requester: {
    fullName: string;
    avatar: string;
    averageScore: number;
    level: string;
  };
  interactions: {
    type: 'requester' | 'responder';
    fullName: string;
    timestamp: string;
    text: string;
    file?: string;
    voice?: string;
    role: string;
  }[];
};
