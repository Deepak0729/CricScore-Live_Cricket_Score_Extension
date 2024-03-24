async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=73d01aeb-0f1d-4a69-8f0f-88b018bae8e6&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success") return;

            const matchesList = data.data;
            if(!matchesList)return [];

            const relevantData = matchesList.map(match => `${match.name},${match.status}`);
            console.log(relevantData);

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li> ${match}</li>`).join('');
            return relevantData;

        })
    .catch(e => console.log(e));
}
getMatchData();