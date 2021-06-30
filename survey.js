const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




rl.question("What's your name? ", (name) => {
    console.log(`Thank you for your valuable feedback: ${name}`);
    rl.question("What's an activity you like doing? ", (activity) => {
        console.log(`Thank you for your valuable feeback: ${activity}`);
        rl.question("What do you listen to while studying? ", (music) => {
          console.log(`Thank you for your feeback: ${music}`)
          rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (meal) => {
            console.log(`Thank you so much for your feeback: ${meal}`)
            rl.question("What's your favourite thing to eat for that meal? ", (food) => {
              console.log(`Thank you for your feeback: ${food}`)
              rl.question("Which sport is your absolute favourite? ", (sport) => {
                console.log(`Thank you for your feeback: ${sport}`)
                rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (power) => {
                  console.log(`Thank you for your feeback: ${power}`)
                  console.log("Thank you so much for taking our survey! See you next time!")
                  rl.close();
                })
              })
            })
            
          })
        })
    });
    
});




// What is your superpower? In a few words, tell us what you are amazing at!



