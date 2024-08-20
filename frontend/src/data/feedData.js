import {v4 as uuidv4} from "uuid"

export const initialFeed=[
    {
        id: uuidv4(),
        title: "Offer Asian cooking 🐖",
        description: "I offer Asian cooking classes for free",
        image: "/food1.jpg",
        avatarLetter: "HM",
        badgeContent: 22,
        creationDate: "16.08.2024",
        price: "free",
        location: "Some street 1, 11974 City",
        contact: "test@email.com",
      },
      {
        id: uuidv4(),
        title: "Need help?",
        description: "I ocan help with your housework",
        image: "/washing-dishes1.jpg",
        avatarLetter: "GT",
        badgeContent: 2,
        creationDate: "16.08.2024",
        price: "99 €",
        location: "Some street 1, 11974 City",
        contact: "test@email.com",
      }
    ];
