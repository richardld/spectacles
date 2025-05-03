const enum Phase
    {
        Phase1,
        Pahse2
    }


    // 2. Event handler type
type PhaseChangedCallback = (newPhase: Phase) => Phase;

@component
export class ProgressionSystem extends BaseScriptComponent {
    
    private static _currentPhase: Phase = Phase.Phase1;
    private static _listeners: PhaseChangedCallback[] = [];


    // Getter for current phase
    public static get currentPhase(): Phase {
        return this._currentPhase;
    }

    // Setter for current phase that triggers event
    public static setPhase(newPhase: Phase): void {
        if (this._currentPhase !== newPhase) {
            this._currentPhase = newPhase;
            //this._emitPhaseChanged(newPhase);
        }
    }

    // Subscribe to phase changes
    public static onPhaseChanged(callback: PhaseChangedCallback): void {
        this._listeners.push(callback);
    }

    // // Internal: notify all listeners
    // private static _emitPhaseChanged(newPhase: Phase): Phase {
    //     this._listeners.forEach(cb => cb(newPhase));
    // }

    onAwake() {

    }
}
