import createShipNodes from "./createShipNodes";
import { Film, Ship } from "@/app/types";
import { Node } from "@xyflow/react";
import { mockedShips } from "@/app/mockData";
import { mockedFilm } from "@/app/mockData";

describe("createShipNodes", () => {
  it("should create ship nodes based on film starships", () => {
    const expectedNodes: Array<Node<Ship>> = [
      {
        id: "ship-48",
        type: "shipNode",
        data: mockedShips[48],
        position: { x: 0 * 420, y: 800 + 0 * 50 },
      },
      {
        id: "ship-59",
        type: "shipNode",
        data: mockedShips[59],
        position: { x: 1 * 420, y: 800 + 1 * 50 },
      },
    ];

    const result = createShipNodes(mockedFilm, mockedShips);

    expect(result).toEqual(expectedNodes);
  });

  it("should return an empty array if the film has no matching starships", () => {
    const film: Film = {
      characters: [
        10, 12, 13, 14, 15, 16, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 81,
      ],
      created: "2014-12-10T14:23:31.880000Z",
      director: "George Lucas",
      edited: "2014-12-20T19:49:45.256000Z",
      episode_id: 4,
      id: 1,
      opening_crawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      planets: [1, 2, 3],
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      species: [1, 2, 3, 4, 5],
      starships: [1, 2],
      title: "A New Hope",
      url: "https://sw-api.starnavi.io/films/1/",
      vehicles: [4, 6, 7, 8],
    };

    const result = createShipNodes(film, mockedShips);

    // Assert the result is an empty array
    expect(result).toEqual([]);
  });
});
