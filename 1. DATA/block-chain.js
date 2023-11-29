// Function to create a block in the block chain
function blockChain(data, prev) {
    // If no previous block is given, use the genesis block
    if (prev == null) {
        prev = { index: 0, hash: "0" };
    }
    
    // Compute the hash for the current block
    const hash = hashCode(
        (prev.index + 1).toString() + prev.hash + JSON.stringify(data)
    );
    
    // Create and return the block object
    return {
        index: prev.index + 1,
        hash: hash,
        data: data,
        prev: prev,
        chain: function (data) {
            return blockChain(data, this);
        },
    };
}
