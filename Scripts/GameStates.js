// Here we can define specific values for our game states. 

// this defines which properties we will define in each game state
class GameState {
    constructor(name, position, rotation, textfieldIds, rigRotation) {
        this.name = name;
        this.position = position;
        this.rotation = rotation;
        this.textfieldIds = textfieldIds;
        this.rigRotation = rigRotation;
    }

    //Returns the name of the active Game State
    toString() {
        return this.name;
    }
}

// here are the actual values for the Game State properties
class GameStates {
    static Home = new GameState('Home', { x: 0.2, y: 0.35, z: 6 }, { x: 0, y: 0, z: 0 }, [], {});
    static About = new GameState('About', { x: -0.8, y: 0.1, z: 2.2 }, { x: 0, y: 25, z: 0 }, ['About-CFS'], {});
    static Team = new GameState('Team', { x: -1.82, y: 0.95, z: 1 }, { x: 0, y: -9, z: 0 }, ['About-Maxx', 'About-Anna'], { x: 0, y: -60, z: 0 });
    static Contact = new GameState('Contact', { x: -0.1, y: 3.25, z: 1.7 }, { x: -23, y: 25, z: 10 }, ['Contact-Textfield', 'Mail-Textfield', 'Telephone-Textfield'], { x: 0, y: -47, z: 0 });
    static Product = new GameState('Products', { x: 0.8, y: -0.1, z: 2.3 }, { x: 0, y: 20, z: 0 }, ['Expand Web', 'Expand Print'], {});
    static Anna = new GameState('Anna', { x: -1.8, y: 0.95, z: 0.5 }, { x: 0, y: 17, z: 0 }, ['About-Maxx', 'Anna-Text'], { x: 0, y: -60, z: 0 });
    static Maxx = new GameState('Maxx', { x: -2, y: 0.95, z: 0.5 }, { x: 0, y: -43, z: 0 }, ['About-Anna', 'Maxx-Text'], { x: 0, y: -60, z: 0 });

    // checks if the Game State name actually exists in our list of game states. if yes, it return the name of the game state. if no, it returns an error message 
    static Matching(name) {
        var values = Object.values(GameStates);

        for (let i = 0; i < values.length; i++) {
            if (values[i].name == name) {
                return values[i]
            }
        }

        console.error('GameStates: no valid entry found for ' + name);
    }
}