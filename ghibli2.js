
let database = []
let database_people = []
fetch("https://ghibliapi.herokuapp.com/films/")
    .then(function (response) {
        return response.json();

    })
    .then(function (res) {
        database = Object.assign(res)
      

        if (document.getElementById("button")) { document.getElementById("button").addEventListener("click", search) }

        function search() {
            searchquery = document.getElementById("search-engine").value
            let flag=false;
            for (i = 0; i < database.length; i++) {
                let title = database[i].title.toLowerCase();
                let search = searchquery.toLowerCase();
                

                if (title.includes(search)) {
                    flag = true;
                    let query;
                    let h3;
                    let h4;
                    let img;
                    let release_date;
                    let running_time;
                    let description;
                    if(!document.querySelector(`#query${i}`)){ 

                        query = document.createElement("h3");
                        query.id = "query"
                    } else {
                        query = document.querySelector("#query")
                    }
                    if(!document.querySelector(`#h1${i}`)){ 

                        h3 = document.createElement("h1");
                        h3.id = "h1"
                    } else {
                        h3 = document.querySelector("#h1")
                    }
                    if(!document.querySelector(`#h2${i}`)){ 

                        h4 = document.createElement("h2");
                        h4.id = "h2"
                    } else {
                        h4 = document.querySelector("#h2")
                    }
                    if(!document.querySelector(`#img${i}`)){ 

                        img = document.createElement("img");
                        img.id = "img"
                    } else {
                        img = document.querySelector("#img")
                    }
                    if(!document.querySelector(`#release_date${i}`)){ 

                        release_date = document.createElement("p");
                        release_date.id = "release_date"
                    } else {
                        release_date = document.querySelector("#release_date")
                    }
                    if(!document.querySelector(`#running_time${i}`)){ 

                        running_time = document.createElement("p");
                        running_time.id = "running_time"
                    } else {
                        running_time = document.querySelector("#running_time")
                    }
                    if(!document.querySelector(`#description${i}`)){ 

                        description = document.createElement("p");
                        description.id = "description"
                    } else {
                        description = document.querySelector("#description")
                    }
                    
                    query.innerText = "Showing results for: " + '"' + search + '"'
                    h3.innerText = "Title: " + database[i].title;
                    h4.innerText = "Original title:" + database[i].original_title;
                    img.src = database[i].image
                    release_date.innerText = "Release date: " + res[i].release_date;
                    running_time.innerText = "Running time: " + res[i].running_time + " minutes";
                    description.innerText = "Description: " + res[i].description;
                    let results = document.querySelector("#results")
                    let details = document.querySelector("#details")
                    results.appendChild(h3)
                    results.appendChild(h4)
                    results.appendChild(img)
                    results.appendChild(release_date)
                    results.appendChild(running_time)
                    details.appendChild(query)
                    details.appendChild(description)
                    
            }  
            }
            if (!flag) {
                alert("no results found, try a different query")

                }
            }

        if (document.getElementById("button2")) { document.getElementById("button2").addEventListener("click", fav) }
        function fav() {
            
            searchquery = document.getElementById("search-engine").value
            console.log(searchquery)
            for (i = 0; i < database.length; i++) {

                let title1 = database[i].title.toUpperCase();
                let search1 = searchquery.toUpperCase();
                if (title1.includes(search1)) {

                    let object = {
                        "query": search1,
                        "title": database[i].title,
                        "original title": database[i].original_title,
                        "image": database[i].image,
                        "release date": database[i].release_date,
                        "running time": database[i].running_time,
                        "description": database[i].description
                    }
                    let stg;
                    if (localStorage.getItem("arrayDelLocal"))
                    {
                        stg = localStorage.getItem("arrayDelLocal");
                        stg = JSON.parse(stg);
                    } else {
                        stg = []
                    }

                    stg.push(object);

                    stg = JSON.stringify(stg);
                    localStorage.setItem("arrayDelLocal", stg)


                }
            
        }
    }
                if (document.getElementById("button3")) { document.getElementById("button3").addEventListener("click", happpy_go_lucky) }
function happpy_go_lucky() {
    random_number = Math.floor((Math.random() * 21) + 1);
    for (x = 0; x <= database.length; x++) {
        if (random_number == x) {
                    let query;
                    let h3;
                    let h4;
                    let img;
                    let release_date;
                    let running_time;
                    let description;
                   

                    query = document.createElement("h3");
                     query.id = "query"
                   
                        h3 = document.createElement("h1");
                        h3.id = "h1"
                        h4 = document.createElement("h2");
                        h4.id = "h2"
                        img = document.createElement("img");
                        img.id = "img"
                  
                    

                        release_date = document.createElement("p");
                        release_date.id = "release_date"
                  

                        running_time = document.createElement("p");
                        running_time.id = "running_time"
                    

                        description = document.createElement("p");
                        description.id = "description"
                   
                    
                    query.innerText = "You life is..."+ database[x].title
                    h3.innerText = "Title: " + database[x].title;
                    h4.innerText = "Original title:" + database[x].original_title;
                    img.src = database[x].image
                    release_date.innerText = "Release date: " + res[x].release_date;
                    running_time.innerText = "Running time: " + res[x].running_time + " minutes";
                    description.innerText = "Description: " + res[x].description;
                    let results = document.querySelector("#results")
                    let details = document.querySelector("#details")
                    results.appendChild(h3)
                    results.appendChild(h4)
                    results.appendChild(img)
                    results.appendChild(release_date)
                    results.appendChild(running_time)
                    details.appendChild(query)
                    details.appendChild(description)

        }

    }
}
            })

if (document.querySelector("#fav")) {
    let localStg = localStorage.getItem("arrayDelLocal")
   
    parsedstg = JSON.parse(localStg)
    for(j=0; j<parsedstg.length; j++)
    {
    object2=parsedstg[j]
    new_array=Object.entries(object2)
    title=Object.keys(object2)
    content=Object.values(object2)
    for (i=0; i<title.length; i++)
        {let div = document.createElement("div")
        div.id="info";
        let h3 = document.createElement("h3")
        let img=document.createElement("img")
        img.id="img"
        let p=document.createElement("p")
        h3.innerText = title[i]+" "+(j+1) + ":"
        document.querySelector("#fav").appendChild(div)
        document.querySelector("div").appendChild(h3)
        if (title[i] === "image") {
            img.src = content[3]
           document.querySelector("div").appendChild(img)

       }
          else {
           p.innerText = content[i]
           document.querySelector("div").appendChild(p)

      }}
};
    

    }
    if (document.getElementById("button5"))
{document.querySelector("#button5").addEventListener("click", borrar);
function borrar(){ localStorage.clear();} }

    
if (document.getElementById("button"))
{document.querySelector("#button").addEventListener("click", play)}
if (document.getElementById("button2"))
{document.querySelector("#button2").addEventListener("click", play)}
if (document.getElementById("button3"))
{document.querySelector("#button3").addEventListener("click", play)}

function play(){
    var click = new Audio("mixkit-camera-shutter-click-1133.wav")

    click.play()
}