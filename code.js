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

function convertToAdjMatrix(adjList) {
    var adjMatrix = [];
    
    if (adjList == []){
        return adjList;
    }

    for (var i = 0; i < adjList.length; i++) {
        adjMatrix.push([]);
        for (let j = 0; j < adjList.length; j++) {
            adjMatrix[i].push(0);
        }
    }
    
    for (var i = 0; i < adjList.length; i++) {
        for (var j = 0; j < adjList[i].length; j++) {
            adjMatrix[i][adjList[i][j]] = 1;
        }
    }

    return adjMatrix;
}
