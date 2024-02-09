//==================================//
//           Core Config            //
//==================================//

class Player {

    id;
    name;
    PartyLeader;

    constructor(id, name, partyLeader) {
        this.SetId(id);
        this.SetName(name);
        this.SetPartyLeader(partyLeader);
    }

    SetId(id) {
        this.id = id;
    }

    SetName(name) {
        this.name = name;
    }

    SetPartyLeader(partyLeader) {
        this.PartyLeader = partyLeader;
    }

    GetId() {
        return this.id;
    }

    GetName() {
        return this.name;
    }

    GetPartyLeader() {
        return this.PartyLeader;
    }

    GetPlayer() {
        return {
            "id": this.id,
            "name": this.name,
            "partyLeader": this.PartyLeader
        };
    }

}

const party = [];
let partyLeader = null;

party.push(new Player(1, "Scott", false));
party.push(new Player(2, "Oli", false));
party.push(new Player(3, "Jack", false));
partyLeader = party[0];
party[0].SetPartyLeader(true);

//==================================//
//         Gamemode Config          //
//==================================//

const reactions = [];
let startTime = null;

//==================================//
//    Core Gameplay Functionality   //
//==================================//

// StartGame function should be abstract.  
// This will eventually allow for server
// to process GameMode functionality without the need of several functions
// aka KEEPS CODE CLEAN!

// In fact all the below functions need to be abstract
// TO-DO Create Core Gameplay Interface

function StartGame() {
    startTime = new Date().getTime();
    TriggerReaction();
    const fastestTime = CalculateWinner(reactions);
    const winner = party.reduce((currentValue) => {return fastestTime.id === currentValue.GetId() ? currentValue : fastestTime});
    console.log(winner.GetName());
}

// Send an action to clients, allow Client Game logic to process.
// TO-DO -- BUILD IT!

function TriggerAction() {

}

// Asynchrounously process requests / actions from clients.
// TO-DO -- BUILD IT!

function ProcessAction() {

}

// Alert both clients & server(s) to stop the game and clean-up.
// TO-DO -- BUILD IT!

function StopGame() {

}

//==================================//
//       Abstract Game Logic        //
//==================================//

// Whatever the heck makes your game run!  Code it here.

// Easy reduce the reactions array until a winner is found!

function CalculateWinner(reactions) {
    return reactions.reduce((currentFastest, currentReaction) => {
        return currentFastest.stopTime > currentReaction.stopTime ? currentReaction : currentFastest;
    }, {"stopTime": Infinity});
}

// This eventually will encapsulate TriggerAction and Client side will encapsulate and trigger Process Reaction from this trigger!
// But to keep it abstract and away from client logic.  It'll just trigger TriggerAction

function TriggerReaction() {
    reactions.push({"id": party[0].GetId(), "stopTime": 75});
    reactions.push({"id": party[1].GetId(), "stopTime": 215});
    reactions.push({"id": party[2].GetId(), "stopTime": 975});
}

// Below is irrelevant This is just starting the game as if the Party Leader did - Testing logic only

StartGame();