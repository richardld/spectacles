// Cauldron.ts

export class Cauldron {
    @input
    cauldronLiquid : SceneObject;


    private static items: string[] = [];

    // Add an item (color) to the cauldron
    public static addItem(color: string): boolean {
        if (this.items.length >= 2) {
            print("Cauldron is full!");
            return false;
        }
        this.items.push(color);
        return true;
    }

    // Remove the last item
    public static removeItem(): string | null {
        if (this.items.length === 0) return null;
        return this.items.pop() || null;
    }

    // Get the result color based on the two items
    public static getResult(): string | null {
        if (this.items.length < 2) return null;
        return mixColors(this.items[0], this.items[1]);
    }

    // Reset the cauldron
    public static reset(): void {
        this.items = [];
    }
}

// Color mixing logic using plain strings
function mixColors(color1: string, color2: string): string {
    const combinations: { [key: string]: string } = {
        "red+blue": "purple",
        "blue+red": "purple",
        "red+yellow": "orange",
        "yellow+red": "orange",
        "blue+yellow": "green",
        "yellow+blue": "green"
        // Add more combinations as needed
    };
    if (color1 === color2) {
        return color1; // Same colors: no change
    }
    this.cauldronLiquid.getComponent

    return combinations[`${color1.toLowerCase()}+${color2.toLowerCase()}`] || "unknown";
}

// Make Cauldron accessible globally if needed
(globalThis as any).Cauldron = Cauldron;
