// const players = require("../rps");
// const options = require("../rps");


describe("words", () => {
    // -  'toBe()'
    // test('user and computer has names', () => {
    //    let user = players[0].name;
    //    let computer = players[1].name;
    //    expect(user).toBe("User");
    //    expect(computer).toBe("Computer");

    //   });
    //   test('user and computer has wins', () => {
    //     let userWin = players[0].winCount;
    //     let compWin = players[1].winCount;
    //     expect(userWin).toBeDefined();
    //     expect(compWin).toBeDefined();
    //    });


    //   -  'toHaveLength()'
    //   test('number of options', () => {
    //     let inputHands = ["rock", "paper", "scissors"];
    //     expect(inputHands).toHaveLength(3);
    //    });


    //    -  'toBeTruthy()'

    // test('user and computer has names', () => {
    //    let user = players[0].name = "User";
    //    expect(user).toBeTruthy();
    // });


    // -  'toHaveBeenCalled()'
    // test('user has name', () => {
    //    let user = players[0].name;
    //    expect(user).tohavebeencalled("User");
    // });


    // -  'toHaveReturned()'
    test('returns hand', () => {
        function getHand() {
            let randomNumber = parseInt(Math.random() * 10) % 3;
            return hands[randomNumber];
        expect(myHand).toHaveReturned(hands[randomNumber]);
      });




})
 