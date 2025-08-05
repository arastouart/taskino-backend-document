/*
 * 1. create conversation
 * 2. get all conversations
 * 3. get conversation by id
 * 4. answer conversation by id
 * 5. question conversation by id
 * 6. delete conversation by id
 */

import { messagesSuccess } from "../messages/success";
import type {
  Conversation,
  ConversationRequester,
  ConversationResponder,
} from "../types/conversation";
import type { Request } from "../types/request";
import type { UserRoleConversation, UserRoleManagment } from "../types/role";

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
    search: "123456", // filter by [courseId] - default is '' for all
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
          role: "student" as UserRoleConversation & UserRoleManagment,
        },
        {
          id: "111213",
          type: "responder",
          fullName: "Support Agent",
          timestamp: new Date().toISOString(),
          text: "Sure, I can help you with that.",
          role: "mentor" as UserRoleConversation & UserRoleManagment,
          file: null,
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
    message: messagesSuccess[0],
    status: "success",
  },
};

export const deleteConversationById: Request<void, void> = {
  method: "delete",
  endpoint: "/conversations/{conversationId}",
  response: {
    status: "success",
    message: messagesSuccess[2],
  },
};

export const answerConversationById: Request<
  Pick<ConversationRequester, "text" | "file">,
  void
> = {
  method: "post",
  endpoint: "/conversations/{conversationId}/answer",
  body: {
    text: "This is my answer to the question.",
    file: null,
  },
  response: {
    status: "success",
    message: messagesSuccess[0],
  },
};

export const questionConversationById: Request<
  Pick<ConversationResponder, "text" | "file" | "voice">,
  void
> = {
  method: "post",
  endpoint: "/conversations/{conversationId}/question",
  body: {
    text: "This is my question about the conversation.",
    file: null,
    voice: null,
  },
  response: {
    status: "success",
    message: messagesSuccess[0],
  },
};
