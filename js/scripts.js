$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault()

        let list = $("#list").val();
        let array = list.split(" ");
        let newArray = []
        console.log(array);
        array.forEach(function (array) {
            // console.log(array);
            if (array.toString().length >= 3){
                //if greater or equal to 3, do this:
                newArray.push(array);
            } else {
                //if not, do this:
            }
            newArray.reverse()
            newArray.join()
        });
        console.log("OG: " + array);
        console.log("New: " + newArray);
        $("#here").text(newArray);
    });
});

        // let list = $("#list").val();
        // let list2 = $("#list2").val();
        // let list3 = $("#list3").val();
        // list = list.toUpperCase();
        // list2 = list2.toUpperCase();
        // list3 = list3.toUpperCase();
        // console.log(list);
        // console.log(list2);
        // console.log(list3);

        // let array = []
        // array.push(list, list2, list3);
        // // console.log(array);
        // array = array.sort();
        // array.forEach(function (array) {
        //     $("#here").append("<li>" + array + "</li>");
        //     alert(array);
        // });
