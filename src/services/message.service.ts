import prisma from "../prisma";

export default {
  checkIfUserExists: (userId: string) => {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  },
  getConversation: (_id: string, userId: string) => {
    return prisma.conversation.findFirst({
      where: {
        Participant: {
          every: {
            userId: {
              in: [_id, userId],
            },
          },
        },
      },
      include: {
        Participant: {
          where: { userId: { not: _id } },
          select: {
            User: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                image: true,
              },
            },
          },
        },
        Message: {
          select: {
            id: true,
            message: true,
            created_at: true,
            sender: true,
          },
          orderBy: {
            created_at: "desc",
          },
          take: 1,
        },
      },
    });
  },
  createConversation: (_id: string, userId: string) => {
    return prisma.conversation.create({
      data: {
        Participant: {
          createMany: {
            data: [
              {
                userId: _id,
              },
              {
                userId: userId,
              },
            ],
          },
        },
      },
      include: {
        Participant: {
          where: { userId: { not: _id } },
          select: {
            User: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                image: true,
              },
            },
          },
        },
      },
    });
  },
  getConversations: (_id: string) => {
    return prisma.conversation.findMany({
      where: {
        Participant: {
          some: {
            userId: _id,
          },
        },
        Message: {
          some: {},
        },
      },
      select: {
        id: true,
        Participant: {
          select: {
            User: {
              select: {
                id: true,
                first_name: true,
                last_name: true,
                image: true,
              },
            },
          },
        },

        Message: {
          select: {
            id: true,
            message: true,
            created_at: true,
            sender: true,
          },
          orderBy: {
            created_at: "desc",
          },
          take: 1,
        },
      },
    });
  },
};