import readline from 'readline';

export default function print() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Type Operator : ', function sign(sign) {
        rl.question('Type number one : ', function Num1(Num1) {
            rl.question('Type number two : ', function Num2(Num2) {
                const num1 = parseInt(Num1);
                const num2 = parseInt(Num2);
                const signs = sign;
                switch(signs){
                    case '+':
                        console.log("\n Your ans is " +num1 + num2);
                        break;
                    case '-':
                        console.log("\n Your ans is " +num1 - num2);
                        break;
                    case '*':
                        console.log("\n Your ans is " +num1 * num2);
                        break;
                    case '/':
                        console.log("\n Your ans is " +num1 / num2);
                        break;
                    case '%':
                        console.log("\n Your ans is " +num1 % num2);
                        break;
                    default:
                        console.log('\nInvalid Operator');
                }
                console.log("\n----------------------------------------\n")
                rl.close();
            });
        });
    });
}