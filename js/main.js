//Example fetch using pokemonapi.co
document.querySelector('#standings').addEventListener('click', getStandings)

let teams = []
let map = {}
let entries
let sorted = []

function getStandings(){
fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.sports[0].leagues[0].teams)
        for ( let team of data.sports[0].leagues[0].teams){
          teams.push(team.team.abbreviation)
        }
        for ( let record of teams){
          fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${record}`)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data)
            map[data.team.displayName] = data.team.record.items[0].stats[17].value
            entries = Object.entries(map)
            sorted = entries.sort((a,b) => b[1] - a[1])
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
        }
        for ( let team of sorted ){
          const li = document.createElement('li')
          li.textContent = team[0]
          document.querySelector('ul').appendChild(li)
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const team = document.querySelector('input').value.toLowerCase()
  // const url = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/'+team
  let url = ''
    if (team === 'atlanta' || team === 'hawks' || team === 'atlanta hawks' || team === 'atl'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/atl'
  } else if (team === 'boston' || team === 'celtics' || team === 'boston celtics' || team === 'bos'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/bos'
  } else if (team === 'brooklyn' || team === 'nets' || team === 'brooklyn nets' || team === 'bkn'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/bkn'
  } else if (team === 'charlotte' || team === 'hornets' || team === 'charlotte hornets' || team === 'cha'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/cha'
  } else if (team === 'chicago' || team === 'bulls' || team === 'chicago bulls' || team === 'chi'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/chi'
  } else if (team === 'cleveland' || team === 'cavaliers' || team === 'cleveland cavaliers' || team === 'cle'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/cle'
  } else if (team === 'dallas' || team === 'mavericks' || team === 'dallas mavericks' || team === 'dal'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/dal'
  } else if (team === 'denver' || team === 'nuggets' || team === 'denver nuggets' || team === 'den'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/den'
  } else if (team === 'detroit' || team === 'pistons' || team === 'detroit pistons' || team === 'det'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/det'
  } else if (team === 'golden state' || team === 'warriors' || team === 'golden state warriors' || team === 'gs'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/gs'
  } else if (team === 'houston' || team === 'rockets' || team === 'houston rockets' || team === 'hou'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/hou'
  } else if (team === 'indiana' || team === 'pacers' || team === 'indiana pacers' || team === 'ind'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ind'
  } else if (team === 'los angeles' || team === 'clippers' || team === 'los angeles clippers' || team === 'lac'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/lac'
  } else if (team === 'los angeles' || team === 'lakers' || team === 'los angeles lakers' || team === 'lal'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/lal'
  } else if (team === 'memphis' || team === 'grizzlies' || team === 'memphis grizzlies' || team === 'mem'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mem'
  } else if (team === 'miami' || team === 'heat' || team === 'miami heat' || team === 'mia'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mia'
  } else if (team === 'milwaukee' || team === 'bucks' || team === 'milwaukee bucks' || team === 'mil'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/mil'
  } else if (team === 'minnesota' || team === 'timberwolves' || team === 'minnesota timberwolves' || team === 'min'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/min'
  } else if (team === 'new orleans' || team === 'pelicans' || team === 'new orleans pelicans' || team === 'no'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/no'
  } else if (team === 'new york' || team === 'knicks' || team === 'new york knicks' || team === 'ny'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/ny'
  } else if (team === 'oklahoma city' || team === 'thunder' || team === 'oklahoma city thunder' || team === 'okc'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/okc'
  } else if (team === 'orlando' || team === 'magic' || team === 'orlando magic' || team === 'orl'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/orl'
  } else if (team === 'philadelphia' || team === '76ers' || team === 'philadelphia 76ers' || team === 'phi'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/phi'
  } else if (team === 'phoenix' || team === 'suns' || team === 'phoenix suns' || team === 'phx'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/phx'
  } else if (team === 'portland' || team === 'trail blazers' || team === 'portland trail blazers' || team === 'por'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/por'
  } else if (team === 'sacramento' || team === 'kings' || team === 'sacramento kings' || team === 'sac'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sac'
  } else if (team === 'san antonio' || team === 'spurs' || team === 'san antonio spurs' || team === 'sa'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/sa'
  } else if (team === 'toronto' || team === 'raptors' || team === 'toronto raptors' || team === 'tor'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/tor'
  } else if (team === 'utah' || team === 'jazz' || team === 'utah jazz' || team === 'utah'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/utah'
  } else if (team === 'washington' || team === 'wizards' || team === 'washington wizards' || team === 'wsh'){
    url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/wsh'
  } else {
    alert('Invalid Team')
  }

  fetch(url)
  //   , {
  //     headers: {
  //       'x-rapidapi-key': 'bb7806d3d1msh3fbfc553c0c6debp1759e0jsn3930a65e637a',
	// 	'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
  //   }
  // })
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.team)
        document.querySelector('section').classList.remove('hidden')
        document.querySelector('#about-team').innerText = data.team.displayName
        // document.querySelector('h2').style.width = '250px'
        // document.querySelector('h2').style.height = '50px'
        document.querySelector('#about-team').style.color = `#${data.team.alternateColor}`
        document.querySelector('#about-team').style.background = `#${data.team.color}`
        document.querySelector('#about-team').style.borderRadius = `5px`
        document.querySelector('#teamLogo').src = data.team.logos[2].href
        document.querySelector('#teamLogo').style.width = '250px'
        document.querySelector('#teamLogo').style.height = '250px'
        document.querySelector('#record').innerText = data.team.record.items[0].stats[18].value
        document.querySelector('#record').innerText += `-${data.team.record.items[0].stats[9].value}`
        document.querySelector('#record').innerText += `\n${data.team.standingSummary}`
        // document.querySelector('#record').innerText = data.team.nextEvent[0].name
        document.querySelector('#schedule').innerText = data.team.nextEvent[0].name
        document.querySelector('#schedule').innerText += `\n${data.team.nextEvent[0].shortName}`
        // for ( let i = 0; i < data.team.logos.length; i++){
        // document.querySelector('img').src = data.team.logos[i].href
        // }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//   fetch("https://api.balldontlie.io/v1/teams/", {
//   headers: {
//     "Authorization": "f1bcffca-958e-4f5b-b883-98f09747e044",
// }
// })
