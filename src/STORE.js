import { v4 as uuidv4 } from "uuid";

export default {
  lists: [
    {
      id: "0",
      header: "Wishlist",
      cards: [
        { id: uuidv4(), companyName: "Facebook", position: "Web Developer" },
        { id: uuidv4(), companyName: "Apple", position: "Genius" },
      ],
    },
    {
      id: "1",
      header: "Applied",
      cards: [,],
    },
    {
      id: "2",
      header: "Interview",
      cards: [],
    },
    {
      id: "3",
      header: "Offer",
      cards: [],
    },
    {
      id: "4",
      header: "Rejected",
      cards: [],
    },
  ],
  //   allCards: {
  //     a: {
  //       id: "a",
  //       position: "Full Stack Engineer",
  //       companyName: "Apple",
  //     },
  //     b: { id: "b", position: "Front-end Developer", companyName: "Sonos" },
  //     c: {
  //       id: "c",
  //       position: "Jr. Software Engineer",
  //       companyName: "Amazon",
  //     },
  //   },
};
