const container = document.getElementById("root");

// get the data
let all_data = []
d3.csv("../Resources/FIFA22_official_data.csv", function(data) {
    all_data = data

    //Filter out Players below 85 overall
    super_stars = all_data.filter(player => player.Overall >= 85);
        //add player image
    var img = document.createElement("img");
    var super_container = document.getElementById("superstars");

    super_stars.forEach(function(player){
        img.src = player.Photo
        img.id = "picture"
        img.width = 80
        super_container.appendChild(img);
    })

})


