import type { Conversation } from "../types/conversation";
import type { Request } from "../types/request";

const conversations = {
  answer: {
    method: "post",
    endpoint: "/conversations/{conversationId}/answer",
  },
  question: {
    method: "post",
    endpoint: "/conversations/{conversationId}/question",
  },
};

export const getAllConversations: Request<
  void,
  Pick<
    Conversation,
    "id" | "conversationCount" | "isReviewed" | "score" | "starter"
  >[]
> = {
  method: "get",
  endpoint: "/conversations",
  query: {
    page: "1",
    limit: "10",
    search: '123456', // filter by [courseId] - default is '' for all
  },
  response: {
    data: [
      {
        id: "123456",
        conversationCount: 5,
        isReviewed: true,
        score: 4,
        starter: {
          title: "Sample Conversation",
          sessionNumber: 1,
          text: "This is a sample conversation starter.",
          file: null,
        },
      },
    ],
    pagination: {
      totalItems: 20,
      totalPages: 2,
    },
    status: "success",
  },
};

export const getConversationById: Request<void, Conversation> = {
  method: "get",
  endpoint: "/conversations/{conversationId}",
  response: {
    data: {
      id: "123456",
      conversationCount: 5,
      score: 4,
      isReviewed: true,
      starter: {
        title: "Sample Conversation",
        sessionNumber: 1,
        text: "This is a sample conversation starter.",
        file: null,
      },
      requester: {
        fullName: "John Doe",
        avatar: null,
        averageScore: 9.5,
        level: "Expert",
      },
      history: [
        {
          id: "78910",
          type: "requester",
          fullName: "John Doe",
          timestamp: new Date().toISOString(),
          text: "I have a question about my order.",
          file: null,
          role: "student",
          score: null,
          voice: null,
        },
        {
          id: "111213",
          type: "responder",
          fullName: "Support Agent",
          timestamp: new Date().toISOString(),
          text: "Sure, I can help you with that.",
          file: null,
          role: "mentor",
          score: 5,
          voice: null,
        },
      ],
    },
    status: "success",
  },
};

export const createConversation: Request<
  Pick<Conversation["starter"], "title" | "sessionNumber" | "text" | "file">,
  void
> = {
  method: "post",
  endpoint: "/conversations",
  body: {
    title: "New Conversation",
    sessionNumber: 1,
    text: "Let's start a new conversation.",
    file: null,
  },
  response: {
    message: "عملیات با موفقیت انجام شد",
    status: "success",
  },
};

export const deleteConversationById: Request<void, void> = {
  method: "delete",
  endpoint: "/conversations/{conversationId}",
  response: {
    status: "success",
    message: "عملیات با موفقیت انجام شد",
  },
};
