@component
export class GameManager extends BaseScriptComponent {
    @input
    title1: SceneObject;
    
    @input
    title2: SceneObject;

    @input
    title3: SceneObject;
    
    @input
    phase1: SceneObject;
    
    @input
    phase2: SceneObject;
    
    @input
    phase3: SceneObject;
    
    gameState: string = "Title 1";
    
    onAwake() {};

    changeState(state: string) {
        var gameMap = {
            "Title 1": this.title1,
            "Title 2": this.title2,
            "Title 3": this.title3,
            "Phase 1": this.phase1,
            "Phase 2": this.phase2,
            "Phase 3": this.phase3,
        }
        
        for(let i = 0; i < Object.keys(gameMap).length; i++) {
            gameMap[Object.keys(gameMap)[i]].enabled = false
        }
        gameMap[state].enabled = true
        
        this.gameState = state
        print(state)
    }
}