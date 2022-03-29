// process.stdout.write("Alguma coisa"); lembra console log 

const questions = [ 
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que eu poderia melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ")
}
ask()

const answers = []
process.sdtin.on("data",data => {
    answers.push(data.Tostring().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }else{
        process.exit()
    }
})

process.on('exit ', ()=> {
    console.log(`
    Bacana Manu 

    O que você aprendeu hoje foi :
     ${answers[0]}

     O que te aborreceu e você poderia melhorar foi ? 
     ${answers[1]}
    
    O que te deixou feliz hoje :
    ${answers[2]} 

    você ajudou ${answers[4]} pessoas hoje ! 

    Volte Amanhã para novas reflexões 

`)
})