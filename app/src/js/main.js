Handlebars.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
});

fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    .then(ghData => ghData.json())
    .then(ghData => {
        fetch('repo.hbs')
            .then(temp => temp.text())
            .then(temp => {
                hbsTemplate = Handlebars.compile(temp)
                console.log(ghData)
                let html = hbsTemplate(ghData)
                document.getElementById('repoBox').innerHTML += html
            })
    })


