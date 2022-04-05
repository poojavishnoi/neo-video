import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    playlists: [
      {
        _id: uuid(),
        title: "song",
        videos: [
          {
            _id: "VA0V8rQpqwQ",
            title: "Kho Gaye Hum Kahaan (Live in Ahmedabad)",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            creator: "Prateek Kuhad",
            categoryName: "Indie Music"
          },
          {
            _id: "CvV5P-mgaR8",
            title: "Anuv Jain - MAULA (Studio)",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            creator: "Anuv Jain",
            categoryName: "Indie Music"
          },
        ]
      },
      {
        _id: uuid(),
        title: "music",
        videos: [
          {
            _id: "Z96KMymDHkQ",
            title: "Kabira/dil diyan gallan/Hawayein/yara teri yari ko/ilahi Bollywood Flute Mashup Vishal Gendle Flute    ",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            creator: "renee foy",
            categoryName: "Instrumental Music"
          },
          {
            _id: "fd2e-mmeU_w",
            title: "Bollywood Mashup on Flute | Bubai    ",
            description:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            creator: "renee foy",
            categoryName: "Instrumental Music"
          },
        
      ]
    }
  ],
  },
];
