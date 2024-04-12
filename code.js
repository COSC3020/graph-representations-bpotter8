function convertToAdjList(adjMatrix) {
    var adjList = [];
    
    if (adjMatrix == []){
        return adjMatrix;
    }
    
    for (var i = 0; i < adjMatrix.length; i++) {
        adjList.push([]);
        for (var j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) {
                adjList[i].push(j);
            }
        }
    }

    return adjList;
}
