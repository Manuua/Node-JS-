function getFlags(flag){
    const index = ProcessingInstruction.argv.indexOf(flag)
    return ProcessingInstruction.argv[index]
}
module.exports = getFlags;