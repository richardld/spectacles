type CouldronContent = { [color: string]: number };

@component
export class Couldron extends BaseScriptComponent {
    public static couldronPotionContent : CouldronContent = {};

    onAwake() {

    }

    // Add a potion of a specific color
    public static AddPotion(color: string): void 
    {
        if (color in Couldron.couldronPotionContent) 
            {
                Couldron.couldronPotionContent[color]++;
            } 
            else
            {
            Couldron.couldronPotionContent[color] = 1;
            }
    }


    // Remove a potion of a specific color
    public static RemovePotion(color: string): void 
    {
        if (color in Couldron.couldronPotionContent) 
            {
                Couldron.couldronPotionContent[color]--;
                if (Couldron.couldronPotionContent[color] <= 0) 
                    {
                delete Couldron.couldronPotionContent[color];
                }
            }
        }
}
