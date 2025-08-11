interface ChangeSpeed {
    speedUp(amount: number): void;
    slowDown(amount: number): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(amount: number): void {
        this.speed += amount;
        console.log(`Tăng tốc lên ${this.speed} km/h`);
    }

    slowDown(amount: number): void {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Giảm tốc còn ${this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0;
        console.log(`Dừng hẳn. Tốc độ: ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle();
myVehicle.speedUp(50);
myVehicle.slowDown(20);
myVehicle.stop(); 