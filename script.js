

count = 1;
var id;
function fileChange(event) {

    if (this.count > 4) {
        console.log("count++++", this.count)
        alert("You can't add more than 4 Images")
    } else {
        var preview = document.querySelector('img'); //selects the query named img
        var file = event.target.files[0]; //sames as here
        var reader = new FileReader();

        reader.onloadend = function () {
            preview.src = reader.result;
            document.getElementById("img5").src = preview.src;
        }

        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL
        } else {
            preview.src = "";
        }
        if (this.count == 2) {
            document.getElementById("img2").src = preview.src;
            // document.getElementById("img6").src = preview.src;

        } else if (this.count == 3) {
            document.getElementById("img3").src = preview.src;
            // document.getElementById("img7").src = preview.src;

        } else if (this.count == 4) {
            document.getElementById("img4").src = preview.src;
            // document.getElementById("img8").src = preview.src;

        }
        this.count++;
        console.log("count", this.count)
    }


}

function allowDrop(event) {
    event.preventDefault();
}


function dragStart(event) {
    id = event.target.id
    // alert(id);
}

function drop(event){
event.target.append(document.getElementById(id))
}




