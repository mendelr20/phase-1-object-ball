function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assits: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evens": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assits: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assits: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assits: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assits: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assits: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assits: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assits: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assits: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Hayword": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assits: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }



function players() {
  const game = gameObject()
  const homePlayers = game.home.players
  const awayPlayers = game.away.players
    return {...homePlayers, ...awayPlayers}
}

function numPointsScored(playerInput) {
  const playerArrays = Object.entries(players())
  const player = playerArrays.find(playerArray => playerArray === playerInput)
    return players()[playerInput].points
}

console.log('desagna number of points', numPointsScored('DeSagna Diop'))


function shoeSize(playerInput) { 
  const playerArrays = Object.entries(players())
  const player = playerArrays.find(playerArray => playerArray === playerInput)
    return players()[playerInput].shoe
}
console.log('desagna shoe size', shoeSize('DeSagna Diop'))

function colors() {
  const game = gameObject()
  const homeColors = game.home.colors
  const awayColors = game.away.colors
    return {home: homeColors, away: awayColors}
}

function teamColors(colorInput) {
    return colors()[colorInput]
}
console.log( 'Home Team Colors', teamColors('home'))

function team() {
  const game = gameObject()
  const homeTeam = game.home.teamName
  const awayTeam = game.away.teamName
    return {home: homeTeam, away: awayTeam}
}

function teamName(teamInput) {
  return team()[teamInput]
}
console.log( 'Home Team Name', teamName('home'))

function teamNumbers() {
  const game = gameObject()
  const homeTeam = Object.values(game.home.players)
  const awayTeam = Object.values(game.away.players)
  const homeList = homeTeam.map(obj => obj.number)
  const awayList = awayTeam.map(obj => obj.number)
    return {[game.home.teamName]: homeList, [game.away.teamName]: awayList}
}

function playerNumbers(team) {
  return teamNumbers()[team]
}
console.log( 'Player number', playerNumbers('Brooklyn Nets'))

function playerStats(playerName){
  const game = gameObject()
  const homePlayers = game.home.players
  const awayPlayers = game.away.players
  const playerList = {...homePlayers, ...awayPlayers}
  return playerList[playerName]
}

console.log( 'Alan andersons stats', playerStats('Alan Anderson'))

function bigShoeRebounds() {
  const game = gameObject()
  const homeTeam = Object.values(game.home.players)
  const awayTeam = Object.values(game.away.players)
  const homeList = homeTeam.map(obj => obj) 
  const awayList = awayTeam.map(obj => obj)
  const shoeList = [...homeList, ...awayList]
  let largeShoe = {size: 0, numRebounds: 0}
  for (let i = 0; i < shoeList.length; i++) {
    if (shoeList[i].shoe > largeShoe.size) {
      largeShoe.size = shoeList[i].shoe
      largeShoe.numRebounds = shoeList[i].rebounds
    }
  }
  return largeShoe.numRebounds 
}

console.log('Largest shoe size:', bigShoeRebounds())

function mostPointsScored(){
  const game = gameObject()
  const homeTeam = game.home.players
  const awayTeam = game.away.players
  const bothTeams = {...homeTeam, ...awayTeam}
  let pointList = {points: 0, playerName:" "}
  for (const player in bothTeams) {
    if (bothTeams[player].points > pointList.points) {
      pointList.points = bothTeams[player].points
      pointList.playerName = player
    }
  }
  return pointList.playerName
}

console.log('Player with the most points is:', mostPointsScored())

function winningTeam() {
  const game = gameObject()
  const points = {home: 0, away: 0}
  for (let team in game) {
    const players = game[team].players
    for (let playerName in players) {
      points[team] += players[playerName].points
      if (points.home > points.away) {
        return game.home.teamName
      }
      else {return game.away.teamName}
    }
  }
}
console.log('The winning team is:', winningTeam())

function playerWithLongestName() {
  const game = gameObject()
  const player = {name: "", length: 0}
  for (let team in game) {
    const players = game[team].players
    for (let playerName in players) {
      if (playerName.length > player.length) {
        player.length = playerName.length
        player.name = playerName
      }
    }
  }
  return player.name
}

console.log('Player with the longest name is:', playerWithLongestName())

function doesLongNameStealATon() {
  const game = gameObject()
  const homeTeam = game.home.players
  const awayTeam = game.away.players
  const bothTeams = {...homeTeam, ...awayTeam}
  const longestName = bothTeams[playerWithLongestName()].steals
  let mostSteals = 0
  for (let player in bothTeams) {
    const steals = bothTeams[player].steals
    if (steals > longestName) {
      mostSteals = steals
    }
  }
  if (mostSteals > longestName) {
    return false
  }
}
console.log('Player with the longest name is the same player as the player with the most amount of steals:', doesLongNameStealATon())
