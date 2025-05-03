import { Cauldron } from "./Couldron";

@component
export class CauldronCollisionManager extends BaseScriptComponent {
    
    redFound : boolean = false;
    blueFound : boolean = false;
    
    onAwake() {
        let cauldronObjectCollider = this.getSceneObject().getComponent("Component.ColliderComponent");
        cauldronObjectCollider.onOverlapEnter.add(function(e)
        {
            

            print('OverlapEnter(' + e.overlap.id + '): ' + e.overlap.collider);            
            switch (e.overlap.collider.getSceneObject().name)
            {
                case "Red":
                    if(this.redFound)
                        return;
                    Cauldron.addItem("Red");
                    print("Red Added");            
                    this.redFound = true;
                    break;

                case "Blue":
                    if(this.blueFound)
                        return;
                    Cauldron.addItem("Blue");
                    print("Blue Added");            
                    this.blueFound = true;
                    break;                                       
            }
            
            if(this.redFound && this.blueFound)
            {
                print('Make Purple');
            }
            
        });
        
    }

}
